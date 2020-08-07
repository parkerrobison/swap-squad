const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Object extends Model {}

const conditions = [
  "Near Mint",
  "Lightly Used",
  "Moderately Used",
  "Heavily Used",
  "Damaged",
];

Object.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [1] },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [50] },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "user", key: "id" },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.INTEGER,
      validate: { isIn: conditions },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: { model: "comment", key: "id" },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    tableName: "object",
  }
);

module.exports = Object;