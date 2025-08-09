import { Request, Response } from 'express';
import Product from '../models/productModel';  // adjust path accordingly

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { productId, name, description, price, stockQuantity, category } = req.body;
    const images = (req.files as Express.Multer.File[]).map(file => file.path);


    const newProduct = new Product({
      productId,
      name,
      description,
      price,
      stockQuantity,
      category,
      images,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product created', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get product by ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update product by ID
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true, runValidators: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product updated', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete product by ID
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });

    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
