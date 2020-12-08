const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  manager: UserCollection, // link to User
  user: UserCollection, // link to User
  talkingpoints: Array, // list of points
  date: Date,
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
