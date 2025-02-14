require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../models");

const RegisterUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            Name: name,
            Email: email,
            Password: hashedPassword,
            Role: role,
        });
        res.status(201).json({ message: "User registered successfully.", user });
    } catch (err) {
        console.error(err);
        if (err.name === 'SequelizeDatabaseError' || err.name === 'SequelizeValidationError') {
            res.status(500).json({ message: "Database error occurred. Please try again later." });
        } else {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
};


const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { Email: email } });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ UserId: user.UserID }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({ message: "Login successfully." });
    } catch (err) {
        console.error("Error in LoginUser:", err);
        res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};


module.exports = {
    RegisterUser,
    LoginUser,
};