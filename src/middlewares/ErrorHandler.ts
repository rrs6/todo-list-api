import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";

export default function errorHandler(error: unknown, req: Request, res: Response, next: NextFunction) {
    let errorMessage = "An unknown error occurred.";
    let errorStatusCode = 500;
    if(error instanceof HttpError){
        errorMessage = error.message;
        errorStatusCode = error.statusCode;
    }
    return res.status(errorStatusCode).json({message: errorMessage});
}