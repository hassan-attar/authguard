import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const verifyTotpChallenge: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: verifyTotpChallenge", new Error("NOT IMPLEMENTED")))
}

export {verifyTotpChallenge}