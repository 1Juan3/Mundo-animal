import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Veterinarians} from "../models/veterinarians";
import jwt from "jsonwebtoken";


export const newVeteterinarian = async (req: Request, res: Response) => {
    const { name, last_name,username, rol,email,phone,password} = req.body;
    const paht = req.file?.filename;
    const photo = "http://localhost:3000/uploads/" + paht;
    // Validamos si el usuario ya existe en la base de datos
    const veterinarians = await Veterinarians.findOne({ where: { username: username } });
  
    if (veterinarians) {
      return res.status(400).json({
        msg: `Ya existe un usuario veterinario con el email ${email} con el rol de `,
      });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      // Guardarmos usuario en la base de datos
      await Veterinarians.create({
        name: name,
        last_name:last_name,
        username:username,
        rol: rol,
        email:email,
        phone:phone,
        photo:photo,
        password: hashedPassword,
      });
      res.json({
        msg: `veterinario ${name} creado exitosamente! `,
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
      const { name, last_name, username, rol, email,phone,password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const { id } = req.params;
      let photo;
      if (req.file) {
        const path = req.file.filename;
        console.log(path)
        photo = "http://localhost:3000/uploads/" + path;
      }
      const veterinarians = await Veterinarians.findByPk(id);
      if (veterinarians) {
        veterinarians.name=name;
        veterinarians.last_name=last_name;
        veterinarians.username=username;
        veterinarians.rol = rol;
        veterinarians.email=email;
        veterinarians.phone=phone;
        veterinarians.password = password;
        if (photo) {
          veterinarians.photo = photo;
        }
        if (password) {
          veterinarians.password = hashedPassword;
        }
        await veterinarians.save();
        res.json(veterinarians);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
      
    } catch (err) {
      res.status(500).json({ message: "err.message", err });
    }
  };