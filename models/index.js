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
  foreignKey: "time_event_id",
});

// TimeEvent.belongsTo(TimeCard, {
//   foreignKey: "time_card_id"
// })

module.exports = {
  User,
  TimeCard,
  TimeEvent,
};
