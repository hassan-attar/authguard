import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const verifyEmailChallenge: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: verifyEmailChallenge", new Error("NOT IMPLEMENTED")))
}

export {verifyEmailChallenge}