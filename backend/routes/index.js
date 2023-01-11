const express = require("express");
const router = express.Router();
const activityRouter = require("./activity");
const userRouter = require("./user")
const reactionRouter = require("./reaction")
const feedbackRouter = require("./feedback")

router.use("/activity", activityRouter);
router.use("/user", userRouter);
router.use("/reaction", reactionRouter)
router.use("/feedback", feedbackRouter)

module.exports = router;