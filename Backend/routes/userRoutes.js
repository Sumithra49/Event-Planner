const express = require("express");
const authRoutes = express.Router();
const userController = require("../controllers/userController");

// Login route
authRoutes.post("/login", userController.login);

// Logout route
authRoutes.post("/logout", userController.logout);

// Register route
authRoutes.post("/register", userController.register);

module.exports = authRoutes;
