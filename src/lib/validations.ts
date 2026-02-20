import { z } from "zod";

const email = z.string().email("Invalid email address");
const phone = z.string().min(7, "Phone number is required");
const requiredString = (field: string) => z.string().min(1, `${field} is required`);

export const quoteSchema = z.object({
  serviceLevel: requiredString("Service level"),
  pickupAddress: requiredString("Pickup address"),
  pickupCity: z.string().default("Colorado Springs"),
  dropoffAddress: requiredString("Drop-off address"),
  dropoffCity: z.string().default("Colorado Springs"),
  packageDescription: requiredString("Package description"),
  weight: z.string().optional(),
  specialInstructions: z.string().optional(),
  contactName: requiredString("Name"),
  contactEmail: email,
  contactPhone: phone,
  company: z.string().optional(),
});

export const portalRequestSchema = z.object({
  companyName: requiredString("Company name"),
  contactName: requiredString("Contact name"),
  email,
  phone: z.string().optional(),
  features: z.string().optional(),
  notes: z.string().optional(),
});

export const contactSchema = z.object({
  name: requiredString("Name"),
  email,
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: requiredString("Message"),
});

export const statRequestSchema = z.object({
  name: requiredString("Name"),
  phone,
  pickupAddress: requiredString("Pickup address"),
  dropoffAddress: requiredString("Drop-off address"),
  description: z.string().optional(),
});

export const applicationSchema = z.object({
  name: requiredString("Name"),
  email,
  phone,
  role: requiredString("Role"),
  resumeUrl: z.string().url().optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
export type PortalRequestInput = z.infer<typeof portalRequestSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type StatRequestInput = z.infer<typeof statRequestSchema>;
export type ApplicationInput = z.infer<typeof applicationSchema>;
