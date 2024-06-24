const express = require("express");
const authRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const ticketRouter = require("./routes/ticketRoutes");
const attendeeRoutes = require("./routes/attendeeRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const cors = require("cors");

const { connectionToDb } = require("./config/db");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/users", authRoutes);
app.use("/events", eventRoutes);
app.use("/tickets", ticketRouter);
app.use("/attendees", attendeeRoutes);
app.use("/feedbacks", feedbackRoutes);

app.listen(8080, async () => {
  await connectionToDb();
  console.log(`Server is running on port ${port}  `);
});
