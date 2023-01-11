const activity = require('./activity');
const user = require("./user")
const reaction = require("./reaction")
const feedback = require("./feedback")
const controllers = {
    activity,
    user,
    reaction,
    feedback
}

module.exports = controllers;