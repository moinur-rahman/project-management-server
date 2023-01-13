const mongoose = require("mongoose");

const developerSchema = new mongoose.Schema(
  {
    developerName: {
      type: String,
      trim: true,
      required: true,
    },
    ratio: {
      type: String,
      trim: true,
      default: 1,
    },
  },
  { timestamps: true }
);

const developer = mongoose.model("Developer", developerSchema);

module.exports = developer;
