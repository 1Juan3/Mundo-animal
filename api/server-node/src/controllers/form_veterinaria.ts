import { Form_vetrinaria } from "../models/form_veterinaria";
import { Response, Request } from "express";
import sequelize from "../bd/connection";
import { json } from "body-parser";

export const newForm = async (req: Request, res: Response) =>{
    
    try {
        const {email, razon_social, representante_legal} = req.body;
        console.log(req.body)
        const form = await Form_vetrinaria.create({
                email, razon_social, representante_legal,
        });
        res.json(form)
    } catch (err) {
        res.status(500).json({msg: "Error al enviar el formulario", err})
        
    }
}

 export const getAllForms = async (req: Request, res:Response)=>{
    try{
        const forms =await Form_vetrinaria.findAll();
        res.json(forms)
    }catch(err){
        res.status(500).json({msg: "ups ocurrio un error ", err})
    }
}

export const getForm = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;
        const form = await Form_vetrinaria.findByPk(id);
        res.json(form)
    } catch (err) {
        res.status(500).json({msg: "no se pudo encontrar el fomrmulario solicitado", err})
    }
}

export const deleteForm = async (req: Request, res:Response) =>{
    try {
        const {id}= req.params;
        const form = await Form_vetrinaria.findByPk(id);
        if(form){
            await form.destroy();
            res.json({msg: "El formulario fue elimando con exito"})
        }
    } catch (error) {
        res.json({msg: "no se pudo eliminar el registro", error})
    }
}


