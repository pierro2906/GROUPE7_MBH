import { z } from "zod";
export type CitizenCreateDataType = {
  userId: string;
  occupation?: string;
  otp_code?: string;
  otp_hash_code?: string;
  otp_expiration_date?: Date;
};
export const CitizenCreateDataSchema = z.object({
  userId: z.string(),
  occupation: z.string().optional(),
  otp_code: z.string().optional(),
  otp_hash_code: z.string().optional(),
  otp_expiration_date: z.date().optional(),
});
