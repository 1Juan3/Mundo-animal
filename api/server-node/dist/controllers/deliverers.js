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
exports.updateProfile = exports.newDeliverers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const deliverers_1 = require("../models/deliverers");
const newDeliverers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, rol, password } = req.body;
    // Validamos si el usuario ya existe en la base de datos
    const user = yield deliverers_1.Deliverers.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario domiciliario con el usuario ${username} con el rol de `,
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // Guardarmos usuario en la base de datos
        yield deliverers_1.Deliverers.create({
            email: email,
            username: username,
            rol: rol,
            password: hashedPassword,
        });
        res.json({
            msg: `domiciliario creado exitosamente! `,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Upps ocurrio un error",
            error,
        });
    }
});
exports.newDeliverers = newDeliverers;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("llego peticion");
        const { email, username, rol, password } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const { id } = req.params;
        const deliverers = yield deliverers_1.Deliverers.findByPk(id);
        if (deliverers) {
            deliverers.email = email;
            deliverers.username = username;
            deliverers.rol = rol;
            deliverers.password = password;
            if (password) {
                deliverers.password = hashedPassword;
            }
            yield deliverers.save();
            res.json(deliverers);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "err.message", err });
    }
});
exports.updateProfile = updateProfile;
