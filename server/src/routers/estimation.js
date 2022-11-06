const express = require("express");
const Estimation = require("../models/estimation");
const Project = require("../models/project");
const Developer = require("../models/developer");
const router = new express.Router();

router.post("/add-estimation", async (req, res) => {
  try {
    const estimate = await Estimation.findOne({
      projectName: req.body.projectName,
      developerName: req.body.developerName,
    });
    estimate.startingDate = req.body.startingDate;
    estimate.estimation = req.body.estimation;
    await estimate.save();

    res.send(estimate);
  } catch (error) {}
});

router.post("/assign-project", async (req, res) => {
  try {
    const estimate = await Estimation(req.body);
    await estimate.save();
    res.send(estimate);
  } catch (error) {
    console.log(error);
  }
});

router.get("/get-task-list", async (req, res) => {
  try {
    const list = await Estimation.find({});
    res.send(list);
  } catch (error) {}
});

router.get("/get-sorted-list", async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ projectPriority: 1 });
    const ans = [];
    for (let i = 0; i < projects.length; i++) {
      const estimate = await Estimation.find({
        projectName: projects[i].projectName,
      });
      const project = {
        TaskID: i + 1,
        TaskName: projects[i].projectName,
        StartDate: projects[i].startingDate,
        subtasks: [],
      };

      for (let j = 0; j < estimate.length; j++) {
        const developer = await Developer.findOne({
          developerName: estimate[j].developerName,
        });

        project.subtasks.push({
          TaskID: i + 1 + "." + (j + 1),
          TaskName: estimate[j].taskName,
          StartDate: estimate[j].startingDate,
          Duration: estimate[j].estimation * developer.ratio,
          Progress: Math.ceil((1 / developer.ratio) * 100),
          developerName: developer.developerName
        });
      }
      ans.push(project);
    }
    res.send(ans);
  } catch (error) {}
});

module.exports = router;
