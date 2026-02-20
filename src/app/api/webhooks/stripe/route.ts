import { NextRequest } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { verifyWebhookSignature } from "@/lib/payments";
import { errorResponse } from "@/lib/api-response";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return errorResponse("Missing stripe-signature header", 400);
    }

    const event = await verifyWebhookSignature(body, signature);
    if (!event) {
      return errorResponse("Invalid webhook signature", 400);
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const quoteId = session.metadata?.quote_id;

        if (quoteId && session.payment_status === "paid") {
          // Update quote status to accepted
          await getSupabase()
            .from("quotes")
            .update({ status: "accepted" })
            .eq("id", quoteId);

          // Create a job from the accepted quote
          await getSupabase().from("jobs").insert({
            quote_id: quoteId,
            status: "scheduled",
          });

          console.log(`[Payments] Quote ${quoteId} paid, job created`);
        }
        break;
      }

      case "checkout.session.expired": {
        const session = event.data.object;
        const quoteId = session.metadata?.quote_id;

        if (quoteId) {
          console.log(`[Payments] Checkout expired for quote ${quoteId}`);
        }
        break;
      }

      default:
        console.log(`[Payments] Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return errorResponse("Webhook processing failed", 500);
  }
}
