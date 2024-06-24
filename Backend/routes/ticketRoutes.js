const express = require("express");
const ticketRouter = express.Router();
const ticketController = require("../controllers/ticketController");

// Create a new ticket
ticketRouter.post("/", ticketController.createTicket);

// Get all tickets
ticketRouter.get("/", ticketController.getAllTickets);

// Get a single ticket by ID
ticketRouter.get("/:id", ticketController.getTicketById);

// Update a ticket
ticketRouter.put("/:id", ticketController.updateTicket);

// Delete a ticket
ticketRouter.delete("/:id", ticketController.deleteTicket);

module.exports = ticketRouter;
