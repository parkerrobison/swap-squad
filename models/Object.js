const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Object extends Model {}

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
      type: DataTypes.STRING,
      references: { model: "user", key: "id" },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    tableName: "object",
  }
);
