import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import crypto from "crypto";
import User from "../models/userModel";
import dotenv from "dotenv";
import { sendEmail } from "../utils/sendEmails"; // utility to send mails

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

// ✅ REGISTER
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User Already Exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      passwordHash: hashedPassword,
      phoneNumber,
    });

    await newUser.save();

    const emailHTML = `
      <h2>Welcome to My E-Commerce, ${name}!</h2>
      <p>We’re excited to have you on board. Start shopping now!</p>
    `;
    await sendEmail(email, "Welcome to My E-Commerce!", emailHTML);

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ LOGIN
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and Password are required" });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(400).json({ message: "User does not exist" });

    const isMatch = await bcrypt.compare(password, existingUser.passwordHash);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { id: existingUser._id, role: existingUser.role },
      JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      message: "User Logged In Successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ LOGOUT (client-side in JWT; here we just acknowledge)
export const logout = async (req: Request, res: Response) => {
  try {
    // Optionally maintain blacklist in DB/Redis
    res.status(200).json({ message: "User Logged Out Successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
// ✅ FORGOT PASSWORD
export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenHash = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordToken = resetTokenHash;
    user.resetPasswordExpire = new Date(Date.now() + 15 * 60 * 1000); // 15 mins
    await user.save();

    const resetURL = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
    const emailHTML = `
      <h2>Password Reset</h2>
      <p>Click the link to reset your password:</p>
      <a href="${resetURL}">${resetURL}</a>
      <p>Valid for 15 minutes.</p>
    `;
    await sendEmail(user.email, "Password Reset Request", emailHTML);

    res.status(200).json({ message: "Password reset link sent to email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ RESET PASSWORD
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const resetTokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: resetTokenHash,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    user.passwordHash = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(200).json({ message: "Password Reset Successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ GET USERS (admin only)
export const users = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find().select(
      "-passwordHash -resetPasswordToken -resetPasswordExpire"
    );
    res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
