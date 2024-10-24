import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const destroySession: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: destroySession", new Error("NOT IMPLEMENTED")))
}

export {destroySession}