import {
  UserCreateDataType,
  UserCreateDataSchema,
  UserUpdateDataType,
  UserUpdateDataSchema,
} from "./userTypes";

const validateUserCreation = (data: UserCreateDataType): UserCreateDataType => {
  try {
    const validatedData = UserCreateDataSchema.parse(data);

    return validatedData;
  } catch (error) {
    throw new Error(`Validation failed: ${(error as any).message}`);
  }
};
const validateUserUpdate = (data: UserUpdateDataType): UserUpdateDataType => {
  try {
    return UserUpdateDataSchema.parse(data);
  } catch (error) {
    throw new Error("Error User update validation");
  }
};
export default { validateUserCreation, validateUserUpdate };
