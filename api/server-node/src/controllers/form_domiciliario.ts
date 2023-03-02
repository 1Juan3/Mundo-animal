import { Form_domiciliario } from "../models/form_domiciliario";
import { Response, Request } from "express";
import sequelize from "../bd/connection";

export const createdFormDomiciliario  = async (req: Request, res: Response) =>{
    try {
        const { email, name , last_name} = req.body;
        const path = req.file?.filename;
        const hoja_vida = "http://localhost:3000/uploads/" + path;
        const Form = await Form_domiciliario.create({
            email, name, last_name, hoja_vida,
        });
        res.json(Form);
    } catch (err) {
        res.status(500).json({ message: "El registro no fue exitoso", err });
    }
};


export const getAllFormsDomiciliario = async (req: Request,res: Response ) =>{
    try {
        const Forms = await Form_domiciliario.findAll();
        res.json(Forms);
    } catch (error) {
        res.status(500).json({ message: "no pudo hacer la solicitud", error})
    }
};

export const getFormDomiciliario = async (res: Response, req: Request) =>{
    const id = req.params.id
    const Form =  await Form_domiciliario.findByPk(id);
    if(Form){
        res.json(Form);
    }else{
        res.status(400).json({ message: "no se encuentra el Form con el id"+ id});
    }

};

export const deletedFormDomiciliario = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id;
        const Form = await Form_domiciliario.findByPk(id);
        if(Form){
            await Form.destroy();
            res.json({message: "el resgistro fue eliminado con exito"});
        }else{
            res.status(404).json({ message: "no se encuentra el registro" });
        }
    } catch (error) {
        res.status(500).json({ message: "Ups hubo un error",error});
    }
};

