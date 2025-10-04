import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: { id: string; role: string };
}

const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }
  next();
};

export default adminMiddleware;
