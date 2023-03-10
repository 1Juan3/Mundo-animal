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
exports.updateProfile = exports.newVet = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const vets_1 = require("../models/vets");
const newVet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { razon_social, representante_legal, rol, username, email, phone, address, password } = req.body;
    const paht = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const photo = "http://localhost:3000/uploads/" + paht;
    // Validamos si el usuario ya existe en la base de datos
    const vet = yield vets_1.Vets.findOne({ where: { username: username } });
    if (vet) {
        return res.status(400).json({
            msg: `Ya existe una veterinaria con la razon social de ${razon_social} con el rol de `,
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // Guardarmos usuario en la base de datos
        yield vets_1.Vets.create({
            razon_social: razon_social,
            representante_legal: representante_legal,
            rol: rol,
            username: username,
            email: email,
            phone: phone,
            adrress: address,
            photo: photo,
            password: hashedPassword,
        });
        res.json({
            msg: `veterinaria ${razon_social} creado exitosamente! `,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Upps ocurrio un error",
            error,
        });
    }
});
exports.newVet = newVet;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("llego peticion");
        const { razon_social, representante_legal, rol, username, email, phone, address, password } = req.body;
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const { id } = req.params;
        let photo;
        if (req.file) {
            const path = req.file.filename;
            console.log(path);
            photo = "http://localhost:3000/uploads/" + path;
        }
        const vet = yield vets_1.Vets.findByPk(id);
        if (vet) {
            vet.razon_social = razon_social;
            vet.representante_legal = representante_legal;
            vet.rol = rol;
            vet.username = username;
            vet.email = email;
            vet.phone = phone;
            vet.address = address;
            vet.password = password;
            if (photo) {
                vet.photo = photo;
            }
            if (password) {
                vet.password = hashedPassword;
            }
            yield vet.save();
            res.json(vet);
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
