import { Request, Response } from "express";
import { Availability } from "../models/availability";
import { Veterinarians } from "../models/veterinarians";
import { Appointment } from "../models/appointment";

export const newAppointment = async (req: Request, res: Response) => {
  const { appointmentDate, startTime, endTime, veterinaryId, clientId } = req.body;
  const id = req.params.id;
  // Verificar si el veterinario está disponible
  const isAvailable = await Availability.findOne({ where:{dayOfWeek: appointmentDate}});
  // const isAvailable = await Availability.findByPk(id)
  // console.log(id)

  if (isAvailable) {
    return res.status(400).json({ message: "El veterinario no está disponible en ese horario." });
  }

  // Crear nueva entrada en la tabla "Appointment"
  const appointment = new Appointment({
    appointmentDate,
    startTime,
    endTime,
    veterinaryId,
    clientId
  });

  try {
    await appointment.save();
    return res.status(201).json(appointment);
  } catch (err) {
    return res.status(400).json({ message: 'err.message' , err});
  }
};
