import prisma from "@database/dbClient";

const getUserById = async (userId: string): Promise<any> => {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
};
const getUserByContact = async (contact: string): Promise<any> => {
  return await prisma.user.findUnique({
    where: {
      contact,
    },
    include: {
      citizen: true,
    },
  });
};
export default { getUserById, getUserByContact };
