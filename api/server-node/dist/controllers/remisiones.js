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
exports.getRemisiones = exports.newRemision = void 0;
const remisiones_1 = require("../models/remisiones");
const newRemision = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id;
        const id_product = req.body['id_product'];
        const name = req.body['name'];
        const price = req.body['price'];
        const quantity = req.body['quantity'];
        const sub_total = req.body['sub_total'];
        const total = req.body['total'];
        const id_remision = req.body['id_remision'];
        const client_id = req.body['client_id'];
        const remisionIds = yield remisiones_1.Remision.findAll({
            attributes: ['id_remision'],
            order: [['id_remision', 'DESC']] // Ordena los resultados por la columna 'id_remision' de manera descendente
        });
        const lastRemisionId = remisionIds[0].id_remision; // Obtiene el último valor de 'id_remision'
        const nextRemisionId = lastRemisionId + 1; // Suma 1 al último valor de 'id_remision' para obtener el siguiente valor
        const remision = yield remisiones_1.Remision.create({
            id_product,
            name_product: name,
            price,
            quantity,
            sub_total,
            total,
            id_remision: nextRemisionId,
            id_client: client_id
        });
        res.json(remision);
    }
    catch (err) {
        res.status(400).json({ msg: `no se puedo hacer la solicitud`, err });
    }
});
exports.newRemision = newRemision;
const getRemisiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const remisiones = yield remisiones_1.Remision.findAll();
        res.json(remisiones);
    }
    catch (error) {
        res.status(400).json({ msg: 'no se encontraron remisiones ', error });
    }
});
exports.getRemisiones = getRemisiones;
