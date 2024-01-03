const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class TimeEvent extends Model {}

TimeEvent.init({
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
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "timeevent",
  });
