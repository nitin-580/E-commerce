import express from 'express';
import {
  createOrder,
  getOrderById,
  getOrdersByUser,
  updateOrderStatus
} from '../controllers/orderController';
import authenticator from '../middlewares/auth.middleware';

const router = express.Router();

// Protect routes with authenticator middleware
router.post('/', authenticator, createOrder);
router.get('/:id', authenticator, getOrderById);
router.get('/user/:userId', authenticator, getOrdersByUser);
router.patch('/:id/status', authenticator, updateOrderStatus);

export default router;
