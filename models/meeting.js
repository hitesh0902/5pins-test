const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  // manager: UserCollection, // link to User
  // user: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  status: { type: String, default: "active" },
  createdAt: { type: Date, default: Date.now },
  actionItems: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      title: String,
      completed: { type: Boolean, default: false },
    },
  ],
  talkingPoints: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      title: String,
    },
  ],
  notes: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      title: String,
    },
  ],
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
