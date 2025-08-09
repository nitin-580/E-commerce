import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    razorpayOrderId: { type: String, required: true }, // add this
    paymentId: { type: String },     // Razorpay payment id
    amount: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    status: {
        type: String,
        enum: ['pending', 'paid', 'failed', 'completed'],  // added 'completed'
        default: 'pending',
      },    method: { type: String },
      
    createdAt: { type: Date, default: Date.now },
  });

  export default mongoose.model('Payment', paymentSchema);