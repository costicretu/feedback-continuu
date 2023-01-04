const express = require("express");
const router = express.Router();
const activityController = require("../controllers").activity;

router.post("/", activityController.addActivity);

module.exports = router;
