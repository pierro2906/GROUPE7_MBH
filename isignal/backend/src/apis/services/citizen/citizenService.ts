import citizenCreateDao from "@apis/daos/citizen/citizenCreateDao";
import { CitizenCreateDataType } from "@apis/schemas/citizen/citizenTypes";
import citizenValidators from "@apis/schemas/citizen/citizenValidators";

export default class CitizenService {
  // write your static methods here
  public static readonly createCitizen = async (
    data: CitizenCreateDataType
  ) => {
    try {
      const cleanData = citizenValidators.validateCitizenCreation(data);
      return await citizenCreateDao.createCitizen(cleanData);
    } catch (error) {
      throw new Error("Citizen creation error" + (error as any).message);
    }
  };
}
