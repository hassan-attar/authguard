import { RequestHandler } from "express"
import { ServerError } from "../../../../errors"

const verifySmsChallenge: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: verifySmsChallenge", new Error("NOT IMPLEMENTED")))
}

export {verifySmsChallenge}