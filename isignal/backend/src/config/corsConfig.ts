import cors from "cors";

import config from "./app";
import { log } from "console";

const allowOrigins = config.cors.allowOrigins;
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (allowOrigins.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by Cors"), false);
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
};

export default corsOptions;
