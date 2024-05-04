import prisma from "@database/dbClient";
import { Permission } from "@prisma/client";

const deleteRoleByName = async (name: string): Promise<any> => {
  return prisma.role.delete({
    where: { name },
  });
};
const deleteAuthorityWithRole = async (name: string): Promise<any> => {
  return prisma.role.update({
    where: { name },
    data: {
      authorities: {
        deleteMany: {},
      },
    },
  });
};

export default { deleteAuthorityWithRole, deleteRoleByName };
