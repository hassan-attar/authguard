import { Router } from "express";
import { getAllAvailableMfaMethods } from "./all-available-methods.controller";
import { smsRouter } from "./sms";
import { totpRouter } from "./totp";

const router = Router()

router.get("/methods", getAllAvailableMfaMethods);
router.use("/methods/sms", smsRouter)
router.use("/methods/totp", totpRouter)
export {router as userMfaRouter}
