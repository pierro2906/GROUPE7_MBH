import { Role } from "@prisma/client";
import { z } from "zod";

export const loginSchema = z.object({
  matricule: z.string(),
  password: z.string(),
});
export type LoginInput = z.infer<typeof loginSchema>;

export type JwtAccessPayloadType = {
  authorityId: string;
  role: Role;
};

export type RefreshTokenPayloadType = {
  authorityId: string;
  tokenFamily?: string;
};

export const PermissionSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const RoleSchema = z.object({
  id: z.number(),
  name: z.string(),
  permissions: z.array(PermissionSchema),
});
