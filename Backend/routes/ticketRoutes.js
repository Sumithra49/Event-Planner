const express = require("express");
const ticketRoutes = express.Router();
const ticketController = require("../controllers/ticketController");
const authenticateToken = require("../middleware/Authentication"); // Adjust the path as necessary

// Create a new ticket
ticketRoutes.post("/", authenticateToken, ticketController.createTicket);

// Get all tickets
ticketRoutes.get("/", authenticateToken, ticketController.getAllTickets);

// Get a single ticket by ID
ticketRoutes.get("/:id", authenticateToken, ticketController.getTicketById);

// Update a ticket
ticketRoutes.put("/:id", authenticateToken, ticketController.updateTicket);

// Delete a ticket
ticketRoutes.delete("/:id", authenticateToken, ticketController.deleteTicket);

module.exports = ticketRoutes;
