import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";
import { Veterinarians } from "./veterinarians";

export class Appointment  extends Model {
  public id!: number;
  public appointmentDate!: string;
  public startTime!: string;
  public endTime!: string;
  public veterinarianId!:number;
  public clientId!:number;
}

Appointment .init(
  {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  appointmentDate: {
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
  veterinaryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  clientId: {
  type: DataTypes.INTEGER,
  allowNull: true,
  },


  
},
{
  tableName: "appointment",
  sequelize,
}
);

// Relación con el modelo Veterinarian

