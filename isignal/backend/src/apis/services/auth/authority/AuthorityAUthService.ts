import bcrypt from "bcrypt";
import RefreshTokenService from "../../authorityToken/AuthorityTokenService";
import auhtorityReadDao from "@apis/daos/authority/authorityReadDao";
import {
  LoginInput,
  RefreshTokenPayloadType,
} from "@apis/schemas/auth/authority/authorityAuthTypes";
import authorityAuthValidator from "@apis/schemas/auth/authority/authorityAuthValidators";
import authorityTokenDeleteDao from "@apis/daos/authorityToken/authorityTokenDeleteDao";
import { log } from "console";

export default class AuthorityAuthService {
  static readonly logAuthority = async (data: LoginInput) => {
    try {
      // Vérification de la présence de matricule et password
      const { matricule, password } =
        authorityAuthValidator.validateLoginData(data);
      if (!matricule || !password) {
        throw new Error("matricule and password are required");
      }

      const foundAuthority = await auhtorityReadDao.getAuthorityByMatricule(
        matricule
      );
      log("Je log l'utilisateur qui veut se connecter", foundAuthority.role);
      if (!foundAuthority) {
        throw new Error("Unauthorized");
      }

      // Vérification du mot de passe avec bcrypt
      const match = await bcrypt.compare(password, foundAuthority.password);
      if (!match) {
        throw new Error("Unauthorized");
      }

      // Création du token d'access JWT
      const accessToken = RefreshTokenService.generateToken({
        authorityId: foundAuthority.id,
        role: foundAuthority.role,
      });
      // Création du token de rafraîchissement JWT
      const refreshToken = await RefreshTokenService.generateRefreshToken({
        authorityId: foundAuthority.id,
      });

      return { accessToken, refreshToken };
    } catch (error) {
      throw new Error("Error " + (error as any).message);
    }
  };

  static readonly refreshToken = async (refreshToken: string) => {
    try {
      const decoded: RefreshTokenPayloadType =
        await RefreshTokenService.verifyRefreshToken(refreshToken);

      const foundAuthority = await auhtorityReadDao.getAuthorityById(
        decoded.authorityId
      );

      if (!foundAuthority) {
        throw new Error("Unauthorized");
      }

      const newRefreshToken = await RefreshTokenService.rotateRefreshToken(
        refreshToken,
        {
          authorityId: (decoded as any).authorityId,
          tokenFamily: (decoded as any).tokenFamily,
        }
      );
      const accessToken = RefreshTokenService.generateToken({
        ...foundAuthority,
      });
      return { accessToken, refreshToken: newRefreshToken };
    } catch (error) {
      throw new Error("Error " + (error as any).message);
    }
  };

  static readonly logoutAuhtority = async (refreshToken: string) => {
    await authorityTokenDeleteDao.deleteAuhtorityTokensByToken(refreshToken);
  };
  static readonly logoutAllAuhtority = async (authorityId: string) => {
    await authorityTokenDeleteDao.deleteAuhtorityTokensByAuthority(authorityId);
  };
}
