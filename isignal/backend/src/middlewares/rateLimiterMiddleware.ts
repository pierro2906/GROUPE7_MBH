import rateLimit from "express-rate-limit";
import { NextFunction, Request, Response } from "express";
import config from "@config/app";
import logEvents from "@utils/logger/loggerUtil";
export const rateLimiter = rateLimit({
  windowMs: parseInt(config.ratelimiter.window) * 60 * 1000, // 15 minutes
  max: parseInt(config.ratelimiter.max),
  message: {
    message:
      "Trop de tentatives de connexions, réssayer apres soixante seconde",
  },
  handler: (req: Request, res: Response, next: NextFunction, options) => {
    logEvents(
      `Too many request:${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
      "errLog.log"
    );
    res.status(options.statusCode).send(options.message);
  },
  standardHeaders: true,
  legacyHeaders: false,
});
