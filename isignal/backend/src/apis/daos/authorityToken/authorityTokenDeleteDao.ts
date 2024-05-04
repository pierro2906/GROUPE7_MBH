import prisma from "@database/dbClient";

const deleteAuhtorityTokenFamily = async (
  authorityId: string,
  tokenFamily: string
): Promise<void> => {
  await prisma.authorityToken.deleteMany({
    where: { authorityId, family: tokenFamily },
  });
};

const deleteAuhtorityTokensByToken = async (
  refreshToken: string
): Promise<void> => {
  await prisma.authorityToken.deleteMany({
    where: { refreshToken },
  });
};
const deleteAuhtorityTokensByAuthority = async (
  authorityId: string
): Promise<void> => {
  await prisma.authorityToken.deleteMany({
    where: { authorityId },
  });
};

export default {
  deleteAuhtorityTokenFamily,
  deleteAuhtorityTokensByToken,
  deleteAuhtorityTokensByAuthority,
};
