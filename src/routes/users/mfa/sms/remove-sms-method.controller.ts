import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const removeSmsMfaMethod: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: removeSmsMfaMethod", new Error("NOT IMPLEMENTED")))
}

export {removeSmsMfaMethod}