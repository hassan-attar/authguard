import express from "express"
import cors from "cors";
import { usersRouter } from "./routes/users";
import { authRouter } from "./routes/auth";
import { middleware as handleServiceErrors} from "./errors";
import { docsMiddleware } from "./openapi";
const app = express();

app.use(cors())

app.use(express.json());

app.use("/api/accounts/auth", authRouter)
app.use("/api/accounts/users", usersRouter)
app.use("/api/accounts/docs", docsMiddleware())

app.use(handleServiceErrors)
export {app}