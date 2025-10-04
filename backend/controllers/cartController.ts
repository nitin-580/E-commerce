import { Request, Response } from "express";
import Order from "../models/orderModel"; // adjust path if needed
import mongoose from "mongoose";

/**
 * Create a new order
 */
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { user, products, totalAmount, paymentMethod, shippingAddress } = req.body;

    if (!user || !products || !totalAmount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newOrder = new Order({
      user,
      products,
      totalAmount,
      paymentMethod: paymentMethod || "Not specified",
      shippingAddress: shippingAddress || null,
    });

    const savedOrder = await newOrder.save();
    return res.status(201).json(savedOrder);
  } catch (err) {
    return res.status(500).json({ message: "Error creating order", error: err });
  }
};

/**
 * Get all orders for a user
 */
export const getOrdersByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const orders = await Order.find({ user: userId })
      .populate("products.product")
      .populate("shippingAddress");

    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching orders", error: err });
  }
};

/**
 * Get single order by ID
 */
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ message: "Invalid orderId" });
    }

    const order = await Order.findById(orderId)
      .populate("products.product")
      .populate("shippingAddress");

    if (!order) return res.status(404).json({ message: "Order not found" });

    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching order", error: err });
  }
};

/**
 * Update order status
 */
export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const { status, paymentStatus } = req.body;

    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ message: "Invalid orderId" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status, paymentStatus },
      { new: true }
    );

    if (!updatedOrder) return res.status(404).json({ message: "Order not found" });

    return res.status(200).json(updatedOrder);
  } catch (err) {
    return res.status(500).json({ message: "Error updating order", error: err });
  }
};

/**
 * Delete order
 */
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ message: "Invalid orderId" });
    }

    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) return res.status(404).json({ message: "Order not found" });

    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error deleting order", error: err });
  }
};
