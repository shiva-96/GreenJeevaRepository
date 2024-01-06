// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;
const defaultConfig = require("../config/default.json")

const authMiddleware = (req, res, next) => {
    const token = req.header("x-auth-token");
    // Check if token is present
    if (!token) {
        return res.send({ status: 401, mssg: "No token, authorization denied" });
    }

    try {
        // Verify token
        jwt.verify(token, defaultConfig.SECRET_KEY, (error, user) => {
            if (error) return res.send({ status: 403, mssg: "User not authorized." });
            req.user = user;
            next();
        });
    } catch (error) {
        return res.send({ status: 401, mssg: "Invalid token" });
    }

};

module.exports = authMiddleware;
