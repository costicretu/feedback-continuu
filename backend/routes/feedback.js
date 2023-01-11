const express = require("express");
const router = express.Router();
const feedbackControllers = require("../controllers").feedback;

router.post("/", feedbackControllers.addFeedback);
router.get("/", feedbackControllers.getAllFeedbacks);
router.get("/:id", feedbackControllers.getFeedbackById);
router.delete("/:id", feedbackControllers.deleteOneFeedback);

module.exports = router;
