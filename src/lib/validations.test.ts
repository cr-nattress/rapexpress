import { describe, it, expect } from "vitest";
import {
  quoteSchema,
  portalRequestSchema,
  contactSchema,
  statRequestSchema,
  applicationSchema,
} from "./validations";

describe("quoteSchema", () => {
  const validQuote = {
    serviceLevel: "same-day",
    pickupAddress: "123 Main St",
    pickupCity: "Colorado Springs",
    dropoffAddress: "456 Oak Ave",
    dropoffCity: "Denver",
    packageDescription: "Legal documents",
    contactName: "Jane Doe",
    contactEmail: "jane@example.com",
    contactPhone: "7195551234",
  };

  it("accepts valid quote data", () => {
    const result = quoteSchema.safeParse(validQuote);
    expect(result.success).toBe(true);
  });

  it("rejects missing service level", () => {
    const result = quoteSchema.safeParse({ ...validQuote, serviceLevel: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = quoteSchema.safeParse({ ...validQuote, contactEmail: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("allows optional fields to be omitted", () => {
    const result = quoteSchema.safeParse(validQuote);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.weight).toBeUndefined();
      expect(result.data.company).toBeUndefined();
    }
  });

  it("defaults pickup city to Colorado Springs", () => {
    const { pickupCity: _, ...withoutCity } = validQuote;
    const result = quoteSchema.safeParse(withoutCity);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.pickupCity).toBe("Colorado Springs");
    }
  });
});

describe("portalRequestSchema", () => {
  it("accepts valid portal request", () => {
    const result = portalRequestSchema.safeParse({
      companyName: "Acme Corp",
      contactName: "John Smith",
      email: "john@acme.com",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing company name", () => {
    const result = portalRequestSchema.safeParse({
      companyName: "",
      contactName: "John Smith",
      email: "john@acme.com",
    });
    expect(result.success).toBe(false);
  });
});

describe("contactSchema", () => {
  it("accepts valid contact submission", () => {
    const result = contactSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I need a quote for daily deliveries.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty message", () => {
    const result = contactSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "",
    });
    expect(result.success).toBe(false);
  });
});

describe("statRequestSchema", () => {
  it("accepts valid STAT request", () => {
    const result = statRequestSchema.safeParse({
      name: "Bob Urgent",
      phone: "7195559999",
      pickupAddress: "100 Hospital Dr",
      dropoffAddress: "200 Lab Way",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing phone", () => {
    const result = statRequestSchema.safeParse({
      name: "Bob Urgent",
      phone: "",
      pickupAddress: "100 Hospital Dr",
      dropoffAddress: "200 Lab Way",
    });
    expect(result.success).toBe(false);
  });
});

describe("applicationSchema", () => {
  it("accepts valid application", () => {
    const result = applicationSchema.safeParse({
      name: "Tom Driver",
      email: "tom@example.com",
      phone: "7195551111",
      role: "Courier Driver (Full-Time)",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid resume URL", () => {
    const result = applicationSchema.safeParse({
      name: "Tom Driver",
      email: "tom@example.com",
      phone: "7195551111",
      role: "Courier Driver (Full-Time)",
      resumeUrl: "not-a-url",
    });
    expect(result.success).toBe(false);
  });
});
