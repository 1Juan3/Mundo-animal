import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";
export class Factures extends Model {
  public id!: number;
  public client_id!: number;
  public veterinarian_id!: number;
  public cart_id!: number;
}

Factures.init(
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  client_id: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: true,
  },  
  veterinarian_id: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: true,
  },  
  cart_id: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: true,
  },         
},
{
  tableName: "factures",
  sequelize,
}
);
