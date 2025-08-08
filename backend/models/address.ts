import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  label: { type: String, default: 'Home' },
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: { type: String, default: 'India' },
  phoneNumber: String,
  isDefault: { type: Boolean, default: false }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema); // <-- Declare here

export default Address; // <-- Export after declaration
