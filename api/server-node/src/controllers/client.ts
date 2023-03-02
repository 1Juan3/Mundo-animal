import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Client } from "../models/client";
import jwt from "jsonwebtoken";

export const newClient = async (req: Request, res: Response) => {
  const { name, last_name, rol, address, phone, email,username, password } = req.body;
  const id = req.params.id;
    // Validamos si el usuario ya existe en la base de datos
  const client = await Client.findOne({ where: { username: username } });

  if (client) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el nombre ${username}`,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Guardarmos usuario en la base de datos
    await Client.create({
      name: name,
      last_name: last_name,
      rol: rol,
      address: address,
      phone:phone,
      email:email,
      username:username,
      password:password
    });
    res.json({
      msg: `¡Usuario ${username} creado exitosamente! `,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Upps ocurrio un error",
      error,
    });
  }
};

