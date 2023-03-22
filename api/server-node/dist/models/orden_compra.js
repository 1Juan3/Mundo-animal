"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../bd/connection"));
class Cart extends sequelize_1.Model {
}
exports.Cart = Cart;
Cart.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    adress_vet: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    name_veterinaria: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    number_phone_vet: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    name_client: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    adress_client: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    email_client: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    number_phone_client: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    name_product: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    quantity_product: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: false,
        allowNull: true,
    },
    price_product: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: false,
        allowNull: true,
    },
    sub_total_product: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: false,
        allowNull: true,
    },
    total: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: false,
        allowNull: true,
    }
}, {
    tableName: "orden_pedido",
    sequelize: connection_1.default,
});
