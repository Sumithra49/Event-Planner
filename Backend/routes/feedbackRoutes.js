const express = require("express");
const feedbackRoutes = express.Router();
const feedbackController = require("../controllers/feedbackController");

// Create feedback for an event and attendee
feedbackRoutes.post(
  "/events/:eventId/attendees/:attendeeId/feedback",
  feedbackController.createFeedback
);

// Get all feedback for a specific event
feedbackRoutes.get(
  "/events/:eventId/feedback",
  feedbackController.getAllFeedbackForEvent
);

// Get all feedback given by a specific attendee
feedbackRoutes.get(
  "/attendees/:attendeeId/feedback",
  feedbackController.getAllFeedbackByAttendee
);

module.exports = feedbackRoutes;
