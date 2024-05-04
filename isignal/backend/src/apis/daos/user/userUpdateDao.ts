import { UserUpdateDataType } from "@apis/schemas/user/userTypes";
import prisma from "@database/dbClient";
const updateUser = async (
  id: string,
  data: UserUpdateDataType
): Promise<any> => {
  const updateData: any = {};

  if (data.name !== undefined && data.name !== null) {
    updateData.name = data.name;
  }
  if (data.contact !== undefined && data.contact !== null) {
    updateData.contact = data.contact;
  }
  if (data.email !== undefined && data.email !== null) {
    updateData.email = data.email;
  }
  if (data.birthdate !== undefined && data.birthdate !== null) {
    updateData.birthdate = data.birthdate;
  }
  if (data.address !== undefined && data.address !== null) {
    updateData.address = data.address;
  }
  if (data.blood_group !== undefined && data.blood_group !== null) {
    updateData.blood_group = data.blood_group;
  }

  return await prisma.user.update({
    where: { id },
    data: updateData,
  });
};

export default { updateUser };
