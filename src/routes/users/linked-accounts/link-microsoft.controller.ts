import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const linkAccountToMicrosoft: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: linkAccountToMicrosoft", new Error("NOT IMPLEMENTED")))
}

export {linkAccountToMicrosoft}