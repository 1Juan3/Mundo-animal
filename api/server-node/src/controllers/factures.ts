import { Form_vetrinaria } from "../models/form_veterinaria";
import { Response, Request } from "express";
import { Factures } from "../models/factures";
import PDFDocument from 'pdfkit';
import { Client } from "../models/client";


import { json } from "body-parser";
import sequelize from "../bd/connection";


export const getFacture = async (req: Request, res: Response) =>{
    
    try {
        const {client_id, veterinarian_id} = req.body;

        const data_client = sequelize.query('SELECT * from clients where id=?',{
            replacements:[client_id],
        })
        const data_vet = sequelize.query('SELECT * from vets where id=?',{
            replacements:[veterinarian_id],
        })
        const data_product = sequelize.query('select * from cart where client_id=?',{
            replacements:[client_id]
        })

        let data_factures = []
        data_factures.push(data_client, data_vet, data_product);
       
    } catch (err) {
        res.status(500).json({msg: "Error al enviar el formulario", err})
        
    }
}

 export const getFactures = async (req: Request, res:Response)=>{
    try{
        const forms =await Factures.findAll();
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


