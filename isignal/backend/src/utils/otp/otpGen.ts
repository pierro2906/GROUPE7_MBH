import otpGenerator from "otp-generator";
import config from "@config/app";

import crypto from "crypto";
const options = {
  digits: true,
  lowerCaseAlphabets: false,
  upperCaseAlphabets: false,
  specialChars: false,
};
const length = 5;

export const generateOtp = (): string => {
  return otpGenerator.generate(length, options);
};

export const verifyOtpHash = (hash1: string, hash2: string) => {
  return hash1 === hash2;
};

export const generateHash = (phone: string, otp: string, expires: Date) => {
  const data = `${phone}.${otp}.${expires}`;
  return crypto
    .createHmac("sha256", config.otp.hashSecret)
    .update(data)
    .digest("hex");
};
