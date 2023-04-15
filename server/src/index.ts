import express from "express";
import cors from "cors";
import config from "config";
import { StatusCodes } from "http-status-codes";
import path from "path";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import ApiError from "./error/apiError";
import router from "./routes/router";
import initDb from "../models/initDb";
import connectMiddlewares from "./libs/utils";

const app = express();
const openapiJson = YAML.load(
  path.join(__dirname, "..", "swagger", "openapi.yaml"),
);
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiJson));
connectMiddlewares(app);
app.use(cors());
app.use("", router);

const startServer = async () => {
  try {
    await initDb();
    app.listen(config.get("server_port"), () =>
      console.log(`Running on port ${config.get("server_port")}`),
    );
  } catch (e) {
    console.error(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, e.message));
  }
};

startServer();
