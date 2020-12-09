const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pendingActionItemsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
});

const talkingPointsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
});

const notesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
});

const meetingSchema = new Schema({
  // manager: UserCollection, // link to User
  user: { type: Schema.Types.ObjectId, ref: "User" }, //  Ref | link to User
  pendingAcions: [pendingActionItemsSchema],
  talkingPoints: [talkingPointsSchema], // list of points
  notes: [notesSchema],
  status: Boolean,
  Date: Date,
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
