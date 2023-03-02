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
exports.deletedFormDomiciliario = exports.getFormDomiciliario = exports.getAllFormsDomiciliario = exports.createdFormDomiciliario = void 0;
const form_domiciliario_1 = require("../models/form_domiciliario");
const createdFormDomiciliario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { email, name, last_name } = req.body;
        const path = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        const hoja_vida = "http://localhost:3000/uploads/" + path;
        const Form = yield form_domiciliario_1.Form_domiciliario.create({
            email, name, last_name, hoja_vida,
        });
        res.json(Form);
    }
    catch (err) {
        res.status(500).json({ message: "El registro no fue exitoso", err });
    }
});
exports.createdFormDomiciliario = createdFormDomiciliario;
const getAllFormsDomiciliario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Forms = yield form_domiciliario_1.Form_domiciliario.findAll();
        res.json(Forms);
    }
    catch (error) {
        res.status(500).json({ message: "no pudo hacer la solicitud", error });
    }
});
exports.getAllFormsDomiciliario = getAllFormsDomiciliario;
const getFormDomiciliario = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const Form = yield form_domiciliario_1.Form_domiciliario.findByPk(id);
    if (Form) {
        res.json(Form);
    }
    else {
        res.status(400).json({ message: "no se encuentra el Form con el id" + id });
    }
});
exports.getFormDomiciliario = getFormDomiciliario;
const deletedFormDomiciliario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const Form = yield form_domiciliario_1.Form_domiciliario.findByPk(id);
        if (Form) {
            yield Form.destroy();
            res.json({ message: "el resgistro fue eliminado con exito" });
        }
        else {
            res.status(404).json({ message: "no se encuentra el registro" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Ups hubo un error", error });
    }
});
exports.deletedFormDomiciliario = deletedFormDomiciliario;
