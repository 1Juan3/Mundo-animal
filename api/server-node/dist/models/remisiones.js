"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Remision = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Remision extends sequelize_1.Model {
}
exports.Remision = Remision;
Remision.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_product: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    name_product: {
        type: sequelize_1.DataTypes.STRING,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    sub_total: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    total: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    id_remision: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    id_client: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    tableName: "remisiones",
    sequelize: connection_1.default,
});
