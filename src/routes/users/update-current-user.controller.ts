import { RequestHandler } from "express"
import { ServerError } from "../../errors"

const updateCurrentUserInfo: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: updateCurrentUserInfo", new Error("NOT IMPLEMENTED")))
}

export {updateCurrentUserInfo}