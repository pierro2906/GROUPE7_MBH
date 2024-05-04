import prisma from "@database/dbClient";
import { Role } from "@prisma/client";

const updateMaticuleAndPwdOrInsertAuthority = async (
  userId: string,
  password: string,
  bureauId: string,
  roleId: number,
  matricule: string
): Promise<{ matricule: string; bureauId: string } | null> => {
  return await prisma.authority.upsert({
    where: { userId },
    create: {
      matricule,
      password,
      bureauId,
      userId,
      roleId,
    },
    update: { matricule, password },
    select: { matricule: true, bureauId: true },
  });
};

export default { updateMaticuleAndPwdOrInsertAuthority };
