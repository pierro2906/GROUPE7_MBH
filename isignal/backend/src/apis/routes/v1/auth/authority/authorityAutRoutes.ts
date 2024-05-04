import AuthorityAuthController from "@apis/controllers/auth/AuthorityAuthController";
import verifyJWT from "@middlewares/auth/verifyJWT";
import express from "express";

const authorityAuthRouter = express.Router();
// TODO: - add docs
authorityAuthRouter.post(
  "/login",
  AuthorityAuthController.handleAuthorityLogin
);

authorityAuthRouter.post(
  "/login",
  AuthorityAuthController.handleAuthorityLogin
);

authorityAuthRouter.post(
  "/refresh",
  AuthorityAuthController.handleRefreshToken
);

authorityAuthRouter.post(
  "/logout",
  verifyJWT,
  AuthorityAuthController.handleAuthorityLogout
);

authorityAuthRouter.post(
  "/logoutAll",
  verifyJWT,
  AuthorityAuthController.handleAuthorityLogoutAll
);

export default authorityAuthRouter;
