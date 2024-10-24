import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const getAllSessions: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: getAllSessions", new Error("NOT IMPLEMENTED")))
}

export {getAllSessions}