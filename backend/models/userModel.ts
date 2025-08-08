const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, default: 'customer', enum: ['customer', 'admin', 'employee'] },
  phoneNumber: { type: String, unique: true, sparse: true },
  
  isEmailVerified: { type: Boolean, default: false },
  isPhoneVerified: { type: Boolean, default: false },
  
  resetPasswordToken: String,
  resetPasswordExpires: Date,

  // Relationships
  cart: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
  }],
  
  savedPaymentMethods: [{
    type: { type: String, enum: ['card', 'upi', 'paypal'] }, // restrict payment types
    provider: String,
    last4Digits: String,
    token: String // token from payment gateway
  }],  
  
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  productsBought: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  complaints: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Complaint' }],
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }]
  
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
export default userSchema;