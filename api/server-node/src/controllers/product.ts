import { Product } from "../models/product";
import {  Request,  Response } from "express";
import sequelize from "../bd/connection";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stock } = req.body;
    const paht = req.file?.filename;
    const image = "http://localhost:3000/uploads/" + paht;
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      image,
    });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "err.message", err });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "err.message", err });
  }
};
export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: `No existe un producto con el id ${id}`,
    });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    console.log("llego peticion");

    const { name, description, price, stock } = req.body;
    const { id } = req.params;
    let image;
    if (req.file) {
      const path = req.file.filename;
      console.log(path)
      image = "http://localhost:3000/uploads/" + path;
    }
    const product = await Product.findByPk(id);
    if (product) {
      product.name = name;
      product.description = description;
      product.price = price;
      product.stock = stock;
      if (image) {
        product.image = image;
      }
      await product.save();
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
    
  } catch (err) {
    res.status(500).json({ message: "err.message", err });
  }
};

export const deleteProduct1 = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      res.json({ msg: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "err.message", err });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const image = req.file ? req.file.filename : undefined;

  try {
    // Iniciamos una transacción
    await sequelize.transaction(async (t) => {
      // Buscamos el producto
      const product = await Product.findByPk(id, { transaction: t });

      // Si no existe el producto, devolvemos un error 404
      if (!product) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      // Borramos las imágenes asociadas al producto

      // Borramos el producto
      await Product.destroy({ where: { id: id }, transaction: t });

      // Devolvemos una respuesta de éxito
      return res.status(204).json();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al eliminar el producto" });
  }
};
