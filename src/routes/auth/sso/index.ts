import { Router } from "express";
import { signInWithGoogle } from "./google-signin.controller";
import { signInWithApple } from "./apple-signin.controller";
import { signInWithMicrosoft } from "./microsoft-signin.controller";
const router = Router();

router.get("/google", signInWithGoogle)
router.get("/apple", signInWithApple)
router.get("/microsoft", signInWithMicrosoft)

export {router as SsoRouter}