import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";


export class Veterinarians extends Model {
  public id!: number;
  public name!: string;
  public last_name!: string;
  public username!: string;
  public rol!: string;
  public email!: string;
  public phone!: string;
  public photo!: string;
  public password!: string;


}
Veterinarians.init(
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rol: {
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
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: "veterinarians",
  sequelize,
}
);