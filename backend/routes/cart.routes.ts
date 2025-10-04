import { Router } from "express";
import {
  createOrder,
  getOrdersByUser,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/cartController";

const router = Router();

router.post("/", createOrder);
router.get("/user/:userId", getOrdersByUser);
router.get("/:orderId", getOrderById);
router.put("/:orderId", updateOrderStatus);
router.delete("/:orderId", deleteOrder);

export default router;
