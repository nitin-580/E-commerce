import crypto from 'crypto';
import razorpay from '../config/razorpay';
import { Response } from 'express';
import User from '../models/userModel';
import Payment from '../models/payment';
import { AuthRequest } from '../middlewares/auth.middleware';
import Order from '../models/orderModel';

export const createRazorpayOrder = async (req: AuthRequest, res: Response) => {
  try {
    const { amount, currency = 'INR', receipt } = req.body;
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    if (!amount || !receipt) {
      return res.status(400).json({ message: 'Amount and receipt are required' });
    }

    const options = {
      amount: amount * 100, // paise
      currency,
      receipt,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    // Create payment record in DB (status pending)
    const payment = new Payment({
      user: userId,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      status: 'pending',
      method: 'razorpay',
    });

    await payment.save();

    res.status(201).json({ razorpayOrder, paymentId: payment._id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
  }
};
