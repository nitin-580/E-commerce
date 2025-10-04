import express from "express";
import {
  getAllUsers,
  updateUserRole,
  deleteUser,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getAllOrders,
  updateOrderStatus,
  getAllPayments,
  updatePaymentStatus,
  getAllReviews,
  deleteReview,
  getAllComplaints,
  updateComplaintStatus,
  getAllAddresses,
} from "../controllers/adminController";
import adminMiddleware from "../middlewares/auth.middleware";

const router = express.Router();

// Users
router.get("/users", adminMiddleware, getAllUsers);
router.put("/users/:userId/role", adminMiddleware, updateUserRole);
router.delete("/users/:userId", adminMiddleware, deleteUser);

// Products
router.get("/products", adminMiddleware, getAllProducts);
router.put("/products/:productId", adminMiddleware, updateProduct);
router.delete("/products/:productId", adminMiddleware, deleteProduct);

// Orders
router.get("/orders", adminMiddleware, getAllOrders);
router.put("/orders/:orderId/status", adminMiddleware, updateOrderStatus);

// Payments
router.get("/payments", adminMiddleware, getAllPayments);
router.put("/payments/:paymentId/status", adminMiddleware, updatePaymentStatus);

// Reviews
router.get("/reviews", adminMiddleware, getAllReviews);
router.delete("/reviews/:reviewId", adminMiddleware, deleteReview);

// Complaints
router.get("/complaints", adminMiddleware, getAllComplaints);
router.put("/complaints/:complaintId/status", adminMiddleware, updateComplaintStatus);

// Addresses
router.get("/addresses", adminMiddleware, getAllAddresses);

export default router;
