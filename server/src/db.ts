import config from "config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  String(config.get("database")),
  String(config.get("username")),
  String(config.get("password")),
  {
    dialect: config.get("dialect"),
    host: String(config.get("host")),
    port: Number(config.get("port")),
  },
);

export default sequelize;
