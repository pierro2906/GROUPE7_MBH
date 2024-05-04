import prisma from "@database/dbClient";

const getAuthorityTokenByAuthorityIdAndRefreshToken = async (
  authorityId: string,
  refreshToken: string
): Promise<{ id: string }[]> => {
  return await prisma.authorityToken.findMany({
    where: { authorityId, refreshToken },
  });
};
const getAuthorityTokenByFamilly = async (
  authorityId: string,
  tokenFamily: string
): Promise<{ id: string }[]> => {
  return await prisma.authorityToken.findMany({
    where: { authorityId, family: tokenFamily },
  });
};

export default {
  getAuthorityTokenByAuthorityIdAndRefreshToken,
  getAuthorityTokenByFamilly,
};
