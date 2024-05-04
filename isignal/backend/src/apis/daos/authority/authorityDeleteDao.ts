import prisma from "@database/dbClient";

const deleteAuthorityWithMatricule = async function (
  matricule: string
): Promise<void> {
  await prisma.authority.delete({
    where: {
      matricule,
    },
  });
};

export default { deleteAuthorityWithMatricule };
