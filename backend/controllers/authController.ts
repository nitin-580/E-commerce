import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/userModel';
import dotenv from 'dotenv';
import { sendEmail } from '../utils/sendEmails' // utility we'll create

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

// REGISTER
export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password, phoneNumber } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User Already Exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            name,
            email,
            passwordHash: hashedPassword, // FIXED FIELD NAME
            phoneNumber
        });

        await newUser.save();

        // Send welcome email
        const emailHTML = `
            <h2>Welcome to My E-Commerce, ${name}!</h2>
            <p>We’re excited to have you on board. Start shopping now!</p>
            <p>If you have any questions, just reply to this email — we’re always happy to help.</p>
        `;
        await sendEmail(email, 'Welcome to My E-Commerce!', emailHTML);

        res.status(201).json({
            message: 'User Registered Successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
};

// LOGIN
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and Password are required' });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        const isMatch = await bcrypt.compare(password, existingUser.passwordHash); // FIXED FIELD NAME
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const token = jwt.sign(
            { id: existingUser._id, role: existingUser.role },
            JWT_SECRET,
            { expiresIn: '30d' } // FIXED TYPO
        );

        res.status(200).json({
            message: 'User Logged In Successfully',
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
};
