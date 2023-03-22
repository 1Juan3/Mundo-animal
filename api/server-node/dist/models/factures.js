"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factures = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Factures extends sequelize_1.Model {
}
exports.Factures = Factures;
Factures.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    client_id: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: false,
        allowNull: true,
    },
    veterinarian_id: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: false,
        allowNull: true,
    },
    cart_id: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: false,
        allowNull: true,
    },
}, {
    tableName: "factures",
    sequelize: connection_1.default,
});
