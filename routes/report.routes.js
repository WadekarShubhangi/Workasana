const express = require("express");
const router = express.Router();
const { getLastWeekReport, getPendingWork, getClosedTasksByTeam } = require("../controllers/report.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/last-week", authMiddleware, getLastWeekReport);
router.get("/pending", authMiddleware, getPendingWork);
router.get("/closed-tasks", authMiddleware, getClosedTasksByTeam);

module.exports = router;
