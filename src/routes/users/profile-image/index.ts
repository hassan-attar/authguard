import { Router } from "express";
import { uploadNewProfileImage } from "./upload-profile-image.controller";
import { removeProfileImage } from "./remove-profile-image.controller";

const router = Router()

router.put("/", uploadNewProfileImage)
router.delete("/", removeProfileImage)

export {router as profileImageRouter}