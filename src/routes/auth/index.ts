import { Router } from "express";
import { signInWithEmailPassword } from "./signin-email-password.controller";
import { signUp } from "./sign-up.controller";
import { signOut } from "./sign-out.controller";
import { SsoRouter } from "./sso";
import { tokenRouter } from "./token";
import { mfaRouter } from "./mfa";
const router = Router();

router.post("/signin", signInWithEmailPassword)
router.post("/signup", signUp)
router.delete("/signout", signOut)

router.use("/signin/sso", SsoRouter)
router.use("/token", tokenRouter)
router.use("/mfa", mfaRouter)


export {router as authRouter}