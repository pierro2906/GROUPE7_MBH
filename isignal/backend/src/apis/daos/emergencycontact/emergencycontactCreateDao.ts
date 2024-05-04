import { EmergencyContactCreateDataType } from "@apis/schemas/emergencycontact/emergencycontactTypes";
import prisma from "@database/dbClient";
const createEmergencyContact = async (
  data: EmergencyContactCreateDataType
): Promise<any> => {
  return prisma.emergencyContact.create({
    data: {
      citizenId: data.citizenId,
      name: data.name,
      contact: data.contact,
      picture: data.picture,
    },
  });
};

export default {};
