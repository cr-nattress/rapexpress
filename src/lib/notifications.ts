/**
 * Notification service abstraction.
 *
 * Sends notifications through configured channels:
 * - Email via SendGrid
 * - SMS via Twilio (urgent alerts only)
 * - Console fallback when providers aren't configured
 */

export interface NotificationPayload {
  type: "quote" | "portal_request" | "contact" | "stat_request" | "application";
  subject: string;
  body: string;
  to?: string;
  urgent?: boolean;
}

export async function sendNotification(payload: NotificationPayload): Promise<void> {
  console.log(`[Notification] ${payload.type}: ${payload.subject}`);

  if (payload.urgent) {
    await sendUrgentAlert(payload);
  }

  await sendEmailNotification(payload);
}

async function sendEmailNotification(payload: NotificationPayload): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.log("[Email] SendGrid not configured, skipping email notification");
    return;
  }

  const toEmail = payload.to || fromEmail; // Default: send to dispatch/operations inbox

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail }] }],
        from: { email: fromEmail, name: "Rap Express" },
        subject: payload.subject,
        content: [
          {
            type: "text/html",
            value: buildEmailHtml(payload),
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`[Email] SendGrid error: ${response.status}`, error);
    } else {
      console.log(`[Email] Sent: ${payload.subject}`);
    }
  } catch (err) {
    console.error("[Email] SendGrid send error:", err);
  }
}

async function sendUrgentAlert(payload: NotificationPayload): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    console.log("[SMS] Twilio not configured, skipping SMS alert");
    return;
  }

  // Send to dispatch phone — in production this would be an env var or from a config table
  const dispatchNumber = process.env.DISPATCH_PHONE_NUMBER;
  if (!dispatchNumber) {
    console.log("[SMS] DISPATCH_PHONE_NUMBER not configured, skipping SMS alert");
    return;
  }

  try {
    const credentials = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          To: dispatchNumber,
          From: fromNumber,
          Body: `[RAP EXPRESS URGENT] ${payload.subject}\n\n${payload.body}`,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error(`[SMS] Twilio error: ${response.status}`, error);
    } else {
      console.log(`[SMS] Urgent alert sent to dispatch`);
    }
  } catch (err) {
    console.error("[SMS] Twilio send error:", err);
  }
}

/**
 * Build a simple branded HTML email template.
 */
function buildEmailHtml(payload: NotificationPayload): string {
  const urgentBanner = payload.urgent
    ? `<div style="background:#dc2626;color:#fff;padding:12px 24px;text-align:center;font-weight:bold;font-size:16px;">
        URGENT — Immediate Attention Required
      </div>`
    : "";

  const typeLabels: Record<string, string> = {
    quote: "Quote Request",
    portal_request: "Portal Access Request",
    contact: "Contact Form Submission",
    stat_request: "STAT Urgent Request",
    application: "Job Application",
  };

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#f2f4f7;">
  ${urgentBanner}
  <div style="max-width:600px;margin:0 auto;padding:24px;">
    <div style="background:#0B2545;padding:24px;text-align:center;">
      <h1 style="color:#fff;margin:0;font-size:24px;">Rap Express</h1>
      <p style="color:#FF6B35;margin:4px 0 0;font-size:14px;">Since 1984 — Colorado Springs</p>
    </div>
    <div style="background:#fff;padding:32px 24px;border:1px solid #e5e7eb;">
      <p style="color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">
        ${typeLabels[payload.type] || payload.type}
      </p>
      <h2 style="color:#0B2545;margin:0 0 16px;font-size:20px;">${payload.subject}</h2>
      <p style="color:#374151;font-size:16px;line-height:1.6;margin:0 0 24px;">${payload.body}</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
      <p style="color:#9ca3af;font-size:12px;margin:0;">
        This is an automated notification from the Rap Express website.
        Log into the <a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}" style="color:#FF6B35;">admin dashboard</a> to manage this submission.
      </p>
    </div>
    <div style="text-align:center;padding:16px;color:#9ca3af;font-size:11px;">
      &copy; ${new Date().getFullYear()} Rap Express Courier. All rights reserved.
    </div>
  </div>
</body>
</html>`;
}

// ── Notification formatters ──────────────────────────────────────────

export function formatQuoteNotification(data: {
  contactName: string;
  serviceLevel: string;
  pickupCity: string;
  dropoffCity: string;
  company?: string;
}): NotificationPayload {
  return {
    type: "quote",
    subject: `New Quote Request: ${data.serviceLevel} — ${data.contactName}`,
    body: `${data.contactName}${data.company ? ` (${data.company})` : ""} requested a ${data.serviceLevel} quote from ${data.pickupCity} to ${data.dropoffCity}.`,
  };
}

export function formatStatNotification(data: {
  name: string;
  phone: string;
  pickupAddress: string;
}): NotificationPayload {
  return {
    type: "stat_request",
    subject: `URGENT STAT Request — ${data.name}`,
    body: `After-hours STAT request from ${data.name} (${data.phone}). Pickup: ${data.pickupAddress}`,
    urgent: true,
  };
}

export function formatPortalNotification(data: {
  companyName: string;
  contactName: string;
}): NotificationPayload {
  return {
    type: "portal_request",
    subject: `Portal Access Request — ${data.companyName}`,
    body: `${data.contactName} from ${data.companyName} requested portal access.`,
  };
}

export function formatContactNotification(data: {
  name: string;
  subject?: string;
}): NotificationPayload {
  return {
    type: "contact",
    subject: `Contact Form: ${data.subject || "General Inquiry"} — ${data.name}`,
    body: `New contact form submission from ${data.name}.`,
  };
}

export function formatApplicationNotification(data: {
  name: string;
  role: string;
}): NotificationPayload {
  return {
    type: "application",
    subject: `New Application: ${data.role} — ${data.name}`,
    body: `${data.name} applied for ${data.role}.`,
  };
}
