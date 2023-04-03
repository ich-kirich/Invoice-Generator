import sequelize from "../src/db";
import Invoice from "./invoice";
import Work from "./work";

const initDb = async () => {
  Work.belongsTo(Invoice);
  Invoice.hasMany(Work, { as: "works" });

  await sequelize.authenticate();
  return;
};

export default initDb;
