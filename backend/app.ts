import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import profileRoutes from './routes/profile.routes' 
import orderRoutes from './routes/order.routes'// include .js if using ES modules
import productRoutes from './routes/product.routes';
import paymentRoute from './routes/razorpayRoute' // include .js if using ES modules

dotenv.config();

const app = express();
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API');
});

// Auth routes
app.use('/api/auth', authRoutes);
app.use('/api/profile',profileRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/payment', paymentRoute);

const PORT = process.env.PORT 
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => console.log('Server running on port ' + process.env.PORT));
  })
  .catch(err => console.error(err));
