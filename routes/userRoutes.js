const express = require("express");
const { handleGetProfile, handlePutProfile } = require("../controllers/userController.js");
const router = express.Router();

// Get User Profile
router.get("/profile", handleGetProfile);

// Update User Profile
router.put("/profile", handlePutProfile);

module.exports = router;