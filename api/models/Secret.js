const mongoose = require("mongoose");

const secretSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title for secret"],
  },
  body: {
    type: String,
    required: [true, "Please tell us a secret"],
  },
  authorId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

module.exports = new mongoose.model("secret", secretSchema);
