import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export const authenticatore = (req: Request, res: Response, next: NextFunction) => {
    const authheader = req.headers.authorization;
    if (!authheader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = decode; // Assuming you want to attach the decoded user info to the request
        next();
    } catch (error) {
        console.error('❌ Authentication error:', error);
        return res.status(401).json({ message: 'Invalid token' });
    }

}
export default authenticatore;