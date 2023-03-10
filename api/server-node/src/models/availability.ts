import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";
import { Veterinarians } from "./veterinarians";

export class Availability extends Model {
  public id!: number;
  public dayOfWeek!: string;
  public startTime!: string;
  public endTime!: string;
  public veterinarianId!:number;
}

Availability.init(
  {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dayOfWeek: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  startTime: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  endTime: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },
  veterinarianId: {
    type: DataTypes.INTEGER,
    allowNull: true,
},

  
},
{
  tableName: "availabilities",
  sequelize,
}
);

// Relación con el modelo Veterinarian

