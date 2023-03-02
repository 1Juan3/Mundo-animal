"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form_vetrinaria = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Form_vetrinaria extends sequelize_1.Model {
}
exports.Form_vetrinaria = Form_vetrinaria;
Form_vetrinaria.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    razon_social: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    representante_legal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "formveterinaria",
    sequelize: connection_1.default,
});
