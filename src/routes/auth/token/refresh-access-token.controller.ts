import { RequestHandler } from "express";
import { ServerError } from "../../../errors";

const refreshAccessToken: RequestHandler = function(req, res, next){
    return next(new ServerError("NOT IMPLEMENTED: refreshAccessToken", new Error("NOT IMPLEMENTED")));
}

export {refreshAccessToken};