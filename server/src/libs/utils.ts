import * as OpenApiValidator from "express-openapi-validator";
import path from "path";
import express from "express";
import ErrorHandling from "../middleware/errorhandlingmiddleware";

function connectMiddlewares(app: express.Application) {
  app.use(
    OpenApiValidator.middleware({
      apiSpec: path.join(__dirname, "..", "..", "swagger", "openapi.yaml"),
      validateRequests: true,
    }),
  );
  app.use(ErrorHandling);
}

export default connectMiddlewares;
