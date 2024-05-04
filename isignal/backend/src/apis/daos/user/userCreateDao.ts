import { UserCreateDataType } from "@apis/schemas/user/userTypes";
import prisma from "@database/dbClient";
// TODO: ajouter les attributs optionneles restants
const createUser = async (data: UserCreateDataType): Promise<any> => {
  return await prisma.user.create({
    data: {
      name: data.name,
      contact: data.contact,
      password: data.password,
      address: data.address,
      birthdate: data.birthdate,
    },
  });
};

export default { createUser };
