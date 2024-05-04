import express, { Express } from "express";
// Middlewares
import { logger } from "@middlewares/loggerMiddleware";
import cookieParser from "cookie-parser";
import errorHandler from "@middlewares/errorHandlerMiddleware";

import preventCrossSiteScripting from "@middlewares/preventCrossScriptingMiddleware";
import compression from "compression";
import { rateLimiter } from "@middlewares/rateLimiterMiddleware";
import dotenv from "dotenv";
import xssMiddleware from "@middlewares/xssMiddleware";
import helmet from "helmet";
import config from "@config/app";
import options from "@config/corsConfig";
import cors from "cors";
import apiRouter from "@apis/routes/index";
import path from "path";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "@config/swagger/options";
const views = "../views";
dotenv.config();
export default () => {
  const app: Express = express();
  const baseApiUrl = "/" + config.api.prefix.replace("/", "");
  const corsOptions = options;
  app.use(compression());
  app.use(helmet());
  app.use(cors(corsOptions));

  app.use(logger);
  app.use(preventCrossSiteScripting);
  app.use(rateLimiter);
  app.use(xssMiddleware());

  app.use(express.json({ limit: config.api.jsonLimit }));
  app.use(express.urlencoded({ extended: config.api.extUrlencoded }));
  app.use(cookieParser());
  //Statics
  //Routes

  app.use(express.static("public"));
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.use(baseApiUrl, apiRouter);

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, views));
  // app.post("/health", (_req: Request, res: Response) => {
  //   const password =
  //     "No programming concept is complete without a cute animal mascot.";
  //   const matricule = "Audrey";
  //   res.render("templates/email/client/new_access.ejs", {
  //     password: password,
  //     matricule: matricule,
  //     name: "audrey",
  //   });
  //   // res.status(200).send("Server is running");
  // });
  app.use(errorHandler);

  return app;
};
