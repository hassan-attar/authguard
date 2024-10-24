import { RequestHandler } from "express"
import { ServerError } from "../../errors"
const signOut : RequestHandler = function(req, res, next){
    next(new ServerError("NOT IMPLEMENTED: signOut", new Error("NOT IMPLEMENTED")))
}

export {signOut}