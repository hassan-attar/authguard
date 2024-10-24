import { RequestHandler } from "express"
import { ServerError } from "../../../errors"

const uploadNewProfileImage: RequestHandler = function(req, res, next) {
    next(new ServerError("NOT IMPLEMENTED: uploadNewProfileImage", new Error("NOT IMPLEMENTED")))
}

export {uploadNewProfileImage}