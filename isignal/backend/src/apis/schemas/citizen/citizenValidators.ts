import { CitizenCreateDataType, CitizenCreateDataSchema } from "./citizenTypes";

const validateCitizenCreation = (
  data: CitizenCreateDataType
): CitizenCreateDataType => {
  try {
    return CitizenCreateDataSchema.parse(data);
  } catch (error) {
    throw new Error("Error Citizen create validation");
  }
};
export default { validateCitizenCreation };
