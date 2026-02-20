import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { statRequestSchema } from "@/lib/validations";
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/api-response";
import { sendNotification, formatStatNotification } from "@/lib/notifications";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = statRequestSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error);
    }

    const data = result.data;

    const { data: statReq, error } = await getSupabase()
      .from("stat_requests")
      .insert({
        name: data.name,
        phone: data.phone,
        pickup_address: data.pickupAddress,
        dropoff_address: data.dropoffAddress,
        description: data.description || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return errorResponse("Failed to save STAT request", 500);
    }

    // STAT requests are urgent — trigger immediate notification
    await sendNotification(formatStatNotification(data));

    return successResponse({ id: statReq.id }, 201);
  } catch (err) {
    console.error("STAT request API error:", err);
    return errorResponse("Internal server error", 500);
  }
}
