import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const unlinkAccountFromMicrosoft: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: unlinkAccountFromMicrosoft", new Error("NOT IMPLEMENTED")))
}

export {unlinkAccountFromMicrosoft}