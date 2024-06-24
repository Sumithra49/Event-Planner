const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Ticket = sequelize.define(
  "Ticket",
  {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sold: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    // Other options (if needed)
    timestamps: false, // Disable timestamps (createdAt, updatedAt)
  }
);

module.exports = Ticket;
