const express = require("express");
const router = express.Router();
const AuthController= require("../Controllers/AuthController")


router.post("/register",AuthController.register);

router.post("/login",AuthController.login);

module.exports = router;