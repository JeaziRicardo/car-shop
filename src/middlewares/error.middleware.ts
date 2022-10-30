import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import CustomError from '../errors/customError';

export default function errorMiddleware(
  err: CustomError | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  if (err instanceof ZodError) { 
    return res.status(400).json({ message: err.issues });
  }
  return res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
}