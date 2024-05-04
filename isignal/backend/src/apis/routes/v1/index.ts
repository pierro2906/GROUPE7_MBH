import express from "express";
import authRouter from "./auth/index";
import authorityIndexRouter from "./authority/index";

const v1Router = express.Router();

v1Router.use(authRouter);
v1Router.use(authorityIndexRouter);
export default v1Router;
