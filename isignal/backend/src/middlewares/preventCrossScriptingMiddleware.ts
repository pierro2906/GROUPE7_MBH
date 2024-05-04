import { Express, Request, Response, NextFunction } from "express";

// Your custom "middleware" function:
export default function preventCrossSiteScripting(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
}
