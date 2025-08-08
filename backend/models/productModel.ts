import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    productId: String,
    name: String,
    description: String,
    price: Number,
    stockQuantity: Number,
    category: String,
    images: [String]
  }, { timestamps: true });
  
const Product = mongoose.model('Product', productSchema);
export default Product;