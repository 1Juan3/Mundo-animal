import { Model, DataTypes } from "sequelize";
import sequelize from "../bd/connection";

export class Record_veterinarian extends Model {
  public id!: number;
  public email!: string;
  public name!: string;
  public last_name!: string;
  public hoja_vida!: string;
}
Record_veterinarian.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(45),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    hoja_vida: {
      type: new DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    tableName: "registros_veterinario",
    sequelize,
  }
);
