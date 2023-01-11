const { Sequelize } = require("sequelize");

const Db = require("../config/db");
const UserModel = require("./user");
const ActivityModel = require("./activity");
const FeedbackModel = require("./feedback");
const ReactionModel = require("./reaction");

const User = UserModel(Db, Sequelize);
const Activity = ActivityModel(Db, Sequelize);
const Feedback = FeedbackModel(Db, Sequelize);
const Reaction = ReactionModel(Db, Sequelize);

User.hasMany(Activity, {
    foreignKey: "userId",
    as: "Activities",
    onDelete: "CASCADE",
  });
  Activity.belongsTo(User);

  Reaction.hasMany(Feedback, {
    foreignKey: "reactionId",
    as: "Feedbacks",
    onDelete: "CASCADE",
  });
  Feedback.belongsTo(Reaction);

  Activity.hasMany(Feedback, {
    foreignKey: "activityId",
    as: "Feedbacks",
    onDelete: "CASCADE",
  });
  Feedback.belongsTo(Activity);

  User.hasMany(Feedback, {
    foreignKey: "userId",
    as: "Feedbacks",
    onDelete: "CASCADE",
  });
  Feedback.belongsTo(User);

  module.exports = {
    User,
    Activity,
    Feedback,
    Reaction,
    connection: Db,
  }
  


