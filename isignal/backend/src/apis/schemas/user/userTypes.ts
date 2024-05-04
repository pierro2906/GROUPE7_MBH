import { z } from "zod";

//Types
export type UserCreateDataType = {
  name: string;
  contact: string;
  email?: string;
  birthdate?: Date;
  address?: string;
  password?: string;
  blood_group?: "A" | "A+" | "A-" | "B" | "B+" | "B-" | "AB" | "AB+" | "AB-";
};
export type UserUpdateDataType = {
  name?: string;
  contact?: string;
  email?: string;
  birthdate?: Date;
  address?: string;
  password?: string;
  blood_group?: "A" | "A+" | "A-" | "B" | "B+" | "B-" | "AB" | "AB+" | "AB-";
};

// Définir le validateur pour UserCreateDataType
export const UserCreateDataSchema = z.object({
  name: z.string(),
  contact: z.string(),
  email: z.string().optional(),
  birthdate: z.date().optional(),
  address: z.string().optional(),
  password: z.string().optional(),
  blood_group: z
    .enum(["A", "A+", "A-", "B", "B+", "B-", "AB", "AB+", "AB-"])
    .optional(),
});

// Définir le validateur pour UserUpdateDataType
export const UserUpdateDataSchema = z.object({
  name: z.string().optional(),
  contact: z.string().optional(),
  email: z.string().optional(),
  birthdate: z.date().optional(),
  address: z.string().optional(),
  blood_group: z
    .enum(["A", "A+", "A-", "B", "B+", "B-", "AB", "AB+", "AB-"])
    .optional(),
});
