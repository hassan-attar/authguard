import { RequestHandler } from "express"
import { ServerError } from "../../errors"
const signUp : RequestHandler = function(req, res, next){
    next(new ServerError("NOT IMPLEMENTED: signUp", new Error("NOT IMPLEMENTED")))
}

export {signUp}