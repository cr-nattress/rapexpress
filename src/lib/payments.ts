/**
 * Stripe Payment Integration
 *
 * Creates payment links for accepted quotes and handles webhook events.
 * Falls back to console logging when STRIPE_SECRET_KEY is not configured.
 */

interface CreatePaymentLinkOptions {
  quoteId: string;
  amount: number; // in cents
  description: string;
  customerEmail: string;
  customerName: string;
}

interface PaymentLinkResult {
  url: string;
  id: string;
}

export async function createPaymentLink(
  options: CreatePaymentLinkOptions
): Promise<PaymentLinkResult | null> {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    console.log(
      `[Payments] Would create payment link: $${(options.amount / 100).toFixed(2)} for quote ${options.quoteId}`
    );
    return null;
  }

  try {
    // Create a Checkout Session via the Stripe API
    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        mode: "payment",
        "line_items[0][price_data][currency]": "usd",
        "line_items[0][price_data][unit_amount]": options.amount.toString(),
        "line_items[0][price_data][product_data][name]": options.description,
        "line_items[0][quantity]": "1",
        customer_email: options.customerEmail,
        "metadata[quote_id]": options.quoteId,
        "metadata[customer_name]": options.customerName,
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/payment/cancelled`,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`[Payments] Stripe error: ${response.status}`, error);
      return null;
    }

    const session = await response.json();
    return { url: session.url, id: session.id };
  } catch (err) {
    console.error("[Payments] Payment link creation error:", err);
    return null;
  }
}

/**
 * Verify a Stripe webhook signature.
 * Returns the parsed event payload, or null if verification fails.
 */
export async function verifyWebhookSignature(
  body: string,
  signature: string
): Promise<StripeWebhookEvent | null> {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secret) {
    console.error("[Payments] STRIPE_WEBHOOK_SECRET not configured");
    return null;
  }

  try {
    // Compute expected signature using HMAC-SHA256
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    // Parse the Stripe signature header
    const elements = signature.split(",");
    const timestampStr = elements.find((e) => e.startsWith("t="))?.slice(2);
    const sig = elements.find((e) => e.startsWith("v1="))?.slice(3);

    if (!timestampStr || !sig) {
      console.error("[Payments] Invalid webhook signature format");
      return null;
    }

    const payload = `${timestampStr}.${body}`;
    const signatureBytes = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
    const expectedSig = Array.from(new Uint8Array(signatureBytes))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    if (expectedSig !== sig) {
      console.error("[Payments] Webhook signature mismatch");
      return null;
    }

    // Check timestamp tolerance (5 minutes)
    const timestamp = parseInt(timestampStr, 10);
    const now = Math.floor(Date.now() / 1000);
    if (Math.abs(now - timestamp) > 300) {
      console.error("[Payments] Webhook timestamp too old");
      return null;
    }

    return JSON.parse(body) as StripeWebhookEvent;
  } catch (err) {
    console.error("[Payments] Webhook verification error:", err);
    return null;
  }
}

export interface StripeWebhookEvent {
  id: string;
  type: string;
  data: {
    object: {
      id: string;
      metadata?: Record<string, string>;
      payment_status?: string;
      amount_total?: number;
      customer_email?: string;
    };
  };
}
