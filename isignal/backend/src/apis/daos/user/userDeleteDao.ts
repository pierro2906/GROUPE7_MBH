import prisma from "@database/dbClient";

const deleteUserById = async (userId: string) => {
  return await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};
export default { deleteUserById };
