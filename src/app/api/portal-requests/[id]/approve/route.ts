import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { successResponse, errorResponse } from "@/lib/api-response";
import { startOnboarding } from "@/lib/portal-onboarding";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Fetch the portal request
    const { data: portalReq, error } = await getSupabase()
      .from("portal_requests")
      .select()
      .eq("id", id)
      .single();

    if (error || !portalReq) {
      return errorResponse("Portal request not found", 404);
    }

    if (portalReq.status !== "pending") {
      return errorResponse(`Request already ${portalReq.status}`, 400);
    }

    // Start the onboarding workflow
    await startOnboarding({
      portalRequestId: id,
      companyName: portalReq.company_name,
      contactName: portalReq.contact_name,
      email: portalReq.email,
    });

    return successResponse({ id, status: "onboarding" });
  } catch (err) {
    console.error("Portal approve error:", err);
    return errorResponse("Internal server error", 500);
  }
}
