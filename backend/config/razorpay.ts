// backend/config/razorpay.ts
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',       // Your Razorpay key id (test/live)
  key_secret: process.env.RAZORPAY_KEY_SECRET || '', // Your Razorpay secret key
});

export default razorpay;