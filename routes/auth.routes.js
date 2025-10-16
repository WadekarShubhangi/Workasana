const express = require("express");
const router = express.Router();
const { signupUser, loginUser, getUserProfile, getAllUsers} = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

// Signup route
router.post("/signup", signupUser);

// Login route
router.post("/login", loginUser);

// Get logged-in user
router.get("/me", authMiddleware, getUserProfile);

// Get all users
router.get("/users", authMiddleware, getAllUsers); 

module.exports = router;
