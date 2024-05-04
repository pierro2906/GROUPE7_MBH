import userCreateDao from "@apis/daos/user/userCreateDao";
import userUpdateDao from "@apis/daos/user/userUpdateDao";
import {
  UserCreateDataType,
  UserUpdateDataType,
} from "@apis/schemas/user/userTypes";
import userValidators from "@apis/schemas/user/userValidators";
import { hashPassword } from "@utils/string/passwordUtil";
export default class UserService {
  // write your static methods here
  public static readonly createUser = async (
    data: UserCreateDataType
  ): Promise<any> => {
    try {
      const cleanData = userValidators.validateUserCreation(data);
      cleanData.password = cleanData.password
        ? await hashPassword(cleanData.password)
        : undefined;
      return await userCreateDao.createUser(cleanData);
    } catch (error) {
      throw new Error("User creation error" + (error as any).message);
    }
  };
  public static readonly updateUser = async (
    userId: string,
    data: UserUpdateDataType
  ): Promise<any> => {
    try {
      const cleanData = userValidators.validateUserUpdate(data);
      return await userUpdateDao.updateUser(userId, cleanData);
    } catch (error) {
      throw new Error("User update error" + (error as any).message);
    }
  };
}
