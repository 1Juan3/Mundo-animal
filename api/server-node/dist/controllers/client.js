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
exports.newClient = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("../models/client");
const newClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, last_name, rol, address, phone, email, username, password } = req.body;
    const id = req.params.id;
    // Validamos si el usuario ya existe en la base de datos
    const client = yield client_1.Client.findOne({ where: { username: username } });
    if (client) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`,
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // Guardarmos usuario en la base de datos
        yield client_1.Client.create({
            name: name,
            last_name: last_name,
            rol: rol,
            address: address,
            phone: phone,
            email: email,
            username: username,
            password: password
        });
        res.json({
            msg: `¡Usuario ${username} creado exitosamente! `,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Upps ocurrio un error",
            error,
        });
    }
});
exports.newClient = newClient;
