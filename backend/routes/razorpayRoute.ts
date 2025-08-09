import express from 'express';
import { createRazorpayOrder } from '../controllers/paymentController';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/create-order',authMiddleware, createRazorpayOrder);

export default router;
