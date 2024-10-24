import {app} from "./app"

const startUp = async () => {
    app.listen(3000, () => {
        console.log("app listening on 3000...");
    })
}

startUp()