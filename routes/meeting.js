const express = require("express");
const router = express.Router();
const Meeting = require("../models/meeting");

// GET /meetings/id
router.get("/meetings/:id", (req, res) => {
  const id = req.params.id;
  const meeting = Meeting.findOne({ user: id });
});

// POST
router.post("/meetings/", (req, res) => {
  const data = req.body;
  const meeting = new Meeting(data);
  // meeting.save();
});

// Update
router.put("/meetings/:id", (req, res) => {
  const data = req.body;
});

// Delete
router.delete("/meetings/:id", (req, res) => {
  const id = req.body.id;
  const meeting = new Meeting({ _id: id });
  // meeting.delete()
});

module.exports = router;
