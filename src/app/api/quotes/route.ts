import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { quoteSchema } from "@/lib/validations";
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/api-response";
import { sendNotification, formatQuoteNotification } from "@/lib/notifications";
import { pushQuoteToCrm } from "@/lib/crm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = quoteSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error);
    }

    const data = result.data;

    const { data: quote, error } = await getSupabase()
      .from("quotes")
      .insert({
        service_level: data.serviceLevel,
        pickup_address: data.pickupAddress,
        pickup_city: data.pickupCity,
        dropoff_address: data.dropoffAddress,
        dropoff_city: data.dropoffCity,
        package_description: data.packageDescription,
        weight: data.weight || null,
        special_instructions: data.specialInstructions || null,
        contact_name: data.contactName,
        contact_email: data.contactEmail,
        contact_phone: data.contactPhone,
        company: data.company || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return errorResponse("Failed to save quote request", 500);
    }

    await sendNotification(formatQuoteNotification(data));
    await pushQuoteToCrm(data);

    return successResponse({ id: quote.id }, 201);
  } catch (err) {
    console.error("Quote API error:", err);
    return errorResponse("Internal server error", 500);
  }
}
