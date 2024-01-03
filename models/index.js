const User = require("./User");
const TimeCard = require("./TimeCard");
const TimeEvent = require("./TimeEvent");

TimeCard.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasOne(TimeCard, {
  foreignKey: "user_id",
});

TimeEvent.belongsTo(TimeCard, {
  foreignKey: "user_id",
});

TimeCard.hasMany(TimeEvent, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  TimeCard,
  TimeEvent,
};
