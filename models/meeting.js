const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  // manager: UserCollection, // link to User
  user: { type: Schema.Types.ObjectId, ref: "User" }, //  Ref | link to User
  status: Boolean,
  details: { type: Schema.Types.ObjectId, ref: "MeetingDetail" },
  Date: Date,
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
