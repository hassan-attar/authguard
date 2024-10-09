import express from "express"
import {json} from "express"

const app = express();
app.use(json());

app.get("/api/accounts/me", (req, res) => {
    res.json({
        id: "1234",
        firstName: "Hassan",
        lastName: "Attar",
        createAt: "2024-10-07"
    })
})

app.listen(3000, () => {
    console.log("Accounts service listening on port 3000...");
})