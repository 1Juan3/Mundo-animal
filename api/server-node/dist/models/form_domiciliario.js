"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form_domiciliario = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Form_domiciliario extends sequelize_1.Model {
}
exports.Form_domiciliario = Form_domiciliario;
Form_domiciliario.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    hoja_vida: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "formdomiciliario",
    sequelize: connection_1.default,
});
