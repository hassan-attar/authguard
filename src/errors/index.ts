import { ErrorRequestHandler } from "express";
import { ClientError } from "./client-error";
import { ServerError } from "./server-error";
import { ValidationError } from "./validation-error";
import { NotFoundError } from "./not-found-error";
import { UnauthorizedError } from "./unauthorized-error";

/**
 * Error handling middleware for Express applications.
 * 
 * This middleware is designed to handle errors thrown during request processing.
 * It checks whether the error is an instance of `ClientError` or `ServerError`
 * and responds accordingly. If the error is not recognized, it defaults to
 * creating a `ServerError` instance to provide a standardized error response.
 * 
 * @param {Error} error - The error object thrown during request processing.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function in the stack.
 * 
 * @returns {void} Responds to the client with an appropriate error message.
 */
const middleware: ErrorRequestHandler = function(error, req, res, next) {
    if (error instanceof ClientError || error instanceof ServerError) {
        res.status(error.code).json(error);
    } else {
        const err = new ServerError(error?.message ?? "Error object with no error.message property", error);
        res.status(err.code).json(err);
    }
}

export {
    middleware,
    ValidationError,
    NotFoundError,
    ServerError,
    UnauthorizedError
}
