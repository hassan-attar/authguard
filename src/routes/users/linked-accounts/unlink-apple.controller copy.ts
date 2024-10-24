import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const unlinkAccountFromApple: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: unlinkAccountFromApple", new Error("NOT IMPLEMENTED")))
}

export {unlinkAccountFromApple}