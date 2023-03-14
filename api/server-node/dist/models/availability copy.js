"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Availability = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Availability extends sequelize_1.Model {
}
exports.Availability = Availability;
Availability.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    dayOfWeek: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    startTime: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    endTime: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    veterinarianId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: "availabilities",
    sequelize: connection_1.default,
});
// Relación con el modelo Veterinarian
