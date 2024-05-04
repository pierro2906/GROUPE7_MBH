import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
// MEs modules
import {
  JwtAccessPayloadType,
  RefreshTokenPayloadType,
} from "@apis/schemas/auth/authority/authorityAuthTypes";
import config from "@config/app";

import {
  getDateToInterval,
  parseDurationToMilliseconds,
} from "@utils/date/dateUtil";
import autorityTokenReadDao from "@apis/daos/authorityToken/authorityTokenReadDao";
import auhtorityTokenDeleteDao from "@apis/daos/authorityToken/authorityTokenDeleteDao";
import authorityReadDao from "@apis/daos/authority/authorityReadDao";
import authorityTokenCreateDao from "@apis/daos/authorityToken/authorityTokenCreateDao";

import { log } from "console";

const env = config.jwt;

const accessTokenSecret = env.aceessToken; // Change this to your secret key
const refreshTokenSecret = env.refreshToken; // Change this to your refresh token secret
const expiresIn = env.expiredIn;
const refreshExpiresIn = env.refreshExpiresIn;

export default class AuthorityTokenService {
  static readonly generateToken = (payload: JwtAccessPayloadType): string => {
    return jwt.sign(payload, accessTokenSecret, { expiresIn });
  };

  static readonly generateRefreshToken = async (
    payload: RefreshTokenPayloadType,
    browserInfo?: string
  ): Promise<string> => {
    try {
      if (!payload.tokenFamily) {
        payload.tokenFamily = uuidv4();
      }
      const authority = await authorityReadDao.getAuthorityById(
        payload.authorityId
      );
      const refreshToken = jwt.sign({ ...payload }, refreshTokenSecret, {
        expiresIn: refreshExpiresIn,
      });

      const expiresAt = getDateToInterval(
        parseDurationToMilliseconds(refreshExpiresIn)
      );
      await authorityTokenCreateDao.createAuhorityToken({
        authorityId: authority.id,
        refreshToken,
        family: payload.tokenFamily,
        browserInfo,
        expiresAt,
      });

      return refreshToken;
    } catch (error) {
      throw new Error("Unautorised");
    }
  };

  static readonly verifyToken = (token: string): any => {
    return jwt.verify(token, accessTokenSecret);
  };

  static readonly verifyRefreshToken = async (
    token: string
  ): Promise<RefreshTokenPayloadType> => {
    try {
      let refreshTokenContent: RefreshTokenPayloadType;

      try {
        refreshTokenContent = jwt.verify(
          token,
          refreshTokenSecret
        ) as RefreshTokenPayloadType;
      } catch (error) {
        throw new Error("Invalid refresh token");
      }

      await AuthorityTokenService.validateRefreshToken(
        token,
        refreshTokenContent
      );
      return refreshTokenContent;
    } catch (error) {
      throw new Error("Error token verification" + (error as any).message);
    }
  };

  /** Checks if the refresh token is valid */
  static readonly validateRefreshToken = async (
    refreshToken: string,
    refreshTokenContent: RefreshTokenPayloadType
  ): Promise<boolean> => {
    try {
      const authorityToken =
        await autorityTokenReadDao.getAuthorityTokenByAuthorityIdAndRefreshToken(
          refreshTokenContent.authorityId,
          refreshToken
        );

      const isRefreshTokenValid = authorityToken.length > 0;

      if (!isRefreshTokenValid) {
        await auhtorityTokenDeleteDao.deleteAuhtorityTokenFamily(
          refreshTokenContent.authorityId,
          refreshTokenContent.tokenFamily as string
        );

        throw new Error("Invalid refresh token");
      }

      return true;
    } catch (error) {
      throw new Error("Error token validation" + (error as any).message);
    }
  };

  static readonly getRefreshToken = (token: string) => {
    return jwt.verify(token, refreshTokenSecret);
  };
  static readonly rotateRefreshToken = async (
    refreshToken: string,
    payload: RefreshTokenPayloadType,
    browserInfo?: string
  ): Promise<string> => {
    try {
      await auhtorityTokenDeleteDao.deleteAuhtorityTokensByToken(refreshToken);

      const newRefreshToken = await AuthorityTokenService.generateRefreshToken(
        payload,
        browserInfo
      );
      log(newRefreshToken, "new refresh from rotateRefresh");
      return newRefreshToken;
    } catch (error) {
      throw new Error("Error rotation" + (error as any).message);
    }
  };
}
