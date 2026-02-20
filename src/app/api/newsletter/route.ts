import { NextRequest } from "next/server";
import { successResponse, errorResponse } from "@/lib/api-response";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return errorResponse("Valid email address is required", 400);
    }

    // Attempt to add to email marketing platform
    const added = await addToMailingList(email);

    if (!added) {
      // Fallback: log the subscription for manual import
      console.log(`[Newsletter] New subscriber: ${email}`);
    }

    return successResponse({ subscribed: true }, 201);
  } catch (err) {
    console.error("Newsletter API error:", err);
    return errorResponse("Internal server error", 500);
  }
}

async function addToMailingList(email: string): Promise<boolean> {
  // HubSpot contact subscription (uses existing CRM integration)
  const apiKey = process.env.HUBSPOT_API_KEY;

  if (!apiKey) {
    console.log(`[Newsletter] No email platform configured, logging: ${email}`);
    return false;
  }

  try {
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        properties: {
          email,
          newsletter_subscriber: "true",
        },
      }),
    });

    if (response.ok || response.status === 409) {
      // 409 = contact exists, which is fine
      return true;
    }

    console.error(`[Newsletter] HubSpot error: ${response.status}`);
    return false;
  } catch (err) {
    console.error("[Newsletter] Subscription error:", err);
    return false;
  }
}
