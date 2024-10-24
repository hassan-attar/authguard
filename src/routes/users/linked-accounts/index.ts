import { Router } from "express";
import { getAllLinkedAccounts } from "./all-linked-accounts.controller";
import { linkAccountToGoogle } from "./link-google.controller";
import { linkAccountToApple } from "./link-apple.controller";
import { linkAccountToMicrosoft } from "./link-microsoft.controller";
import { unlinkAccountFromGoogle } from "./unlink-google.controller copy";
import { unlinkAccountFromApple } from "./unlink-apple.controller copy";
import { unlinkAccountFromMicrosoft } from "./unlink-microsoft.controller copy";

const router = Router()

router.get("/", getAllLinkedAccounts)
router.get("/google", linkAccountToGoogle)
router.get("/apple", linkAccountToApple)
router.get("/microsoft", linkAccountToMicrosoft)
router.delete("/google", unlinkAccountFromGoogle)
router.delete("/apple", unlinkAccountFromApple)
router.delete("/microsoft", unlinkAccountFromMicrosoft)

export {router as linkedAccountsRouter}