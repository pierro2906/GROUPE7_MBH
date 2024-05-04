import { CitizenCreateDataType } from "@apis/schemas/citizen/citizenTypes";
import prisma from "@database/dbClient";
import { log } from "console";

const createCitizen = async (data: CitizenCreateDataType): Promise<any> => {
  log(data);
  return await prisma.citizen.create({
    data: {
      userId: data.userId,
      occupation: data.occupation,
      otp_code: data.otp_code,
      otp_hash_code: data.otp_hash_code,
      otp_expiration_date: data.otp_expiration_date,
    },
    include: {
      emergencyContacts: true,
      source: true,
    },
  });
};

export default { createCitizen };
