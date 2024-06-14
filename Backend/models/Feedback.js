const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

class Feedback extends Model {}

Feedback.init(
  {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Feedback",
  }
);

module.exports = Feedback;
