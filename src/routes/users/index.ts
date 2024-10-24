import {Router } from "express"
import { sessionsRouter } from "./sessions";
import { getCurrentUserInfo } from "./current-user-info.controller";
import { updateCurrentUserInfo } from "./update-current-user.controller";
import { requestAccountDeletion } from "./request-account-deletion.controller";
import { linkedAccountsRouter } from "./linked-accounts";
import { profileImageRouter } from "./profile-image";
import { userMfaRouter } from "./mfa";
const router = Router();

router.get("/me", getCurrentUserInfo)
router.patch("/me", updateCurrentUserInfo)
router.delete("/me", requestAccountDeletion)
router.use("/me/mfa", userMfaRouter);
router.use("/me/linked-accounts", linkedAccountsRouter)
router.use("/me/profile-image", profileImageRouter)
router.use("/me/sessions", sessionsRouter);

export {router as usersRouter}