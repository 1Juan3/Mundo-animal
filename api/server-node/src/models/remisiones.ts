import { DataTypes, Model } from "sequelize";
import sequelize from "../bd/connection";

export class Remision extends Model {
  public id!: number;
  public id_product!: number;
  public name_product!:string;
  public price!: number;
  public quantity!:number;
  public sub_total!: number;
  public total!: number;
  public id_remision!: number;
  public id_client!: number;


}

Remision.init(
  {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_product: {
    type: DataTypes.INTEGER,
    
  },
  name_product: {
    type: DataTypes.STRING,
 
    
  },
  price: {
    type: DataTypes.DOUBLE,

    
  },
  quantity: {
    type: DataTypes.INTEGER,

    
  },

  sub_total: {
    type: DataTypes.DOUBLE,

    
  },
  total: {
    type: DataTypes.DOUBLE,

    
  },
  id_remision: {
    type: DataTypes.INTEGER,

    
  },

  id_client: {
    type: DataTypes.INTEGER,

    
  },         
},
{
  tableName: "remisiones",
  sequelize,
}
);
