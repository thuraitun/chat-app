const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });

    if(user) return res.status(400).json({
        message: "User is already registered...."
    })

    if(!name || !email || !password) return res.status(400).json({
        message: "All fields are required..."
    })

    if(!validator.isEmail(email)) return res.status(400).json({
        message: "Email must be a valid email address...."
    })

    if(!validator.isStrongPassword(password)) return res.status(400).json({
        message: "Password must be a strong password...."
    });
}


module.exports = {
    registerUser
}