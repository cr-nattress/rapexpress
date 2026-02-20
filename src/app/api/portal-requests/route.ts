import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { portalRequestSchema } from "@/lib/validations";
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/api-response";
import { sendNotification, formatPortalNotification } from "@/lib/notifications";
import { pushPortalRequestToCrm } from "@/lib/crm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = portalRequestSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error);
    }

    const data = result.data;

    const { data: portalReq, error } = await getSupabase()
      .from("portal_requests")
      .insert({
        company_name: data.companyName,
        contact_name: data.contactName,
        email: data.email,
        phone: data.phone || null,
        desired_features: data.features || null,
        notes: data.notes || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return errorResponse("Failed to save portal request", 500);
    }

    await sendNotification(formatPortalNotification(data));
    await pushPortalRequestToCrm(data);

    return successResponse({ id: portalReq.id }, 201);
  } catch (err) {
    console.error("Portal request API error:", err);
    return errorResponse("Internal server error", 500);
  }
}
