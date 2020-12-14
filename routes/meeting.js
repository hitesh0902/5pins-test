const express = require("express");
const router = express.Router();
const mongoose = express("mongoose");
const Meeting = require("../models/meeting");

// GET api/meetings/
router.get("/", (req, res) => {
  Meeting.find()
    .populate()
    .exec((err, data) => {
      res.send(data);
      console.log(data);
    });
  // res.json({ meeting });
  // console.log(meeting);
});

// GET api/meeting/id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const meeting = Meeting.findOne({ _id: id });
});

// POST
router.post("/", (req, res) => {
  console.log(req.body);
  const data = req.body;
  const meeting = new Meeting({
    ...data,
  });
  meeting
    .save()
    .then(() => console.log("saved meeting to db"))
    .then(() => res.send(200).json({ message: "saved  to db" }))
    .catch((err) => console.log(err));
  // console.log(meeting);
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
