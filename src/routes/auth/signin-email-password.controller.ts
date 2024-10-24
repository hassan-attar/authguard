import { RequestHandler } from "express"
import { ServerError } from "../../errors"
const signInWithEmailPassword : RequestHandler = function(req, res, next){
    next(new ServerError("NOT IMPLEMENTED: signInWithEmailPassword", new Error("NOT IMPLEMENTED")))
}

export {signInWithEmailPassword}