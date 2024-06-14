const Attendee = require("../models/Attendee");

// Create a new attendee
exports.createAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.create(req.body);
    res.status(201).json(attendee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all attendees
exports.getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.findAll();
    res.status(200).json(attendees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single attendee by ID
exports.getAttendeeById = async (req, res) => {
  try {
    const attendee = await Attendee.findByPk(req.params.id);
    if (!attendee) {
      return res.status(404).json({ error: "Attendee not found" });
    }
    res.status(200).json(attendee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an attendee
exports.updateAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.findByPk(req.params.id);
    if (!attendee) {
      return res.status(404).json({ error: "Attendee not found" });
    }
    await attendee.update(req.body);
    res.status(200).json(attendee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an attendee
exports.deleteAttendee = async (req, res) => {
  try {
    const attendee = await Attendee.findByPk(req.params.id);
    if (!attendee) {
      return res.status(404).json({ error: "Attendee not found" });
    }
    await attendee.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
