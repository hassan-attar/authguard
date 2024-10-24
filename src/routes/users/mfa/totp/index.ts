import { Router } from "express";
import { setupTotpMfaMethod } from "./setup-totp-method.controller";
import { removeTotpMfaMethod } from "./remove-totp-method.controller";
import { createTotpVerificationChallenge } from "./create-totp-challenge.controller";
import { verifyTotpChallenge } from "./verify-totp-challenge.controller";

const router = Router()

router.post("/", setupTotpMfaMethod);
router.delete("/", removeTotpMfaMethod);
router.post("/challenge", createTotpVerificationChallenge)
router.post("/verify", verifyTotpChallenge)
export {router as totpRouter}