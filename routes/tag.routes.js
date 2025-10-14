const express = require("express");
const router = express.Router();
const { createTag, getTags } = require("../controllers/tag.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/", authMiddleware, createTag);
router.get("/", authMiddleware, getTags);

module.exports = router;
