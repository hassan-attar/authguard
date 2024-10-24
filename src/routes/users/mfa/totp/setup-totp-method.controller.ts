import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const setupTotpMfaMethod: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: setupTotpMfaMethod", new Error("NOT IMPLEMENTED")))
}

export {setupTotpMfaMethod}