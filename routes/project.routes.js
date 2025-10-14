const express = require("express");
const router = express.Router();
const { createProject, getProjects } = require("../controllers/project.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createProject);
router.get("/", authMiddleware, getProjects);

module.exports = router;
