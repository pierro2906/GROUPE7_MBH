import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const validate = (schema: AnyZodObject) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
    });
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json(
        error.issues.map((issue) => ({
          success: false,
          error: "VALIDATION_ERROR",
          message: issue.message,
        }))
      );
    } else {
      return res.status(500).json({
        error: {
          code: 500,
          error: "SERVER_ERROR",
          message: "Internal Server Error",
        },
      });
    }
  }
};

export { validate };
