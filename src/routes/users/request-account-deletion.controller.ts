import { RequestHandler } from "express"
import { ServerError } from "../../errors"

const requestAccountDeletion: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: requestAccountDeletion", new Error("NOT IMPLEMENTED")))
}

export {requestAccountDeletion}