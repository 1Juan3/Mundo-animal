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
exports.deletedRecord = exports.getRecord = exports.getAllRecords = exports.createdRecord = void 0;
const record_veterinarian_1 = require("../models/record_veterinarian");
const createdRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { email, name, last_name } = req.body;
        const path = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
        const hoja_vida = "http://localhost:3000/uploads/" + path;
        const record = yield record_veterinarian_1.Record_veterinarian.create({
            email, name, last_name, hoja_vida,
        });
        res.json(record);
    }
    catch (err) {
        res.status(500).json({ message: "El registro no fue exitoso", err });
    }
});
exports.createdRecord = createdRecord;
const getAllRecords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const records = yield record_veterinarian_1.Record_veterinarian.findAll();
        res.json(records);
    }
    catch (error) {
        res.status(500).json({ msg: "err.message", error });
    }
});
exports.getAllRecords = getAllRecords;
const getRecord = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const record = yield record_veterinarian_1.Record_veterinarian.findByPk(id);
    if (record) {
        res.json(record);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`,
        });
    }
});
exports.getRecord = getRecord;
const deletedRecord = (res, req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const record = yield record_veterinarian_1.Record_veterinarian.findByPk(id);
        if (record) {
            yield record.destroy();
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
exports.deletedRecord = deletedRecord;
