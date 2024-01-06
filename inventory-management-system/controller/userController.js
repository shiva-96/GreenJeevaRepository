const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const {User} = require("../mongo_connection/imsSchema")
const secretKey = process.env.SECRET_KEY;
const defaultConfig = require("../config/default.json")



exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ status: 400, mssg: errors.array()[0].msg })
    }
    const { username, password } = req.body;
    try {
        // Checking if the username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.send({ status: 400, mssg: "Username is already taken" })
        }

        // Creating a new user
        const user = new User({ username, password });
        await user.save();
        res.send({ status: 200, mssg: "User registered successfully" })
    } catch (error) {
        console.error(error.message);
        res.send({ status: 500, mssg: "Server Error" })
    }
}

exports.loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send({ status: 400, mssg:  errors.array()[0].msg  })
    }
    const { username, password } = req.body;
    try {
        // Checking if the user exists or not
        const user = await User.findOne({ username });
        if (!user) {
            return res.send({ status: 400, mssg: "Invalid credentials" })
        }
        // Checking if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.send({ status: 401, mssg: "Invalid credentials" })
        }
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, defaultConfig.SECRET_KEY, { expiresIn: "1h" });
        return res.send({ status: 200, mssg: {token} })

    } catch (error) {
        console.error(error.message);
        return res.send({ status: 500, mssg: "Server Error" })
    }
}