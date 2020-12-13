const express = require("express");
const router = express.Router();
const Meeting = require("../models/meeting");

// GET api/meetings/
router.get("/", (req, res) => {
  const meeting = Meeting.find();
  console.log(meeting);
});

// GET api/meeting/id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const meeting = Meeting.findOne({ _id: id });
});

// POST
router.post("/", (req, res) => {
  const data = req.body;
  const meeting = new Meeting(data);
  // meeting.save();
  console.log(data);
});

// Update
router.put("/:id", (req, res) => {
  const data = req.body;
});

// Delete
router.delete("/:id", (req, res) => {
  const id = req.body.id;
  const meeting = new Meeting({ _id: id });
  // meeting.delete()
});

module.exports = router;
