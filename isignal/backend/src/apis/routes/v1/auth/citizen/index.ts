import express from "express";

import authorityAuthRouter from "./citizenAutRoutes";
// TODO: - add docs
const citizenAuthIndexRouter = express.Router();
/**
 * @swagger
 * tags:
 *   name: Citizen Auth
 *   description: Operations related to citizen authentication
 */
citizenAuthIndexRouter.use("/citizen", authorityAuthRouter);
export default citizenAuthIndexRouter;
