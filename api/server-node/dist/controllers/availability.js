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
exports.getAvailabilitys = exports.createAvailability = void 0;
const availability_1 = require("../models/availability");
const veterinarians_1 = require("../models/veterinarians");
const createAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dayOfWeek, startTime, endTime, veterinarianId } = req.body;
    try {
        // Validamos que el veterinario exista en la base de datos
        const veterinarian = yield veterinarians_1.Veterinarians.findByPk(veterinarianId);
        if (!veterinarian) {
            return res.status(404).json({ msg: `No se encontró un veterinario con el id ${veterinarianId}` });
        }
        // Creamos la nueva disponibilidad
        yield availability_1.Availability.create({
            dayOfWeek: dayOfWeek,
            startTime: startTime,
            endTime: endTime,
            veterinarianId: veterinarianId
        });
        res.json({
            msg: "Disponibilidad creada exitosamente",
        });
    }
    catch (error) {
        res.status(500).json({ msg: "Ocurrió un error al crear la disponibilidad", error });
    }
});
exports.createAvailability = createAvailability;
const getAvailabilitys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const veterinarianId = req.body;
    try {
        const availabilitys = yield availability_1.Availability.findAll({
            where: {
                veterinarianId: 1 // Especificar el valor de veterinarianId
            }
        });
        console.log(availabilitys);
        res.json(availabilitys);
    }
    catch (error) {
        res.status(400).json({ msg: "no se puede traer la informacion", error });
    }
});
exports.getAvailabilitys = getAvailabilitys;
