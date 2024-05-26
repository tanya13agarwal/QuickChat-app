const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    ],

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);