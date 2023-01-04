const express = require("express");
const router = express.Router();
const activityRouter = require("./activity");
const userRouter = require("./user")
router.use("/activity", activityRouter);
router.use("/user", userRouter);

module.exports = router;