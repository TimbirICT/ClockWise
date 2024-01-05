const User = require("./User");
const TimeCard = require("./TimeCard");
const TimeEvent = require("./TimeEvent");

User.hasOne(TimeCard, {
  foreignKey: "user_id",
});

TimeCard.belongsTo(User, {
  foreignKey: "user_id"
})

TimeCard.hasMany(TimeEvent, {
  foreignKey: "timeEvent_id",
});

// TimeCard.hasMany(TimeEvent, {
//   foreignKey: "user_id"
// })

module.exports = {
  User,
  TimeCard,
  TimeEvent,
};
