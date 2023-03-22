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
exports.deleteForm = exports.getForm = exports.getFactures = exports.getFacture = void 0;
const form_veterinaria_1 = require("../models/form_veterinaria");
const factures_1 = require("../models/factures");
const connection_1 = __importDefault(require("../bd/connection"));
const getFacture = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { client_id, veterinarian_id } = req.body;
        const data_client = connection_1.default.query('SELECT * from clients where id=?', {
            replacements: [client_id],
        });
        const data_vet = connection_1.default.query('SELECT * from vets where id=?', {
            replacements: [veterinarian_id],
        });
        const data_product = connection_1.default.query('select * from cart where client_id=?', {
            replacements: [client_id]
        });
        let data_factures = [];
        data_factures.push(data_client, data_vet, data_product);
    }
    catch (err) {
        res.status(500).json({ msg: "Error al enviar el formulario", err });
    }
});
exports.getFacture = getFacture;
const getFactures = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const forms = yield factures_1.Factures.findAll();
        res.json(forms);
    }
    catch (err) {
        res.status(500).json({ msg: "ups ocurrio un error ", err });
    }
});
exports.getFactures = getFactures;
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
