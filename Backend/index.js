const express = require("express");
const authRoutes = require("./routes/userRoutes");
const { connectionToDb } = require("./config/db");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/users", authRoutes);

app.listen(8080, async () => {
  await connectionToDb();
  console.log(`Server is running on port ${port}  `);
});
