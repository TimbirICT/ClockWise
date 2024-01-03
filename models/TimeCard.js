const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TimeCard extends Model {}

TimeCard.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    reference: {
      model: "user",
      key: "id",
    },
  },
  clock_in: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  clock_out: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
});

module.exports = TimeCard;
