const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingSchema = new Schema({
  // manager: UserCollection, // link to User
  // user: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  status: String,
  createdAt: { type: Date, default: Date.now },
  details: {
    actionItems: [
      {
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        title: String,
        completed: Boolean,
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
  },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

module.exports = Meeting;
