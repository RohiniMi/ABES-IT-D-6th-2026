import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://user:admin@userlogin.gvzptpp.mongodb.net/loggedUser?appName=userLogin";
const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("DB connection has been established successfully");
    } catch (error) {
        console.log("DB Error");
    }
}
export default dbConnect;