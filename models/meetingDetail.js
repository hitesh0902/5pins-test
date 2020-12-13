const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const actionItemsSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  completed: Boolean,
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
  actionItems: [actionItemsSchema],
  talkingPoints: [talkingPointsSchema],
  notes: [notesSchema],
});

const MeetingDetail = mongoose.model("MeetingDetail", meetingDetailSchema);

module.exports = MeetingDetail;
