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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getService = exports.getServices = exports.createService = void 0;
const servicio_veterinario_1 = require("../models/servicio_veterinario");
const createService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { nombre, descripcion, precio } = req.body;
        const paht = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        const imagen = "http://localhost:3000/uploads/" + paht;
        const servicio = servicio_veterinario_1.servicio_veterinario.create({
            nombre, descripcion, precio, imagen
        });
        res.json(servicio);
    }
    catch (err) {
        res.status(400).json({ message: "El producto no pudo ser agregado ", err });
    }
});
exports.createService = createService;
const getServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield servicio_veterinario_1.servicio_veterinario.findAll();
        res.json(services);
    }
    catch (err) {
        res.status(500).json({ msg: "err.message", err });
    }
});
exports.getServices = getServices;
const getService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nombre } = req.params;
    const service = yield servicio_veterinario_1.servicio_veterinario.findByPk(id);
    if (service) {
        res.json(service);
    }
    else {
        res.status(404).json({
            msg: `no se puede listar el servicio ${nombre}`,
        });
    }
});
exports.getService = getService;
