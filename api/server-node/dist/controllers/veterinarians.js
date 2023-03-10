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
exports.updateProfile = exports.newVeteterinarian = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const veterinarians_1 = require("../models/veterinarians");
const newVeteterinarian = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { name, last_name, username, rol, email, phone, password } = req.body;
    const paht = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const photo = "http://localhost:3000/uploads/" + paht;
    // Validamos si el usuario ya existe en la base de datos
    const veterinarians = yield veterinarians_1.Veterinarians.findOne({ where: { username: username } });
    if (veterinarians) {
        return res.status(400).json({
            msg: `Ya existe un usuario veterinario con el email ${email} con el rol de `,
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // Guardarmos usuario en la base de datos
        yield veterinarians_1.Veterinarians.create({
            name: name,
            last_name: last_name,
            username: username,
            rol: rol,
            email: email,
            phone: phone,
            photo: photo,
            password: hashedPassword,
        });
        res.json({
            msg: `veterinario ${name} creado exitosamente! `,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Upps ocurrio un error",
            error,
        });
    }
});
exports.newVeteterinarian = newVeteterinarian;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("llego peticion");
        const { name, last_name, username, rol, email, phone, password } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const { id } = req.params;
        let photo;
        if (req.file) {
            const path = req.file.filename;
            console.log(path);
            photo = "http://localhost:3000/uploads/" + path;
        }
        const veterinarians = yield veterinarians_1.Veterinarians.findByPk(id);
        if (veterinarians) {
            veterinarians.name = name;
            veterinarians.last_name = last_name;
            veterinarians.username = username;
            veterinarians.rol = rol;
            veterinarians.email = email;
            veterinarians.phone = phone;
            veterinarians.password = password;
            if (photo) {
                veterinarians.photo = photo;
            }
            if (password) {
                veterinarians.password = hashedPassword;
            }
            yield veterinarians.save();
            res.json(veterinarians);
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
