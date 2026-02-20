import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { applicationSchema } from "@/lib/validations";
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/api-response";
import { sendNotification, formatApplicationNotification } from "@/lib/notifications";
import { pushApplicationToCrm } from "@/lib/crm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = applicationSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error);
    }

    const data = result.data;

    const { data: application, error } = await getSupabase()
      .from("applications")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role,
        resume_url: data.resumeUrl || null,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return errorResponse("Failed to save application", 500);
    }

    await sendNotification(formatApplicationNotification(data));
    await pushApplicationToCrm(data);

    return successResponse({ id: application.id }, 201);
  } catch (err) {
    console.error("Application API error:", err);
    return errorResponse("Internal server error", 500);
  }
}
