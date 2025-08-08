import { Request,Response } from "express";
import User from "../models/userModel";

interface AuthRequest extends Request{
    user?:{
        id: string;
    }
}

export const getUserProfile = async (req: AuthRequest, res: Response) => {
    try{
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const user = await User.findById(userId).select('-passwordHash'); // Exclude passwordHash from the response
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
        
    }catch (error) {
        console.error('❌ Error fetching user profile:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}