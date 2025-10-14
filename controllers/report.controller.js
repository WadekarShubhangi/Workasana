const Task = require("../models/task.model");

const getLastWeekReport = async (req, res) => {
  try {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);

    const tasks = await Task.find({
      status: "Completed",
      updatedAt: { $gte: lastWeek },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to get last week report", error: error.message });
  }
};


const getPendingWork = async (req, res) => {
  try {
    const pending = await Task.find({ status: { $ne: "Completed" } });
    const totalDays = pending.reduce((sum, task) => sum + task.timeToComplete, 0);
    res.json({ totalDays });
  } catch (error) {
    res.status(500).json({ message: "Failed to get pending report", error: error.message });
  }
};


const getClosedTasksByTeam = async (req, res) => {
  try {
    const result = await Task.aggregate([
      { $match: { status: "Completed" } },
      { $group: { _id: "$team", totalClosed: { $sum: 1 } } },
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to get closed tasks report", error: error.message });
  }
};

module.exports = { getLastWeekReport, getPendingWork, getClosedTasksByTeam };
