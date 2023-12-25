const User = require("./User");
const TimeCard = require("./Blog");

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