import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }],
    totalAmount: Number,
    status: { type: String, default: 'pending' }
  }, { timestamps: true });
  