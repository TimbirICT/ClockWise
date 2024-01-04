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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
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
    timeCard_id: {
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
