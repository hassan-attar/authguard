import { RequestHandler } from "express";
import { ServerError } from "../../../errors";

const getAccessTokenThroughCodeExchange: RequestHandler = function(req, res, next){
    return next(new ServerError("NOT IMPLEMENTED: getAccessTokenThroughCodeExchange", new Error("NOT IMPLEMENTED")));
}

export {getAccessTokenThroughCodeExchange};