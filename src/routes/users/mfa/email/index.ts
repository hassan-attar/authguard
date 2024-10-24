import { Router } from "express";
import { createEmailVerificationChallenge } from "./create-email-challenge.controller";
import { verifyEmailChallenge } from "./verify-email-challenge.controller";

const router = Router()

router.post("/challenge", createEmailVerificationChallenge)
router.post("/verify", verifyEmailChallenge)

export {router as emailRouter}