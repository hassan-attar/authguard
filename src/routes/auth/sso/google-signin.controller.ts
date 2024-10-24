import { RequestHandler } from "express";
import { ServerError } from "../../../errors";

const signInWithGoogle: RequestHandler = function(req, res, next){
    return next(new ServerError("NOT IMPLEMENTED: signInWithGoogle", new Error("NOT IMPLEMENTED")));
}

export {signInWithGoogle};