import { Router } from "express";
import { getAllSessions } from "./all-sessions.controller";
import { destroySession } from "./destroy-session.controller";

const router = Router();

router.get("/", getAllSessions)
router.delete("/:sessionId", destroySession)

export {router as sessionsRouter}