const mongoose = require("mongoose");

const estimationSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      trim: true,
    },
    developerName: {
      type: String,
      trim: true,
    },
    taskName: {
      type: String,
      trim: true,
    },
    startingDate: {
      type: String,
      trim: true,
    },
    estimation: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const estimation = mongoose.model("Estimation", estimationSchema);

module.exports = estimation;
