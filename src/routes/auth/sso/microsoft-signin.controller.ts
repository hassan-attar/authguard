import { RequestHandler } from "express";
import { ServerError } from "../../../errors";

const signInWithMicrosoft: RequestHandler = function(req, res, next){
    return next(new ServerError("NOT IMPLEMENTED: signInWithMicrosoft", new Error("NOT IMPLEMENTED")));
}

export {signInWithMicrosoft};