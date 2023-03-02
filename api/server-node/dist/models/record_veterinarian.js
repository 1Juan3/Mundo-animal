"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record_veterinarian = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Record_veterinarian extends sequelize_1.Model {
}
exports.Record_veterinarian = Record_veterinarian;
Record_veterinarian.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    hoja_vida: {
        type: new sequelize_1.DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    tableName: "registros_veterinario",
    sequelize: connection_1.default,
});
