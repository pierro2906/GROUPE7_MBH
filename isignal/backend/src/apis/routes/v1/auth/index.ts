import express from "express";
import authorityAuthIndexRouter from "./authority/index";
import citizenAuthIndexRouter from "./citizen";
const authRouter = express.Router();

authRouter.use("/auth", authorityAuthIndexRouter);
authRouter.use("/auth", citizenAuthIndexRouter);

export default authRouter;
