import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const setupSmsMfaMethod: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: setupSmsMfaMethod", new Error("NOT IMPLEMENTED")))
}

export {setupSmsMfaMethod}