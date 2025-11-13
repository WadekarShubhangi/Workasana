const Team = require("../models/team.model");

// Create Team
const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
//     const { name, description, members = [] } = req.body;
// const team = await Team.create({ name, description, members });

    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: "Failed to create team", error: error.message });
  }
};

// Get Teams (populate members)
const getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("members", "name email");
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch teams", error: error.message });
  }
};

// Add member to team
const addMemberToTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const { userId } = req.body;
    const team = await Team.findByIdAndUpdate(
      teamId,
      { $push: { members: userId } },
      { new: true }
    ).populate("members", "name email");
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: "Failed to add member", error: error.message });
  }
};

module.exports = { createTeam, getTeams, addMemberToTeam };
