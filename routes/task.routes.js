const express = require("express");
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/task.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.post("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
