const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

class Attendee extends Model {}

Attendee.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checked_in: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Attendee",
  }
);

module.exports = Attendee;
