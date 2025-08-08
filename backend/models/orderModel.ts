import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    // orderId can be generated separately if needed
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 }
    }],
    totalAmount: { type: Number, required: true, min: 0 },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled']
    },
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' }, // optional
    paymentMethod: { type: String }, // optional, e.g., 'card', 'upi'
    shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' } // optional
  }, { timestamps: true });
  
  const Order = mongoose.model('Order',orderSchema);
  export default Order;