"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deliverers = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Deliverers extends sequelize_1.Model {
}
exports.Deliverers = Deliverers;
Deliverers.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    rol: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "deliverers",
    sequelize: connection_1.default,
});
