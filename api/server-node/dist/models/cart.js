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
    name_product: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: true,
        allowNull: true,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        unique: false,
        allowNull: true,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: true,
        allowNull: true,
    },
    total: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: true,
        allowNull: true,
    },
    sub_total: {
        type: sequelize_1.DataTypes.DOUBLE,
        unique: true,
        allowNull: true,
    },
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: false,
        allowNull: true,
    },
    client_id: {
        type: sequelize_1.DataTypes.INTEGER,
        unique: false,
        allowNull: true,
    }
}, {
    tableName: "cart",
    sequelize: connection_1.default,
});
