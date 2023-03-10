import { Request, Response } from "express";
import { Availability } from "../models/availability";
import { Veterinarians } from "../models/veterinarians";

export const createAvailability = async (req: Request, res: Response) => {
  const { dayOfWeek, startTime, endTime,veterinarianId } = req.body;
  try {
    // Validamos que el veterinario exista en la base de datos
    const veterinarian = await Veterinarians.findByPk(veterinarianId);
    if (!veterinarian) {
     return res.status(404).json({ msg: `No se encontró un veterinario con el id ${veterinarianId}` });
    }

    // Creamos la nueva disponibilidad
    await Availability.create({
      dayOfWeek: dayOfWeek,
      startTime:startTime,
      endTime:endTime,
      veterinarianId: veterinarianId
    })
    res.json({
      msg: "Disponibilidad creada exitosamente" , 
      
    });
  } catch (error) {
    res.status(500).json({ msg: "Ocurrió un error al crear la disponibilidad", error });
  }

};
export const getAvailabilitys = async (req: Request, res:Response)=>{
  const veterinarianId = req.body;
  try {
    const availabilitys = await Availability.findAll({
      where: {
        veterinarianId: 1 // Especificar el valor de veterinarianId
      }
    });
    console.log(availabilitys)
    res.json(availabilitys);
    
  } catch (error) {
    res.status(400).json({msg: "no se puede traer la informacion", error});
    
  }
}

