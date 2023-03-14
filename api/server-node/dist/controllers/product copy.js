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
exports.deleteProduct = exports.deleteProduct1 = exports.updateProduct = exports.getProduct = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
const connection_1 = __importDefault(require("../bd/connection"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, description, price, stock, veterinaria_id } = req.body;
        const paht = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        const image = "http://localhost:3000/uploads/" + paht;
        const product = yield product_1.Product.create({
            name,
            description,
            price,
            stock,
            image,
            veterinaria_id,
        });
        res.json(product);
    }
    catch (err) {
        res.status(500).json({ message: "err.message", err });
    }
});
exports.createProduct = createProduct;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.Product.findAll();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ msg: "err.message", err });
    }
});
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.Product.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`,
        });
    }
});
exports.getProduct = getProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("llego peticion");
        const { name, description, price, stock } = req.body;
        const { id } = req.params;
        let image;
        if (req.file) {
            const path = req.file.filename;
            console.log(path);
            image = "http://localhost:3000/uploads/" + path;
        }
        const product = yield product_1.Product.findByPk(id);
        if (product) {
            product.name = name;
            product.description = description;
            product.price = price;
            product.stock = stock;
            if (image) {
                product.image = image;
            }
            yield product.save();
            res.json(product);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "err.message", err });
    }
});
exports.updateProduct = updateProduct;
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
