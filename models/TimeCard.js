const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class TimeCard extends Model {}

TimeCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "timecard",
  }
);

module.exports = TimeCard;
