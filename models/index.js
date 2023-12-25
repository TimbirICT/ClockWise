const User = require("./User");
const TimeCard = require("./TimeCard");

TimeCard.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasOne(TimeCard, {
  foreignKey: "user_id",
});

module.exports = {
User,
TimeCard
};