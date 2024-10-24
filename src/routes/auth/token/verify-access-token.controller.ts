import { RequestHandler } from "express";
import { ServerError } from "../../../errors";

const verifyAccessToken: RequestHandler = function(req, res, next){
    return next(new ServerError("NOT IMPLEMENTED: verifyAccessToken", new Error("NOT IMPLEMENTED")));
}

export {verifyAccessToken};