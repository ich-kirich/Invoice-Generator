import express from "express";
import cors from "cors";
import config from "config";
import { StatusCodes } from "http-status-codes";
import ApiError from "./error/apiError";
import ErrorHandling from "./middleware/errorhandlingmiddleware";
import router from "./routes/router";

const app = express();
app.use(cors());
app.use(express.json());
app.use("", router);
app.use(ErrorHandling);

const startServer = async () => {
  try {
    app.listen(config.get("PORT"), () =>
      console.log(`Running on port ${config.get("PORT")}`),
    );
  } catch (e) {
    console.error(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, e.message));
  }
};

startServer();
