"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vets = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Vets extends sequelize_1.Model {
}
exports.Vets = Vets;
Vets.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    razon_social: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    representante_legal: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    rol: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    username: {
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
    address: {
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
    tableName: "vets",
    sequelize: connection_1.default,
});
