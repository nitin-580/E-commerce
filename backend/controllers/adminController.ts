import { Request, Response } from "express";
import User from "../models/userModel";
import Product from "../models/productModel";
import Order from "../models/orderModel";
import Payment from "../models/payment";
import Review from "../models/review";
import Complaint from "../models/complaint";
import Address from "../models/address";

/* ==========================
   USER MANAGEMENT
   ========================== */
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-passwordHash");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error });
  }
};

export const updateUserRole = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(userId, { role }, { new: true }).select("-passwordHash");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User role updated", user });
  } catch (error) {
    res.status(500).json({ message: "Failed to update role", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error });
  }
};

/* ==========================
   PRODUCT MANAGEMENT
   ========================== */
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product updated", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
};

/* ==========================
   ORDER MANAGEMENT
   ========================== */
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product", "name price")
      .populate("shippingAddress");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: "Failed to update order", error });
  }
};

/* ==========================
   PAYMENT MANAGEMENT
   ========================== */
export const getAllPayments = async (req: Request, res: Response) => {
  try {
    const payments = await Payment.find()
      .populate("user", "name email")
      .populate("order", "status totalAmount");
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch payments", error });
  }
};

export const updatePaymentStatus = async (req: Request, res: Response) => {
  try {
    const { paymentId } = req.params;
    const { status } = req.body;

    const payment = await Payment.findByIdAndUpdate(paymentId, { status }, { new: true });
    if (!payment) return res.status(404).json({ message: "Payment not found" });

    res.json({ message: "Payment status updated", payment });
  } catch (error) {
    res.status(500).json({ message: "Failed to update payment", error });
  }
};

/* ==========================
   REVIEW MANAGEMENT
   ========================== */
export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find()
      .populate("user", "name email")
      .populate("product", "name price");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews", error });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const deletedReview = await Review.findByIdAndDelete(reviewId);
    if (!deletedReview) return res.status(404).json({ message: "Review not found" });

    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review", error });
  }
};

/* ==========================
   COMPLAINT MANAGEMENT
   ========================== */
export const getAllComplaints = async (req: Request, res: Response) => {
  try {
    const complaints = await Complaint.find()
      .populate("user", "name email")
      .populate("order", "status");
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch complaints", error });
  }
};

export const updateComplaintStatus = async (req: Request, res: Response) => {
  try {
    const { complaintId } = req.params;
    const { status } = req.body;

    const complaint = await Complaint.findByIdAndUpdate(complaintId, { status }, { new: true });
    if (!complaint) return res.status(404).json({ message: "Complaint not found" });

    res.json({ message: "Complaint status updated", complaint });
  } catch (error) {
    res.status(500).json({ message: "Failed to update complaint", error });
  }
};

/* ==========================
   ADDRESS MANAGEMENT
   ========================== */
export const getAllAddresses = async (req: Request, res: Response) => {
  try {
    const addresses = await Address.find().populate("user", "name email");
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch addresses", error });
  }
};
