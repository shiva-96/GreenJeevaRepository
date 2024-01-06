const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { check } = require('express-validator');


router.post("/register-user",
    [
        check('username', 'Username is required').notEmpty(),
        check('password', 'Password is required').notEmpty(),
    ], userController.registerUser
);
router.post("/login",
    [
        check('username', 'Username is required').notEmpty(),
        check('password', 'Password is required').notEmpty(),
    ],
    userController.loginUser
);


module.exports = router;

