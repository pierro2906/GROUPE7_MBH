import express from "express";

import authorityAuthRouter from "./authorityAutRoutes";

const authorityAuthIndexRouter = express.Router();

// TODO: - add docs

/**
 * @swagger
 * tags:
 *   name: Authority Auth
 *   description: Operations related to citizen authentication
 */
authorityAuthIndexRouter.use("/authority", authorityAuthRouter);
export default authorityAuthIndexRouter;
