import express from "express";
import dbConnect from "./config/dbConnect.js";
import { registerController ,getUser,changePass,deleteUser} from "./controller/crud.js";
import { apiErrorMiddleware } from "./middleware/apiErrorMiddleware.js";

const app = express();
const PORT = 8800;
app.use(express.json());
dbConnect();
app.get("/user/:email",getUser)
app.post("/user",registerController);

app.put("/user/:email",changePass);
app.delete("user/:email",deleteUser);

app.use(apiErrorMiddleware);
app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))