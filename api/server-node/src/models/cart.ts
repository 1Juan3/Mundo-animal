import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";
import { Product } from "./product";

export class Cart extends Model {
  public id!: number;
  public name_product!:string
  public quantity!: number;
  public image!: string;
  public price!: number;
  public total!: number;
  public sub_total!: number;
  public product_id!: number;
  public client_id!: number;
}

Cart.init(
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name_product: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    unique: true,
    allowNull: true,
  },
  total: {
    type: DataTypes.DOUBLE,
    unique: true,
    allowNull: true,
  },
  sub_total: {
    type: DataTypes.DOUBLE,
    unique: true,
    allowNull: true,
  },

  product_id: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: true,
  }           
},
{
  tableName: "cart",
  sequelize,
}
);
