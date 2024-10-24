import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const createTotpVerificationChallenge: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: createTotpVerificationChallenge", new Error("NOT IMPLEMENTED")))
}

export {createTotpVerificationChallenge}