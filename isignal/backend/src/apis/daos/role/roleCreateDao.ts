import prisma from "@database/dbClient";
import { Permission } from "@prisma/client";

const createRoleWithNameOnly = async (name: string): Promise<any> => {
  return prisma.role.create({ data: { name } });
};

const createRoleWithPermissions = async (
  name: string,
  permissions: Permission[]
): Promise<any> => {
  return prisma.role.create({
    data: { name, permissions: { connect: permissions } },
  });
};

export default { createRoleWithNameOnly, createRoleWithPermissions };
