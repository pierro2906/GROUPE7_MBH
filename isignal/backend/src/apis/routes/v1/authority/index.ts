import express from "express";

import authorityRouter from "./authorityRoutes";

const authorityIndexRouter = express.Router();

// Utilisation du contexte api/v1 pour toutes les routes
/**
 * @swagger
 * tags:
 *   name: Authority
 *   description: Operations related to citizen authentication
 */
authorityIndexRouter.use("/authority", authorityRouter);
export default authorityIndexRouter;
