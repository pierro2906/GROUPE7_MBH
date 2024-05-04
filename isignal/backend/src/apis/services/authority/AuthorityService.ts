import config from "@config/app";

import {
  generateRandomString,
  genererMatricule,
} from "@utils/string/stringUtil";

import {
  AuthorityCredentialsType,
  GenerateCredentialInput,
} from "@apis/schemas/authority/authorityTypes";
import auhtorithyValidators from "@apis/schemas/authority/authorityValidators";
import auhtorityUpdateDao from "@apis/daos/authority//authorityUpdateDao";
import constEmail from "@constants/emailConstant";
import path from "path";
import sender from "@utils/nodemailer/sender";
import userReadDao from "@apis/daos/user/userReadDao";
import { log } from "console";
import { hashPassword } from "@utils/string/passwordUtil";
export default class AuthorityService {
  static readonly generateAuthorityCredentials = async (
    data: GenerateCredentialInput
  ) => {
    try {
      log("Generation service", "Je viens de la generation service");

      const { userId, bureauId, roleId } =
        auhtorithyValidators.validateCredentialGenartion(data);
      log("Generation service Validé", "Je viens de la generation service");

      log({ userId, bureauId, roleId }, "from athorityService generate aceess");
      const foundUSer = await userReadDao.getUserById(userId);
      const passwordString = generateRandomString(config.pwd.pwdLength);
      log(passwordString);
      const password = await hashPassword(passwordString);
      const matricule = genererMatricule(foundUSer.name);
      const authority =
        await auhtorityUpdateDao.updateMaticuleAndPwdOrInsertAuthority(
          userId,
          password,
          bureauId,
          roleId,

          matricule
        );
      if (!authority) {
        throw new Error("Database server error");
      }
      const responseData: AuthorityCredentialsType = {
        ...authority,
        pass: passwordString,
        ...foundUSer,
      };

      return responseData;
    } catch (error) {
      throw new Error((error as any).message);
    }
  };
  static readonly sendEmail = async (data: any) => {
    try {
      const template: any = {};

      template.subject = constEmail.TEMPLATE_SUBJECT.newAccess;
      template.path = path.resolve(
        constEmail.TEMPLATE_PATH.client,
        constEmail.TEMPLATE_FILE.newAccess
      );

      const result = await sender(template, data);
      if (!result) return false;
      return true;
    } catch (error) {
      throw new Error("Error mail credentials" + (error as any).message);
    }
  };
}
