import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";


export class Deliverers extends Model {
  public id!: number;
  public email!: string;
  public username!: string;
  public rol!: string;
  public password!:string;
}
Deliverers.init(
  {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  rol: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
},

  
},
{
  tableName: "deliverers",
  sequelize,
}
);
