const express = require("express");
const router = express.Router();
const { signupUser, loginUser, getUserProfile } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Signup route
router.post("/signup", signupUser);

// Login route
router.post("/login", loginUser);

// Get logged-in user
router.get("/me", authMiddleware, getUserProfile);

module.exports = router;
