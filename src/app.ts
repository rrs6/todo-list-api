import express from "express";

const app = express();
const port = Number(process.env.PORT);

app.listen(port, () => {
    console.log("Server is running on port "+ port);
})

export default app;