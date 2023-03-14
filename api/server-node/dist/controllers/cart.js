"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.deleteProduct1 = exports.cartResQuantity = exports.cartAddQuantity = exports.getCart1 = exports.getCart = exports.addToCart = void 0;
const product_1 = require("../models/product");
const cart_1 = require("../models/cart");
const connection_1 = __importDefault(require("../bd/connection"));
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name_product, quantity, image, price, total, sub_total, product_id, client_id } = req.body;
        sub_total = quantity * price;
        const [product, created] = yield cart_1.Cart.findOrCreate({
            where: { product_id: product_id },
            defaults: {
                name_product,
                quantity,
                image,
                price,
                total,
                sub_total,
                product_id,
                client_id,
            }
        });
        if (!created) {
            product.quantity += quantity;
            product.sub_total = product.quantity * product.price;
            yield product.save();
        }
        res.json(product);
    }
    catch (err) {
        res.status(500).json({ message: "err.message", err });
    }
});
exports.addToCart = addToCart;
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cart = yield cart_1.Cart.findAll();
        res.json(cart);
    }
    catch (err) {
        res.status(500).json({ msg: "err.message", err });
    }
});
exports.getCart = getCart;
const getCart1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cart = yield product_1.Product.findByPk(id);
    if (cart) {
        res.json(cart);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`,
        });
    }
});
exports.getCart1 = getCart1;
const cartAddQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("llego peticion");
        const { quantityValue } = req.body;
        const { id } = req.params;
        const cart = yield cart_1.Cart.findByPk(id);
        if (cart) {
            const updatedCart = yield cart.update({
                quantity: cart.quantity + quantityValue,
            });
            res.json(updatedCart);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "err.message", err });
    }
});
exports.cartAddQuantity = cartAddQuantity;
const cartResQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("llego peticion");
        const { quantityValue } = req.body;
        const { id } = req.params;
        const cart = yield cart_1.Cart.findByPk(id);
        if (cart) {
            const updatedCart = yield cart.update({
                quantity: cart.quantity - quantityValue
            });
            res.json(updatedCart);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "err.message", err });
    }
});
exports.cartResQuantity = cartResQuantity;
const deleteProduct1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_1.Product.findByPk(id);
        if (product) {
            yield product.destroy();
            res.json({ msg: "Product deleted" });
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "err.message", err });
    }
});
exports.deleteProduct1 = deleteProduct1;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const image = req.file ? req.file.filename : undefined;
    try {
        // Iniciamos una transacción
        yield connection_1.default.transaction((t) => __awaiter(void 0, void 0, void 0, function* () {
            // Buscamos el producto
            const product = yield product_1.Product.findByPk(id, { transaction: t });
            // Si no existe el producto, devolvemos un error 404
            if (!product) {
                return res.status(404).json({ message: "Producto no encontrado" });
            }
            // Borramos las imágenes asociadas al producto
            // Borramos el producto
            yield product_1.Product.destroy({ where: { id: id }, transaction: t });
            // Devolvemos una respuesta de éxito
            return res.status(204).json();
        }));
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al eliminar el producto" });
    }
});
exports.deleteProduct = deleteProduct;
