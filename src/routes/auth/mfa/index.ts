import { Router } from "express";
import { getAvailableMethodsForChallenge } from "./available-methods-for-challenge.controller";
import { requestMethodForChallenge } from "./request-method-for-challenge.controller";
import { cancelChallenge } from "./cancel-challenge.controller";
import { verifyChallenge } from "./verify-challenge.controller";

const router = Router()

router.post("/challenge/methods", getAvailableMethodsForChallenge)
router.patch("/challenge", requestMethodForChallenge)
router.post("/challenge/cancel", cancelChallenge)
router.post("/challenge/verify", verifyChallenge)

export {router as mfaRouter}