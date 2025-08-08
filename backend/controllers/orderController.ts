import { Request, Response } from 'express';
import Order from '../models/orderModel';

interface AuthRequest extends Request {
  user?: { id: string };
}

// Create a new order
export const createOrder = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const { products, totalAmount, shippingAddress } = req.body;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!products || !totalAmount) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newOrder = new Order({
      user: userId,
      products,
      totalAmount,
      shippingAddress,
      status: 'pending',
      paymentStatus: 'pending'
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);

  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
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
