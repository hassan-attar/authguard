import { RequestHandler } from "express";
import { ServerError } from "../../../errors";

const signInWithApple: RequestHandler = function(req, res, next){
    return next(new ServerError("NOT IMPLEMENTED: signInWithApple", new Error("NOT IMPLEMENTED")));
}

export {signInWithApple};