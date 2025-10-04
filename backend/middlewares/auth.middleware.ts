import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export interface AuthRequest extends Request {
  user?: { id: string };
}

export const authenticatore = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    // ✅ Attach only the ID to req.user
    req.user = { id: decoded.id };

    next();
  } catch (error) {
    console.error("❌ Authentication error:", error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authenticatore;
