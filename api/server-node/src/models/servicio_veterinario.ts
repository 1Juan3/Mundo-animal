import { Model, DataTypes } from "sequelize";
import sequelize from "../bd/connection";

export class servicio_veterinario extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public precio!: number;
    public image!: string;
}

servicio_veterinario.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      descripcion: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      precio: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false,
      },
      imagen: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
    },
    {
      tableName: "servicio_veterinario ",
      sequelize,
    }
  );
  