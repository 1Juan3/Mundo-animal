import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";


export class Vets extends Model {
  public id!: number;
  public razon_social!: string;
  public representante_legal!: string;
  public rol!: string;
  public username!: string;
  public email!: string;
  public phone!: string;
  public address!: string;
  public photo!: string;
  public password!: string;


}
Vets.init(
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  razon_social: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  representante_legal: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: "vets",
  sequelize,
}
);
