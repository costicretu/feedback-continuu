const express = require("express");
const router = express.Router();
const reactionController = require("../controllers").reaction;

router.post("/", reactionController.addReaction);
router.get("/", reactionController.getAllReactions);
router.get("/:id", reactionController.getReactionById);
router.delete("/:id", reactionController.deleteOneReaction);

module.exports = router;
