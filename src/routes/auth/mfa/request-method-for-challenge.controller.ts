import { RequestHandler } from "express";
import { ServerError } from "../../../errors";


const requestMethodForChallenge: RequestHandler = function(req, res, next){
    next(new ServerError("NOT IMPLEMENTED: requestMethodForChallenge", new Error("NOT IMPLEMENTED")))
}

export {requestMethodForChallenge}