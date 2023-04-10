import { DataTypes, Model } from "sequelize";
import sequelize from "../src/db";

class Logs extends Model {
  public email!: string;

  public date!: Date;
}

Logs.init(
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "logs",
  },
);

export default Logs;
