import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const createSmsVerificationChallenge: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: createSmsVerificationChallenge", new Error("NOT IMPLEMENTED")))
}

export {createSmsVerificationChallenge}