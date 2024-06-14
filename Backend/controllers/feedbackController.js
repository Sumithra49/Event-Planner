const Feedback = require("../models/Feedback");

// Controller for creating feedback for an event and attendee
exports.createFeedback = async (req, res) => {
  try {
    const { eventId, attendeeId } = req.params;
    const { rating, comments } = req.body;

    // Create feedback entry in the database
    const feedback = await Feedback.create({
      event_id: eventId,
      attendee_id: attendeeId,
      rating,
      comments,
    });

    res.status(201).json({ success: true, feedback });
  } catch (error) {
    console.error("Error creating feedback:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Controller for getting all feedback for a specific event
exports.getAllFeedbackForEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Fetch all feedback for the specified event from the database
    const feedback = await Feedback.findAll({
      where: { event_id: eventId },
    });

    res.status(200).json({ success: true, feedback });
  } catch (error) {
    console.error("Error fetching feedback for event:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

// Controller for getting all feedback given by a specific attendee
exports.getAllFeedbackByAttendee = async (req, res) => {
  try {
    const { attendeeId } = req.params;

    // Fetch all feedback given by the specified attendee from the database
    const feedback = await Feedback.findAll({
      where: { attendee_id: attendeeId },
    });

    res.status(200).json({ success: true, feedback });
  } catch (error) {
    console.error("Error fetching feedback by attendee:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
