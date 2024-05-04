import { z } from "zod";

export type IncidentCreateDataType = {
  title?: string;
  description?: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  sourceId: string;
  categoryId: string;
};

export const IncidentCreateDataSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  address: z.string().optional(),
  categoryId: z.string(),
  sourceId: z.string(),
});
