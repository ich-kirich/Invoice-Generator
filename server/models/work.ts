import { DataTypes, Model } from "sequelize";
import sequelize from "../src/db";

class Work extends Model {
  public nameWork!: string;

  public priceWork!: number;
}

Work.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nameWork: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priceWork: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "works",
  },
);

export default Work;
