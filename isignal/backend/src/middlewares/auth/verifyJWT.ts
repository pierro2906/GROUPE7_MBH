import config from "@config/app";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import httpMsg from "@utils/http/httpMessageUtil";

/* It checks if the token is valid and if it is, it decodes it and attaches the decoded token to the request object */
const verifyJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const token = String(req.headers.authorization)
    .replace(/^bearer|^jwt/i, "")
    .replace(/^\s+|\s+$/gi, "");

  try {
    if (!token) {
      return res.status(403).json({
        statusCode: 403,
        msg: "A token is required for authentication",
      });
    }

    /* Verifying the token. */
    const decoded = jwt.verify(token, config.jwt.aceessToken as string);
    // req.userData = decoded;
    (req as any).authorityId = (decoded as any).authorityId;
    (req as any).role = (decoded as any).role;

    // console.log(req.user);
    // console.log(req.roles);
  } catch (err) {
    const response = httpMsg.http401({ message: (err as any).message });
    return res.status(response.httpStatusCode).json(response.data);
  }
  return next();
};

export default verifyJWT;
