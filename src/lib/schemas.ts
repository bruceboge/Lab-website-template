import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(3).max(160),
  message: z.string().trim().min(10).max(5000),
  website: z.string().optional(),
});

export const eventRsvpSchema = z.object({
  eventSlug: z.string().min(1).max(100),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
});
