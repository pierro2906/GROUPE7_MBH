import {
  validateMoovPhoneNumber,
  validateTogocomPhoneNumber,
} from "@utils/string/stringUtil";
import {
  CitizenRegisterDataType,
  CitizenRegisterSchema,
} from "./citizenAuthType";

const validateCitizenRegister = (
  data: CitizenRegisterDataType
): CitizenRegisterDataType => {
  try {
    const isValidNumber =
      validateMoovPhoneNumber(data.contact) ||
      validateTogocomPhoneNumber(data.contact);
    if (data.password === data.passwordConfirmation && isValidNumber) {
      return CitizenRegisterSchema.parse(data);
    } else {
      throw new Error(
        "Citizen registration error, the password confirmation and the password must be same"
      );
    }
  } catch (error) {
    throw new Error("Citizen registration error" + (error as any).message);
  }
};

export default { validateCitizenRegister };
