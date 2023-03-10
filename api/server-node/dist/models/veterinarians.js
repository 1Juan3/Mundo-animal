"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinarians = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Veterinarians extends sequelize_1.Model {
}
exports.Veterinarians = Veterinarians;
Veterinarians.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    rol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    photo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "veterinarians",
    sequelize: connection_1.default,
});
