const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Meeting = require("../models/meeting");

// GET api/meetings/
router.get("/", async (req, res) => {
  try {
    const data = await Meeting.find();
    res.send(data);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// GET api/meeting/id
router.get("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const meeting = await Meeting.findById(_id);
    console.log(meeting);
    res.json(meeting);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const meeting = new Meeting(data);
    await meeting.save();
    console.log("saved meeting to db");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

// UPDATE api/meetings/id
router.patch("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const data = req.body;
    await Meeting.findByIdAndUpdate(_id, req.body);
    res.sendStatus(200);
    // console.log()
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// DELETE api/meetings/id
router.delete("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    await Meeting.findByIdAndRemove(_id);
    res.sendStatus(200);
    console.log("Doc delete Success");
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// POST api/meetings/id/data where data = action_item | talking_point | note
router.post("/:_id/:data", async (req, res) => {
  try {
    const _id = req.params._id;
    const data = req.params.data;
    const user = mongoose.Types.ObjectId(req.body.user);

    if (data === "action_item") {
      await Meeting.findByIdAndUpdate(
        { _id },
        {
          $push: {
            actionItems: {
              user,
              title: req.body.title,
              completed: req.body.completed,
            },
          },
        }
      );
    } else if (data === "talking_point") {
      await Meeting.findByIdAndUpdate(
        { _id },
        {
          $push: {
            talkingPoints: {
              user,
              title: req.body.title,
            },
          },
        }
      );
    } else if (data === "note") {
      await Meeting.findByIdAndUpdate(
        { _id },
        {
          $push: {
            notes: {
              user,
              title: req.body.title,
            },
          },
        }
      );
    }
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

// DELETE api/meetings/id/data where data = action_item | talking_point | note
router.delete("/:_id/:data/:dataId", async (req, res) => {
  try {
    const _id = req.params._id;
    const data = req.params.data;
    const dataId = req.params.dataId;
    // const user = mongoose.Types.ObjectId(req.body.user);

    if (data === "action_item") {
      await Meeting.findByIdAndUpdate(
        { _id },
        {
          $pull: {
            actionItems: {
              _id: dataId,
            },
          },
        }
      );
    } else if (data === "talking_point") {
      await Meeting.findByIdAndUpdate(
        { _id },
        {
          $pull: {
            talkingPoints: {
              _id: dataId,
            },
          },
        }
      );
    } else if (data === "note") {
      await Meeting.findByIdAndUpdate(
        { _id },
        {
          $pull: {
            notes: {
              _id: dataId,
            },
          },
        }
      );
    }
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

module.exports = router;
