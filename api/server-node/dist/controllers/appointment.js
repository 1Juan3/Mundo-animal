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
exports.newAppointment = void 0;
const availability_1 = require("../models/availability");
const appointment_1 = require("../models/appointment");
const newAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { appointmentDate, startTime, endTime, veterinaryId, clientId } = req.body;
    const id = req.params.id;
    // Verificar si el veterinario está disponible
    const isAvailable = yield availability_1.Availability.findOne({ where: { dayOfWeek: appointmentDate } });
    // const isAvailable = await Availability.findByPk(id)
    // console.log(id)
    if (isAvailable) {
        return res.status(400).json({ message: "El veterinario no está disponible en ese horario." });
    }
    // Crear nueva entrada en la tabla "Appointment"
    const appointment = new appointment_1.Appointment({
        appointmentDate,
        startTime,
        endTime,
        veterinaryId,
        clientId
    });
    try {
        yield appointment.save();
        return res.status(201).json(appointment);
    }
    catch (err) {
        return res.status(400).json({ message: 'err.message', err });
    }
});
exports.newAppointment = newAppointment;
