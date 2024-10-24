import { Router } from "express";
import { setupSmsMfaMethod } from "./setup-sms-method.controller";
import { removeSmsMfaMethod } from "./remove-sms-method.controller";
import { verifySmsChallenge } from "./verify-sms-challenge.controller";
import { createSmsVerificationChallenge } from "./create-sms-challenge.controller";

const router = Router()

router.post("/", setupSmsMfaMethod)
router.delete("/", removeSmsMfaMethod)
router.post("/challenge", createSmsVerificationChallenge)
router.post("/verify", verifySmsChallenge)


export {router as smsRouter}