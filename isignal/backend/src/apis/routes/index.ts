import express from "express";
import v1Router from "./v1/index";

const apiRouter = express.Router();

/**
 * @swagger
 * components:
 *   responses:
 *     Success200:
 *       description: Successful operation
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *                 example: true
 *               message:
 *                 type: string
 *                 example: Success
 *               content:
 *                 type: object
 *                 nullable: true
 *                 description: The data returned by the API (optional)
 *                 example: {}
 */
apiRouter.use("/v1", v1Router);

export default apiRouter;
