import { Record_veterinarian } from "../models/record_veterinarian";
import { Response, Request } from "express";
import sequelize from "../bd/connection";

export const createdRecord  = async (req: Request, res: Response) =>{
    try {
        const { email, name , last_name} = req.body;
        const path = req.file?.filename;
        const hoja_vida = "http://localhost:3000/uploads/" + path;
        const record = await Record_veterinarian.create({
            email, name, last_name, hoja_vida,
        });
        res.json(record);
    } catch (err) {
        res.status(500).json({ message: "El registro no fue exitoso", err });
    }
};


export const getAllRecords = async ( req: Request,res: Response) =>{
    try {
        const records = await Record_veterinarian.findAll();
        res.json(records);
    } catch (error) {
        res.status(500).json({ msg: "err.message", error });
    }
};

export const getRecord = async (res: Response, req: Request) =>{
    const id = req.params.id
    const record =  await Record_veterinarian.findByPk(id);
    if(record){
        res.json(record);
    }else{
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`,
          });
    }

};

export const deletedRecord = async (res: Response, req: Request) =>{
    try {
        const id = req.params.id;
        const record = await Record_veterinarian.findByPk(id);
        if(record){
            await record.destroy();
            res.json({message: "el resgistro fue eliminado con exito"});
        }else{
            res.status(404).json({ message: "no se encuentra el registro" });
        }
    } catch (error) {
        res.status(500).json({ message: "Ups hubo un error",error});
    }
};

