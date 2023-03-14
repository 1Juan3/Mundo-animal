import { Product } from "../models/product";
import { Cart } from "../models/cart";
import {  Request,  Response } from "express";
import sequelize from "../bd/connection";

export const addToCart = async (req: Request, res: Response) => {
  try {
    let { name_product,quantity, image, price,  total, sub_total, product_id,client_id} = req.body;
    sub_total = quantity * price;
    const [product, created] = await Cart.findOrCreate({
      where:{ product_id: product_id},
      defaults:{
        name_product,
        quantity,
        image,
        price,
        total,
        sub_total,
        product_id,
        client_id,
      }
    });
    if(!created){
      product.quantity+=quantity;
      product.sub_total = product.quantity * product.price;
      await product.save();
    }res.json(product)
  } catch (err) {
    res.status(500).json({ message: "err.message", err });
  }
};

export const getCart = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.findAll();
    res.json(cart);

  } catch (err) {
    res.status(500).json({ msg: "err.message", err });
  }
};
export const getCart1 = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cart = await Product.findByPk(id);

  if (cart) {
    res.json(cart);
  } else {
    res.status(404).json({
      msg: `No existe un producto con el id ${id}`,
    });
  }
};
export const cartAddQuantity = async (req: Request, res: Response) => {
  try {
    console.log("llego peticion");

    const { quantityValue } = req.body;
    const { id } = req.params;

    const cart = await Cart.findByPk(id);
    if (cart) {
      const updatedCart = await cart.update({
        quantity: cart.quantity + quantityValue,
        
      });
      res.json(updatedCart);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
    
  } catch (err) {
    res.status(500).json({ message: "err.message", err });
  }
};

export const cartResQuantity = async (req: Request, res: Response) => {
  try {
    console.log("llego peticion");

    const { quantityValue } = req.body;
    const { id } = req.params;

    const cart = await Cart.findByPk(id);
    if (cart) {
      const updatedCart = await cart.update({
        quantity: cart.quantity - quantityValue
      });
      res.json(updatedCart);
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
