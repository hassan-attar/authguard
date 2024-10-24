import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const linkAccountToGoogle: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: linkAccountToGoogle", new Error("NOT IMPLEMENTED")))
}

export {linkAccountToGoogle}