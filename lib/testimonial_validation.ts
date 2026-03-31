import { z } from "zod"

export const testimonialSchema=z.object({
  name: z.string().min(1, "Name is required"),
  message: z.string().min(1, "Message is required"),
  course: z.string().optional(),
  image: z.string().optional(),
  imageId: z.string().optional(),
})