import { z } from "zod";

export type CitizenRegisterDataType = {
  name: string;
  password: string;
  passwordConfirmation: string;
  email?: string;
  contact: string;
};
export type OtpVerificationType = {
  hash: string;
  phone: string;
  otp_code: string;
};
export const CitizenRegisterSchema = z.object({
  name: z.string(),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),

  passwordConfirmation: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),

  email: z.string().email().optional(),
  contact: z.string(),
});
