import { Router } from "express";
import { getAccessTokenThroughCodeExchange } from "./get-access-token.controller";
import { verifyAccessToken } from "./verify-access-token.controller";
import { refreshAccessToken } from "./refresh-access-token.controller";
const router = Router();

router.get("/", getAccessTokenThroughCodeExchange)
router.get("/verify", verifyAccessToken)
router.get("/refresh", refreshAccessToken)

export {router as tokenRouter}