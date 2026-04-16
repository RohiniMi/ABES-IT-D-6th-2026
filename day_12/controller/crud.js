import User from "../models/User.js";
export const registerController = async (req, res) => {
    try {
        const userData = req.body;
        console.log(userData);
        const user = await User.create(userData);
        res.status(200).json({ message: "User has benn created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}
export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        res.status(200).json({ data: user, message: "success" })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

export const changePass = (req,res) => {
    try {

    } catch (error) {

    }
}
export const deleteUser = (req,res) => {
    try {

    } catch (error) {

    }
}