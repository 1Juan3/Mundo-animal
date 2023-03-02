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
exports.deleteForm = exports.getForm = exports.getAllForms = exports.newForm = void 0;
const form_veterinaria_1 = require("../models/form_veterinaria");
const newForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, razon_social, representante_legal } = req.body;
        console.log(req.body);
        const form = yield form_veterinaria_1.Form_vetrinaria.create({
            email, razon_social, representante_legal,
        });
        res.json(form);
    }
    catch (err) {
        res.status(500).json({ msg: "Error al enviar el formulario", err });
    }
});
exports.newForm = newForm;
const getAllForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const forms = yield form_veterinaria_1.Form_vetrinaria.findAll();
        res.json(forms);
    }
    catch (err) {
        res.status(500).json({ msg: "ups ocurrio un error ", err });
    }
});
exports.getAllForms = getAllForms;
const getForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const form = yield form_veterinaria_1.Form_vetrinaria.findByPk(id);
        res.json(form);
    }
    catch (err) {
        res.status(500).json({ msg: "no se pudo encontrar el fomrmulario solicitado", err });
    }
});
exports.getForm = getForm;
const deleteForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const form = yield form_veterinaria_1.Form_vetrinaria.findByPk(id);
        if (form) {
            yield form.destroy();
            res.json({ msg: "El formulario fue elimando con exito" });
        }
    }
    catch (error) {
        res.json({ msg: "no se pudo eliminar el registro", error });
    }
});
exports.deleteForm = deleteForm;
