import { RequestHandler } from "express"
import { ServerError } from "../../errors"

const getCurrentUserInfo: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: getCurrentUserInfo", new Error("NOT IMPLEMENTED")))
}

export {getCurrentUserInfo}