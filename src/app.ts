import express from "express";
import dotenv from "dotenv";
import { dataSource } from "./db/connection";
import cors from "cors";
import morgan from "morgan";
import taskRouter from "./routes/taskRouter";
import memberRouter from "./routes/memberRouter";

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/api',taskRouter);
app.use('/api',memberRouter);

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