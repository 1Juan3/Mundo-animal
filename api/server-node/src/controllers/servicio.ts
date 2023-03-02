import { servicio_veterinario } from "../models/servicio_veterinario";
import { Request, Response } from "express";
import sequelize from "../bd/connection";


export const createService = async (req: Request, res:Response) => {
    try{
        const { nombre, descripcion, precio} = req.body;
        const paht = req.file?.filename;
        const imagen = "http://localhost:3000/uploads/" + paht;
        const servicio = servicio_veterinario.create({
            nombre, descripcion, precio, imagen
        })
        res.json(servicio)
    }catch(err){
        res.status(400).json({message :"El producto no pudo ser agregado ", err})
    }
};

export const getServices= async (req: Request, res:Response)=>{
    try{
        const services = await servicio_veterinario.findAll();
        res.json(services);
    }catch(err){
        res.status(500).json({msg: "err.message",err  })
    }
};

export const getService = async (req: Request, res:Response)=>{
   const {id, nombre } = req.params;
   const service = await servicio_veterinario.findByPk(id);

   if (service){
    res.json (service);
   }else{
    res.status(404).json({
         msg: `no se puede listar el servicio ${nombre}`,
    });
   }


};