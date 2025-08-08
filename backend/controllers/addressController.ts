import { Request, Response } from 'express';
import User from '../models/userModel';
import Address from '../models/address';

interface AuthRequest extends Request {
    user?: {
        id: string;
    };
    }
export const addAddress = async (req:AuthRequest, res:Response) => {
  try {
    const userId = req.user?.id;
    const { label, street, city, state, postalCode, country, phoneNumber, isDefault } = req.body;

    const newAddress = new Address({
      user: userId,
      label,
      street,
      city,
      state,
      postalCode,
      country,
      phoneNumber,
      isDefault
    });

    await newAddress.save();

    await User.findByIdAndUpdate(userId, {
      $push: { addresses: newAddress._id }
    });

    res.status(201).json({ message: 'Address added successfully', address: newAddress });
  } catch (error) {
    res.status(500).json({ message: 'Error adding address', error });
  }
};
