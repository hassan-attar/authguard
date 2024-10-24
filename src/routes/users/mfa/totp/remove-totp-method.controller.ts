import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const removeTotpMfaMethod: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: removeTotpMfaMethod", new Error("NOT IMPLEMENTED")))
}

export {removeTotpMfaMethod}