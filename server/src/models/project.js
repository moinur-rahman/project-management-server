const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      trim: true,
      required: true,
      
    },
    projectPriority: {
      type: Number,
      trim: true,
      required: true,
    },
    projectDescription: {
      type: String,
      trim: true,
      required: true,
    },
    startingDate: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const project = mongoose.model("Project", projectSchema);

module.exports = project;
