import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Deliverers } from "../models/deliverers";
import jwt from "jsonwebtoken";

export const newDeliverers = async (req: Request, res: Response) => {
    const { email,username, rol, password} = req.body;
    // Validamos si el usuario ya existe en la base de datos
    const user = await Deliverers.findOne({ where: { username: username } });
  
    if (user) {
      return res.status(400).json({
        msg: `Ya existe un usuario domiciliario con el usuario ${username} con el rol de `,
      });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      // Guardarmos usuario en la base de datos
      await Deliverers.create({
        email:email,
        username:username,
        rol: rol,
        password: hashedPassword,
      });
      res.json({
        msg: `domiciliario creado exitosamente! `,
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
      const { email, username, rol, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const { id } = req.params;

      const deliverers = await Deliverers.findByPk(id);
      if (deliverers) {
        deliverers.email=email;
        deliverers.username= username;
        deliverers.rol = rol;
        deliverers.password = password;

        if (password) {
          deliverers.password = hashedPassword;
        }
        await deliverers.save();
        res.json(deliverers);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
      
    } catch (err) {
      res.status(500).json({ message: "err.message", err });
    }
  };