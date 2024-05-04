import prisma from "@database/dbClient";
import { Permission } from "@prisma/client";

const getRoleByRoleName = async (name: string): Promise<any> => {
  return await prisma.role.findUniqueOrThrow({
    select: {
      name: true,
    },
    where: { name },
  });
};
const getRoleByRoleNameWithPermissions = async (name: string): Promise<any> => {
  return await prisma.role.findUniqueOrThrow({
    where: { name },
    include: {
      permissions: true,
    },
  });
};
const getRoleByRoleNameWithAuthorities = async (name: string): Promise<any> => {
  return await prisma.role.findUniqueOrThrow({
    where: { name },
    include: {
      authorities: true,
    },
  });
};
const getRoleByRoleNameWithAll = async (name: string): Promise<any> => {
  return await prisma.role.findUniqueOrThrow({
    where: { name },
    include: {
      authorities: true,
      permissions: true,
    },
  });
};

const getAllRoles = async (): Promise<any> => {
  return await prisma.role.findMany({
    select: {
      name: true,
    },
  });
};
const getAllRolesWithAuthorities = async (): Promise<any> => {
  return await prisma.role.findMany({
    include: {
      authorities: true,
    },
  });
};
const getAllRolesWithPermissions = async (): Promise<any> => {
  return await prisma.role.findMany({
    include: {
      permissions: true,
    },
  });
};
const getAllRolesWithAll = async (): Promise<any> => {
  return await prisma.role.findMany({
    include: {
      permissions: true,
      authorities: true,
    },
  });
};

export default {
  getRoleByRoleName,
  getRoleByRoleNameWithPermissions,
  getAllRoles,
  getAllRolesWithAll,
  getAllRolesWithAuthorities,
  getAllRolesWithPermissions,
  getRoleByRoleNameWithAll,
  getRoleByRoleNameWithAuthorities,
};
