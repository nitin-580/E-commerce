const express = require('express');
const router = express.Router();
import { registerUser, loginUser } from '../controllers/authController';

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

export default router;
