import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const removeProfileImage: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: removeProfileImage", new Error("NOT IMPLEMENTED")))
}

export {removeProfileImage}