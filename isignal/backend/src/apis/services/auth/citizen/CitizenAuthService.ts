import userCreateDao from "@apis/daos/user/userCreateDao";
import userReadDao from "@apis/daos/user/userReadDao";
import {
  CitizenRegisterDataType,
  OtpVerificationType,
} from "@apis/schemas/auth/citizen/citizenAuthType";
import citizenAuthValidators from "@apis/schemas/auth/citizen/citizenAuthValidators";
import CitizenService from "@apis/services/citizen/citizenService";
import config from "@config/app";
import {
  getDateToInterval,
  parseDurationToMilliseconds,
} from "@utils/date/dateUtil";
import { generateHash, generateOtp } from "@utils/otp/otpGen";
import { hashPassword } from "@utils/string/passwordUtil";
import { log } from "console";
import jwt from "jsonwebtoken";

const env = config.jwt;

const JWT_ACCESS_TOKEN_SECRET = config.jwt.aceessToken;
const JWT_MOBILE_EXPIRED_IN = config.jwt.mobileExpiredIn;
const OTP_EXPIREDIN = config.otp.expiredIn;
const OTP_HASH_SECRET = config.otp.hashSecret;
export default class CitizenAuthService {
  public static readonly registerCitizen = async (
    data: CitizenRegisterDataType
  ) => {
    try {
      // TODO: - validate the contact field
      const cleanData = citizenAuthValidators.validateCitizenRegister(data);
      const userExists = await userReadDao.getUserByContact(cleanData.contact);
      if (userExists) {
        throw new Error("Contact already registered");
      }
      cleanData.password = await hashPassword(cleanData.password);
      const ctzUser = await userCreateDao.createUser(cleanData);
      const expires = getDateToInterval(
        parseDurationToMilliseconds(config.otp.expiredIn)
      );
      log(config.otp.expiredIn);
      log(expires);
      const otpCode = generateOtp();
      const otpHashCode = generateHash(cleanData.contact, otpCode, expires);
      await CitizenService.createCitizen({
        userId: ctzUser.id,
        otp_code: otpCode,
        otp_expiration_date: expires,
        otp_hash_code: otpHashCode,
      });
      return { otpCode, otpHashCode };
    } catch (error) {
      throw new Error("Citizen registration Error " + (error as any).message);
    }
  };
  public static readonly verifyOTP = async (data: OtpVerificationType) => {
    try {
      // TODO: - validate the contact field
      // log(data);
      const cleanData = data;
      const ctzUser = await userReadDao.getUserByContact(cleanData.phone);
      // log(ctzUser);
      const citizen = ctzUser.citizen;

      if (
        citizen.otp_hash_code == data.hash &&
        citizen.otp_code == data.otp_code &&
        citizen.otp_expiration_date > new Date()
      ) {
        const accessToken = jwt.sign(
          { citizenId: citizen.id },
          JWT_ACCESS_TOKEN_SECRET,
          {
            expiresIn: JWT_MOBILE_EXPIRED_IN,
          }
        );
        const payload = {
          citizenId: citizen.id,
          name: ctzUser.name,
          contact: ctzUser.contact,
          email: ctzUser.email,
          blood_groupe: ctzUser.blood_groupe,
          address: ctzUser.address,
          birthdata: ctzUser.birthdate,
          citizen,
          accessToken,
        };
        return payload;
      } else {
        log(citizen.otp_code == data.otp_code);
        throw new Error("Otp validation Error");
      }
    } catch (error) {
      throw new Error("Otp verification Error " + (error as any).message);
    }
  };
  public static readonly loginCitizen = async (data: { contact: string }) => {
    try {
      // TODO: - validate the contact field
      const cleanContact = data.contact;
      log(cleanContact);
      const userExists = await userReadDao.getUserByContact(cleanContact);
      if (!userExists) {
        throw new Error("Contact not registered");
      }
      const expires = getDateToInterval(
        parseDurationToMilliseconds(config.otp.expiredIn)
      );
      const otpCode = generateOtp();
      const otpHashCode = generateHash(cleanContact, otpCode, expires);

      return { otpCode, otpHashCode };
      // TODO: -      send Mail
    } catch (error) {
      throw new Error("Citizen Login Error " + (error as any).message);
    }
  };
}
