import crypto from "crypto";
import { Request, Response } from 'express';
import Order from '../models/orderModel';
import User from '../models/userModel';
import Payment from '../models/payment';  // Adjust path as needed

interface AuthRequest extends Request {
  user?: { id: string };
  orders?: {id: string};
}

// Create a new order
export const createOrder = async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user?.id;
      const { paymentRecordId, razorpayPaymentId, razorpayOrderId, razorpaySignature, products, totalAmount, shippingAddress } = req.body;
  
      if (!userId) return res.status(401).json({ message: "Unauthorized" });
  
      if (!paymentRecordId || !razorpayPaymentId || !razorpayOrderId || !razorpaySignature || !products || !totalAmount) {
        return res.status(400).json({ message: "Missing required fields" });
      }
  
      // 1️⃣ Verify Razorpay signature
      const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
        .update(razorpayOrderId + "|" + razorpayPaymentId)
        .digest("hex");
  
      if (generatedSignature !== razorpaySignature) {
        return res.status(400).json({ message: "Invalid payment signature" });
      }
  
      // 2️⃣ Update payment record status to 'completed'
      const payment = await Payment.findById(paymentRecordId);
      if (!payment) return res.status(404).json({ message: "Payment record not found" });
  
      payment.paymentId = razorpayPaymentId;
      payment.status = "completed";
      await payment.save();
  
      // 3️⃣ Create order
      const newOrder = new Order({
        user: userId,
        products,
        totalAmount,
        shippingAddress,
        status: "confirmed",
        paymentStatus: "completed",
      });
      await newOrder.save();
  
      // Link order to payment
      payment.order = newOrder._id;
      await payment.save();
  
      await User.findByIdAndUpdate(userId, { $push: { orders: newOrder._id } });
  
      res.status(201).json({ message: "Order created successfully after payment", order: newOrder, payment });
    } catch (error) {
      res.status(500).json({ message: "Failed to create order after payment", error });
    }
  };

// Get order by ID (any user can fetch by order id)
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('products.product', 'name price')
      .populate('shippingAddress');
    
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch order', error });
  }
};

// Get all orders for logged-in user
export const getOrdersByUser = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const orders = await Order.find({ user: userId })
      .populate('products.product', 'name price')
      .populate('shippingAddress')
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
};

// Update order status (admin or authorized roles only)
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { status, paymentStatus } = req.body;
    const orderId = req.params.id;

    const updatedOrder = await Order.findByIdAndUpdate(orderId, { status, paymentStatus }, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order', error });
  }
};
