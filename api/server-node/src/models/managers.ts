import { DataTypes } from "sequelize";
import sequelize from "../bd/connection";

export const User = sequelize.define("manager", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
