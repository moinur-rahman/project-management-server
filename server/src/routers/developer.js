const express = require("express");
const Developer = require("../models/developer");
const router = new express.Router();

router.post("/create-developer", async (req, res) => {
  const developer = new Developer(req.body);
  try {
    await developer.save();
    res.send(req.body);
  } catch (error) {
    console.log(error);
  }
});

router.get("/get-developer-list", async (req, res) => {
  try {
    const developer = await Developer.find({});
    res.send(developer);
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit-ratio", async (req, res) => {
  try {
    const developer = await Developer.findOne({
      developerName: req.body.developerName,
    });
    developer.ratio = req.body.ratio;
    await developer.save();
    res.send({
      developerName: req.body.developerName,
      ratio: req.body.ratio,
    });
  } catch (error) {}
});

module.exports = router;
