"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicio_veterinario = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class servicio_veterinario extends sequelize_1.Model {
}
exports.servicio_veterinario = servicio_veterinario;
servicio_veterinario.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
    descripcion: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT.UNSIGNED,
        allowNull: false,
    },
    imagen: {
        type: new sequelize_1.DataTypes.STRING(),
        allowNull: false,
    },
}, {
    tableName: "servicio_veterinario ",
    sequelize: connection_1.default,
});
