import { z } from "zod";
const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
});
export const GenerateCredentialSchema = z.object({
  userId: z.string(),
  bureauId: z.string(),
  roleId: z.number(),
});

export type GenerateCredentialInput = z.infer<typeof GenerateCredentialSchema>;

export type AuthorityCredentialsType = {
  name: string;
  contact: string;
  email: string | null;
  password: string;
  matricule: string;
  bureauId?: string | undefined;
};
