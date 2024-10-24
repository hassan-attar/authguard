import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const unlinkAccountFromGoogle: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: unlinkAccountFromGoogle", new Error("NOT IMPLEMENTED")))
}

export {unlinkAccountFromGoogle}