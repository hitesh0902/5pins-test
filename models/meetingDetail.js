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

const meetingDetailSchema = new Schema({
  pendingAction: [pendingActionItemsSchema],
  talkingPoints: [talkingPointsSchema],
  notes: [notesSchema],
});

const MeetingDetail = mongoose.model("MeetingDetail", meetingDetailSchema);

module.exports = MeetingDetail;
