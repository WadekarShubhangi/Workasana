require("dotenv").config();
const express = require("express");
const {initializeDatabase} = require("./db/db.connect");
initializeDatabase();
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());


const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const teamRoutes = require("./routes/team.routes");
const projectRoutes = require("./routes/project.routes");
const tagRoutes = require("./routes/tag.routes");
const reportRoutes = require("./routes/report.routes");

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
app.use("/teams", teamRoutes);
app.use("/projects", projectRoutes);
app.use("/tags", tagRoutes);
app.use("/report", reportRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/favicon.ico", (req, res) => res.status(204).end());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});