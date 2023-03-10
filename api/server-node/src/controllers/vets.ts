import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Vets } from "../models/vets";
import jwt from "jsonwebtoken";

export const newVet = async (req: Request, res: Response) => {
    const { razon_social, representante_legal, rol,username, email,phone,address, password} = req.body;
    const paht = req.file?.filename;
    const photo = "http://localhost:3000/uploads/" + paht;
    // Validamos si el usuario ya existe en la base de datos
    const vet = await Vets.findOne({ where: { username: username } });
  
    if (vet) {
      return res.status(400).json({
        msg: `Ya existe una veterinaria con la razon social de ${razon_social} con el rol de `,
      });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      // Guardarmos usuario en la base de datos
      await Vets.create({
        razon_social: razon_social,
        representante_legal:representante_legal,
        rol: rol,
        username:username,
        email:email,
        phone:phone,
        adrress:address,
        photo:photo,
        password: hashedPassword,
      });
      res.json({
        msg: `veterinaria ${razon_social} creado exitosamente! `,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Upps ocurrio un error",
        error,
      });
    }
  };

  export const updateProfile = async (req: Request, res: Response) => {
    try {
      console.log("llego peticion");
      const { razon_social, representante_legal, rol,username, email,phone,address, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const { id } = req.params;
      let photo;
      if (req.file) {
        const path = req.file.filename;
        console.log(path)
        photo = "http://localhost:3000/uploads/" + path;
      }
      const vet = await Vets.findByPk(id);
      if (vet) {
        vet.razon_social=razon_social;
        vet.representante_legal = representante_legal;
        vet.rol = rol;
        vet.username= username;
        vet.email=email;
        vet.phone=phone;
        vet.address = address;
        vet.password = password;
        if (photo) {
          vet.photo = photo;
        }
        if (password) {
          vet.password = hashedPassword;
        }
        await vet.save();
        res.json(vet);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
      
    } catch (err) {
      res.status(500).json({ message: "err.message", err });
    }
  };