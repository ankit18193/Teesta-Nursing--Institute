import { z } from "zod"

export const leadSchema=z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  // email: z.string().email().optional(),
  course: z.string().optional(),
  message: z.string().optional(),
})