import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const getAllAvailableMfaMethods: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: getAllAvailableMfaMethods", new Error("NOT IMPLEMENTED")))
}

export {getAllAvailableMfaMethods}