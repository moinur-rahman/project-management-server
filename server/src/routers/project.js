const express = require("express");
const Estimation = require("../models/estimation");
const Project = require("../models/project");
const router = new express.Router();

router.post("/create-project", async (req, res) => {
  try {
    var project = new Project(req.body);
    await project.save();
    await res.send(project);
  } catch (error) {
    console.log(error);
  }
});

router.get("/get-project-list", async (req, res) => {
  try {
    const project = await Project.find({}).sort({ projectPriority: 1 });
    res.send(project);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
