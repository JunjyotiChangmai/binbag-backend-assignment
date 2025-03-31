const express = require("express");
const { handleRegister, handleLogin } = require("../controllers/authController.js");
const router = express.Router();

// Register
router.post("/register", handleRegister);

// Login
router.post("/login", handleLogin);

module.exports = router;