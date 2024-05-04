import { CreateRefreshTokenType } from "@apis/schemas/authorityToken/authorityTokenTypes";
import prisma from "@database/dbClient";

const createAuhorityToken = async ({
  authorityId,
  refreshToken,
  family,
  browserInfo,
  expiresAt,
}: CreateRefreshTokenType): Promise<string> => {
  //   const expiresInMilliseconds = parseDurationToMilliseconds(refreshExpiresIn);
 const authorityToken = await prisma.authorityToken.create({

    data: {
      authorityId,
      refreshToken,
      family,
      expiresAt,
      browserInfo,
    },
  });
  return authorityToken.refreshToken;
};
export default { createAuhorityToken };
