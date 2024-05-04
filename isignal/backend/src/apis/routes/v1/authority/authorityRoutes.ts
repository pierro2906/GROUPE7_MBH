import AuthorityController from "@apis/controllers/authority/AuhtorityController";
import express from "express";
import verifyJWT from "@middlewares/auth/verifyJWT";
const authorityRouter = express.Router();
// authorityRouter.use(verifyJWT);

authorityRouter.post(
  "/generate-credentials",
  AuthorityController.handleGenerateAuthorityCredentials
);

export default authorityRouter;
