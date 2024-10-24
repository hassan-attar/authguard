import { RequestHandler } from "express";
import { ServerError } from "../../../errors";


const cancelChallenge: RequestHandler = function(req, res, next){
    next(new ServerError("NOT IMPLEMENTED: cancelChallenge", new Error("NOT IMPLEMENTED")))
}

export {cancelChallenge}