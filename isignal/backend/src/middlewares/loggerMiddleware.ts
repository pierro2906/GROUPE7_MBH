import { NextFunction, Request, Response } from "express";

import logEvents from "@utils/logger/loggerUtil";

export const logger = (req: Request, res: Response, next: NextFunction) => {
  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "reqLog.log");
  console.log(`${req.method}\t${req.url}\t${req.headers.origin}`);
  next();
};

// module.exports = { logEvent, logger }
