const User = require("../models/userModel");

exports.home = (req, res) => {
    try {
        res.status(200).json({ success: true, message: "Welcome to homepage" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}

exports.createuser = (req, res, next) => {
    try {
        const newuser = new User(req.body);
        newuser.save();
        res.status(200).json({ success: true, message: "user is created succesfully", newuser });
    } catch (error) {
        res.status(500).json({ success: false, message: "There was an error in creating a user" })
    }

}