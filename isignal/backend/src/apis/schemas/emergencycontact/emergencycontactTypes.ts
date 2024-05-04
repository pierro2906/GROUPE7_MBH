import { z } from "zod";

export type EmergencyContactCreateDataType = {
  citizenId: string;
  name: string;
  contact: string;
  picture?: string;
};
export const EmergencyContactSchema = z.object({
  citizenId: z.string(),
  name: z.string(),
  contact: z.string(),
  picture: z.string().optional(),
});
