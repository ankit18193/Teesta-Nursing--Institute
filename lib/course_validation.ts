import { z } from "zod"

export const courseSchema=z.object({
  title: z.string().min(1, "Title is required"),
  duration: z.string().optional(),
  description: z.string().optional(),
  eligibility: z.string().optional(),
})