import express from "express";
import dotenv from "dotenv";
import { dataSource } from "./db/connection";
dotenv.config()

const app = express();
const port = Number(process.env.SERVER_PORT);

dataSource.initialize().then(() => {
    console.log("Connection has been succeded.");
    app.listen(port, () => {
        console.log("Server is running on port "+ port);
    })
}).catch((err) => {
    console.log(err);
})

export default app;