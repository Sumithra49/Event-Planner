const express = require("express");
const eventRoutes = express.Router();
const eventController = require("../controllers/eventController");

// Create a new event
eventRoutes.post("/", eventController.createEvent);

// Get all events
eventRoutes.get("/", eventController.getAllEvents);

// Get a single event by ID
eventRoutes.get("/:id", eventController.getEventById);

// Update an event
eventRoutes.put("/:id", eventController.updateEvent);

// Delete an event
eventRoutes.delete("/:id", eventController.deleteEvent);

module.exports = eventRoutes;
