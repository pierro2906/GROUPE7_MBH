import { Request, Response } from "express";

import AuthorityService from "@apis/services/authority/AuthorityService"; // Assurez-vous d'importer le bon chemin pour votre service
import {
  GenerateCredentialInput,
  AuthorityCredentialsType,
} from "@apis/schemas/authority/authorityTypes";
import { log } from "console";
import httpMsg from "@utils/http/httpMessageUtil";

export default class AuhtorityController {
  public static readonly handleGenerateAuthorityCredentials = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      req.body.roleId = parseInt(req.body.roleId);
      const data: GenerateCredentialInput = req.body;
      log(data, "Je viens de la generation controller");

      const authorityData: AuthorityCredentialsType =
        await AuthorityService.generateAuthorityCredentials(data);

      const emailData = {
        matricule: authorityData.matricule,
        password: authorityData.password,
        email: authorityData.email,
        name: authorityData.name,
      };
      const sended = await AuthorityService.sendEmail(emailData);

      if (!sended) {
        const response = httpMsg.http422(
          "Problème lors de l'envoi du mail des nouvels accès",
          "error"
        );
        res.status(response.httpStatusCode).json(response.data);
      }
      const response = httpMsg.http200(authorityData);
      res.status(response.httpStatusCode).json(response.data);
    } catch (error) {
      const response = httpMsg.http401((error as any).message);
      res.status(response.httpStatusCode).json(response.data);
      // res.status(401).json({ message: (error as any).message });
    }
  };
}
