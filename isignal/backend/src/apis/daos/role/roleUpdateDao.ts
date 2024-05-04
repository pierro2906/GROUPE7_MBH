// import { CreateRefreshTokenType } from "@apis/schemas/authorityToken/authorityTokenTypes";
// import prisma from "@database/dbClient";

// const updateOrInsertAuhorityToken = async ({
//   authorityId,
//   refreshToken,
//   family,
//   browserInfo,
//   expiresInMilliseconds,
// }: CreateRefreshTokenType): Promise<void> => {
//   //   const expiresInMilliseconds = parseDurationToMilliseconds(refreshExpiresIn);
//   await prisma.authorityToken.upsert({
//     where: { family },
//     update: {
//       refreshToken,
//       expiresAt: new Date(Date.now() + expiresInMilliseconds),
//       browserInfo,
//     },
//     create: {
//       authorityId,
//       refreshToken,
//       family,
//       expiresAt: new Date(Date.now() + expiresInMilliseconds),
//       browserInfo,
//     },
//   });
// };
// export default { updateOrInsertAuhorityToken };
