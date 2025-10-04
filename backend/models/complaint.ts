import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    message: String,
    status: { type: String, default: 'open' }
  }, { timestamps: true });
export default mongoose.model('Complaint', complaintSchema);