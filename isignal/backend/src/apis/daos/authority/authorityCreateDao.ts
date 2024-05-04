import prisma from "@database/dbClient";

const createAuthority = async (data: {
  matricule: string;
  password: string;
  userId: string;
  bureauId: string;
}): Promise<any> => {
  return await prisma.authority.create({
    data: {
      ...data,
      roleId: 1,
    },
    select: {
      password: false,
    },
  });
};

export default { createAuthority };
