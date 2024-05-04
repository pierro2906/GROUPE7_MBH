import prisma from "@database/dbClient";

const getAuthorityByMatricule = async function (
  matricule: string
): Promise<any | null> {
  return await prisma.authority.findUniqueOrThrow({
    where: {
      matricule,
    },
    include: {
      role: {
        include: {
          permissions: true,
        },
      },
      user: true,
      bureau: true,
    },
    // select: { password: false, id: true, roleId: true, bureauId: true },
  });
};
const getAuthorityById = async function (id: string): Promise<any | null> {
  return await prisma.authority.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      role: {
        include: {
          permissions: true,
        },
      },
      bureau: true,
      user: true,
    },
    // select: { password: false, id: true, roleId: true, bureauId: true },
  });
};

export default { getAuthorityByMatricule, getAuthorityById };
