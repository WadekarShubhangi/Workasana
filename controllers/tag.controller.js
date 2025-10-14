const Tag = require("../models/tag.model");

const createTag = async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (error) {
    res.status(500).json({ message: "Failed to create tag", error: error.message });
  }
};

const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tags", error: error.message });
  }
};

module.exports = { createTag, getTags };
