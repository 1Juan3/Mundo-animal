import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";
import { Product } from "./product";

export class Cart extends Model {
  public id!: number;
  public adress_vet!:string
  public email_vet!: string;
  public name_veterinaria!: string;
  public number_phone_vet!: string;
  public name_client!: string;
  public adress_client!: string;
  public email_client!: string;
  public number_phone_client!: string;
  public name_product!: string;
  public quantity_product!: number;
  public price_product!: number;
  public sub_total_product!: number;
  public total!: number;
}

Cart.init(
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  adress_vet: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  name_veterinaria: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  number_phone_vet: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  name_client: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  adress_client: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  email_client: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },

  number_phone_client: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  name_product: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  }, 
  quantity_product: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: true,
  },
  price_product: {
    type: DataTypes.DOUBLE,
    unique: false,
    allowNull: true,
  } ,
  sub_total_product: {
    type: DataTypes.DOUBLE,
    unique: false,
    allowNull: true,
  } 
  ,   total: {
    type: DataTypes.DOUBLE,
    unique: false,
    allowNull: true,
  }             
},
{
  tableName: "orden_pedido",
  sequelize,
}
);
