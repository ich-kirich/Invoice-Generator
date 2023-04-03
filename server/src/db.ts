import config from "config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  String(config.get("DB_NAME")),
  String(config.get("DB_USER")),
  String(config.get("DB_PASSWORD")),
  {
    dialect: "postgres",
    host: String(config.get("DB_HOST")),
    port: Number(config.get("DB_PORT")),
  },
);

export default sequelize;
