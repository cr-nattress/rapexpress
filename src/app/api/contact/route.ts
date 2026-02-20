import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { contactSchema } from "@/lib/validations";
import { successResponse, errorResponse, validationErrorResponse } from "@/lib/api-response";
import { sendNotification, formatContactNotification } from "@/lib/notifications";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error);
    }

    const data = result.data;

    const { data: submission, error } = await getSupabase()
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject || null,
        message: data.message,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return errorResponse("Failed to save contact submission", 500);
    }

    await sendNotification(formatContactNotification(data));

    return successResponse({ id: submission.id }, 201);
  } catch (err) {
    console.error("Contact API error:", err);
    return errorResponse("Internal server error", 500);
  }
}
