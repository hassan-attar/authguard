import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const createEmailVerificationChallenge: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: createEmailVerificationChallenge", new Error("NOT IMPLEMENTED")))
}

export {createEmailVerificationChallenge}