import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/usuarios";
import jwt from "jsonwebtoken";

export const newUser = async (req: Request, res: Response) => {
  const { username, password, rol } = req.body;
  console.log(req.body);
  // Validamos si el usuario ya existe en la base de datos
  const user = await User.findOne({ where: { username: username } });

  if (user) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el nombre ${username} con el rol de `,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Guardarmos usuario en la base de datos
    await User.create({
      username: username,
      rol: rol,
      password: hashedPassword,
    });
    res.json({
      msg: `Usuario ${username} creado exitosamente! con el rol de ${rol}`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Upps ocurrio un error",
      error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, rol, password } = req.body;

  // Validamos si el usuario existe en la base de datos
  const user: any = await User.findOne({ where: { username: username } });
  const roles: any = await User.findOne({ where: { rol: rol } });

  if (!roles) {
    return res.status(400).json({
      msg: "el rol no correspnde al usuario ingresado ",
    });
  }

  if (!user) {
    return res.status(400).json({
      msg: `No existe un usuario con el nombre ${username} en la base datos`,
    });
  }

  // Validamos password
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(400).json({
      msg: `Password Incorrecta`,
    });
  }

  // Generamos token

  const token = jwt.sign(
    {
      username: username,
      rol: rol,
    },
    process.env.SECRET_KEY || "pepito123"
  );

  res.json(token);
};
