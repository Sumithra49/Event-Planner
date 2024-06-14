const express = require("express");
const attendeeRoutes = express.Router();
const attendeeController = require("../controllers/attendeeController");

// Create a new attendee
attendeeRoutes.post("/", attendeeController.createAttendee);

// Get all attendees
attendeeRoutes.get("/", attendeeController.getAllAttendees);

// Get a single attendee by ID
attendeeRoutes.get("/:id", attendeeController.getAttendeeById);

// Update an attendee
attendeeRoutes.put("/:id", attendeeController.updateAttendee);

// Delete an attendee
attendeeRoutes.delete("/:id", attendeeController.deleteAttendee);

module.exports = attendeeRoutes;
