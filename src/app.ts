import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express();
const port = Number(process.env.SERVER_PORT);

app.listen(port, () => {
    console.log("Server is running on port "+ port);
})

export default app;