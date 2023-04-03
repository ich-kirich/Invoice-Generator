import { DataTypes, Model } from "sequelize";
import sequelize from "../src/db";

class Invoice extends Model {
  public id!: number;

  public email!: string;

  public firstName!: string;

  public lastName!: string;

  public company!: string;
}

Invoice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "invoices",
  },
);

export default Invoice;
