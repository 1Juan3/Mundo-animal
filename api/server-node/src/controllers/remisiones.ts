import { Remision } from "../models/remisiones";
import {  Request,  Response } from "express";
import sequelize from "../bd/connection";



export const newRemision = async (req: Request, res: Response)=>{
try {
    let id: number;
    const id_product = req.body['id_product'];
    const name = req.body['name'];
    const price = req.body['price'];
    const quantity = req.body['quantity'];
    const sub_total = req.body['sub_total'];
    const total = req.body['total'];
    const id_remision = req.body['id_remision'];
    const client_id = req.body['client_id'];
const remisionIds = await Remision.findAll({
  attributes: ['id_remision'],
  order: [['id_remision', 'DESC']] // Ordena los resultados por la columna 'id_remision' de manera descendente
});

const lastRemisionId = remisionIds[0].id_remision; // Obtiene el último valor de 'id_remision'
const nextRemisionId = lastRemisionId + 1; // Suma 1 al último valor de 'id_remision' para obtener el siguiente valor

    const remision = await Remision.create({
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
} catch (err) {
    res.status(400).json({ msg:`no se puedo hacer la solicitud`, err})
    
}

};

export const getRemisiones = async (req: Request, res:Response)=>{
 
    try {
        const remisiones = await Remision.findAll()
        res.json(remisiones)

    } catch (error) {
        res.status(400).json({msg: 'no se encontraron remisiones ', error})
    }
    

}