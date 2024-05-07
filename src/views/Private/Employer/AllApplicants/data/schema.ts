import { z } from "zod";
export const jobSchema = z.object({
  _id: z.string(),
  id: z.string(),
  title: z.string(),
  type: z.string(),
  location: z.string(),
  category: z.string(),
  description: z.string(),
  experience: z.number(),
  isUrgent: z.boolean(),
  salary: z.number(),
  technology: z.array(z.string()),
  employer: z.any(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Job = z.infer<typeof jobSchema>;
