const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class TimeEvent extends Model {}

TimeEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    clock_in: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    clock_out: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: new Date(),
    },
    time_card_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "timecard",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "timeevent",
  }
);

module.exports = TimeEvent;
