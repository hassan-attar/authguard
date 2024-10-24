import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const linkAccountToApple: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: linkAccountToApple", new Error("NOT IMPLEMENTED")))
}

export {linkAccountToApple}