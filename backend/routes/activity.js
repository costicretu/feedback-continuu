const express = require("express");
const router = express.Router();
const activityController = require("../controllers").activity;

router.post("/", activityController.addActivity);
router.get("/", activityController.getAllActivities);
router.get("/:id", activityController.getActivityById);
router.delete("/:id", activityController.deleteOneActivity);

module.exports = router;
