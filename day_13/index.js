import express from "express";
import dbConnect from "./config/db.js";
const app = express();
const PORT = 8800;
dbConnect();
app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.headers["user-agent"]);
})
app.get("/users", (req, res) => {
    res.status(200).json({ message: "ok" });
})
app.listen(PORT,
    () => console.log(`server is running at http://localhost:${PORT}`))