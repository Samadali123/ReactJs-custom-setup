const User = require("../models/userModel");

exports.home = (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Welcome to homepage" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}

exports.createuser = async(req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).json({ success: true, message: "user is created succesfully", user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }

}