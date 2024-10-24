import { RequestHandler } from "express";
import { ServerError } from "../../../errors";


const getAvailableMethodsForChallenge: RequestHandler = function(req, res, next){
    next(new ServerError("NOT IMPLEMENTED: getAvailableMethodsForChallenge", new Error("NOT IMPLEMENTED")))
}

export {getAvailableMethodsForChallenge}