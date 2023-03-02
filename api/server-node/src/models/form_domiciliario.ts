import { Model, DataTypes } from "sequelize";
import sequelize from "../bd/connection";

export class Form_domiciliario extends Model {
  public id!: number;
  public email!: string;
  public name!: string;
  public last_name!: string;
  public hoja_vida!:string;
}
Form_domiciliario.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hoja_vida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
  },
  {
    tableName: "formdomiciliario",
    sequelize,
  }
);
