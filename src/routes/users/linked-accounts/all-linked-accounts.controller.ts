import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const getAllLinkedAccounts: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: getAllLinkedAccounts", new Error("NOT IMPLEMENTED")))
}

export {getAllLinkedAccounts}