import { RequestHandler } from "express";
import { ServerError } from "../../../errors";


const verifyChallenge: RequestHandler = function(req, res, next){
    next(new ServerError("NOT IMPLEMENTED: verifyChallenge", new Error("NOT IMPLEMENTED")))
}

export {verifyChallenge}