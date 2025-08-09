import express from 'express';
import { upload } from '../middlewares/upload.middleware';
import { createProduct } from '../controllers/productController';

const router = express.Router();

router.post('/create', upload.array('images', 5), createProduct);

export default router;
