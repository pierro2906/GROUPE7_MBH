import { Request, Response } from "express";
import { LoginInput } from "@apis/schemas/auth/authority/authorityAuthTypes";
import AuthorityAuthService from "@apis/services/auth/authority/AuthorityAUthService"; // Assurez-vous d'importer le bon chemin pour votre service
import httpMsg from "@utils/http/httpMessageUtil";
import { log } from "console";

export default class AuthorityAuthController {
  static readonly handleAuthorityLogin = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const data: LoginInput = req.body;

    try {
      const tokens = await AuthorityAuthService.logAuthority(data);

      const response = httpMsg.http200(tokens);
      res.status(response.httpStatusCode).json(response.data);
    } catch (error) {
      const response = httpMsg.http401({ message: (error as any).message });
      res.status(response.httpStatusCode).json(response.data);
    }
  };

  static readonly handleRefreshToken = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      // Vérifie si le cookie de rafraîchissement est présent
      // log(req.body);
      const refreshToken = req.body.refreshToken;
      if (!refreshToken) {
        log("token non trouvé", "je viend du controller refresh token du try");

        throw Error("Unauthorized");
      }

      try {
        const tokens = await AuthorityAuthService.refreshToken(refreshToken);

        log(tokens, "je viend du controller refresh token du try");
        const response = httpMsg.http200(tokens);
        res.status(response.httpStatusCode).json(response.data);
      } catch (error) {
        const response = httpMsg.http401({ message: (error as any).message });
        res.status(response.httpStatusCode).json(response.data);
      }
    } catch (error) {}
  };

  static readonly handleAuthorityLogout = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken) {
      throw Error("Unauthorized");
    }

    try {
      if (refreshToken) {
        await AuthorityAuthService.logoutAuhtority(refreshToken);
      }
      const response = httpMsg.http200({
        message: "Logged out successfully",
      });
      res.status(response.httpStatusCode).json(response.data);
    } catch (error) {
      const response = httpMsg.http500(
        "Failed to logout",
        (error as any).message
      );
      res.status(response.httpStatusCode).json(response.data);
    }
  };
  static readonly handleAuthorityLogoutAll = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const authorityId: string | undefined = req.body.authorityId; // Assurez-vous que le nom du cookie correspond

    try {
      if (authorityId) {
        await AuthorityAuthService.logoutAllAuhtority(authorityId);
      }

      const response = httpMsg.http200({
        message: "Logged out successfully",
      });
      res.status(response.httpStatusCode).json(response.data);
    } catch (error) {
      const response = httpMsg.http500(
        "Failed to logout",
        (error as any).message
      );
      res.status(response.httpStatusCode).json(response.data);
    }
  };
}
