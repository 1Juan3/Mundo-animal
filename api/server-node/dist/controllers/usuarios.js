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
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuarios_1 = require("../models/usuarios");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, rol, password } = req.body;
    const id = req.params.id;
    // Validamos si el usuario ya existe en la base de datos
    const user = yield usuarios_1.User.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username} con el rol de `,
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // Guardarmos usuario en la base de datos
        yield usuarios_1.User.create({
            id: id,
            username: username,
            rol: rol,
            password: hashedPassword,
        });
        res.json({
            msg: `Usuario ${username} creado exitosamente! con el rol de ${rol}`,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Upps ocurrio un error",
            error,
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, rol, password } = req.body;
    // Validamos si el usuario existe en la base de datos
    const user = yield usuarios_1.User.findOne({ where: { username: username } });
    const roles = yield usuarios_1.User.findOne({ where: { rol: rol } });
    if (!roles) {
        return res.status(400).json({
            msg: "el rol no correspnde al usuario ingresado ",
        });
    }
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base datos`,
        });
    }
    // Validamos password
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecta`,
        });
    }
    // Generamos token
    const token = jsonwebtoken_1.default.sign({
        username: username,
        rol: rol,
    }, process.env.SECRET_KEY || "pepito123");
    res.json(token);
});
exports.loginUser = loginUser;
