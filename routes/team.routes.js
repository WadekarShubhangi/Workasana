const express = require("express");
const router = express.Router();
const { createTeam, getTeams, addMemberToTeam } = require("../controllers/team.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createTeam);
router.get("/", authMiddleware, getTeams);
router.post("/:teamId/add-member", authMiddleware, addMemberToTeam);

module.exports = router;
