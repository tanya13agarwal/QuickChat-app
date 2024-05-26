const mongoose = require("mongoose");

const chatSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    groupChat: {
      type: Boolean,
      default: false,
    },

    creator: {
      type: Types.ObjectId,
      ref: "User",
    },

    members: [
      {
        type: Types.ObjectId,
        ref: "User",
      }
    ],

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);