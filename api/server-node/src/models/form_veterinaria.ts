import { Model, DataTypes } from "sequelize";
import sequelize from "../bd/connection";

export class Form_vetrinaria extends Model {
  public id!: number;
  public email!: string;
  public razon_social!: string;
  public representante_legal!: string;
}
Form_vetrinaria.init(
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
    razon_social: {
      type: new DataTypes.STRING,
      allowNull: false,
    },
    representante_legal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "formveterinaria",
    sequelize,
  }
);
