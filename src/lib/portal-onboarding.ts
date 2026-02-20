/**
 * Portal Onboarding Workflow
 *
 * Manages the process of onboarding new clients to the Courier Complete portal.
 * Currently a semi-automated workflow: triggers emails and CRM updates,
 * with manual Courier Complete account creation handled by operations.
 */

import { getSupabase } from "@/lib/supabase";
import { sendNotification } from "@/lib/notifications";

interface PortalOnboardingData {
  portalRequestId: string;
  companyName: string;
  contactName: string;
  email: string;
}

/**
 * Trigger the onboarding workflow when a portal request is approved.
 * Sends a welcome email with instructions and updates the request status.
 */
export async function startOnboarding(data: PortalOnboardingData): Promise<void> {
  // Update portal request status
  await getSupabase()
    .from("portal_requests")
    .update({ status: "onboarding" })
    .eq("id", data.portalRequestId);

  // Send welcome email with onboarding instructions
  await sendNotification({
    type: "portal_request",
    subject: `Welcome to Rap Express Portal — ${data.companyName}`,
    to: data.email,
    body: buildWelcomeEmailBody(data),
  });

  // Notify operations team to begin manual Courier Complete setup
  await sendNotification({
    type: "portal_request",
    subject: `[Action Required] Portal Setup: ${data.companyName}`,
    body: buildOpsChecklistBody(data),
  });

  console.log(`[Portal] Onboarding started for ${data.companyName}`);
}

/**
 * Mark onboarding as complete — client has full portal access.
 */
export async function completeOnboarding(portalRequestId: string): Promise<void> {
  await getSupabase()
    .from("portal_requests")
    .update({ status: "active" })
    .eq("id", portalRequestId);

  console.log(`[Portal] Onboarding completed for request ${portalRequestId}`);
}

function buildWelcomeEmailBody(data: PortalOnboardingData): string {
  return [
    `Hi ${data.contactName},`,
    "",
    `Welcome to Rap Express! We're setting up your ${data.companyName} portal account.`,
    "",
    "Here's what happens next:",
    "",
    "1. Our operations team will create your Courier Complete portal account (1-2 business days)",
    "2. You'll receive a separate email with your login credentials",
    "3. We'll schedule a brief onboarding call to walk you through the system",
    "",
    "Portal features include:",
    "- Real-time shipment tracking",
    "- Online booking and scheduling",
    "- Invoice history and payment",
    "- Delivery confirmation with proof of delivery",
    "",
    "If you have questions in the meantime, reach out to us at dispatch@rapexpress.com or call (719) 630-0027.",
    "",
    "Thank you for choosing Rap Express!",
  ].join("\n");
}

function buildOpsChecklistBody(data: PortalOnboardingData): string {
  return [
    `New portal onboarding request approved for ${data.companyName}.`,
    "",
    "Onboarding Checklist:",
    `- [ ] Create Courier Complete account for ${data.companyName}`,
    `- [ ] Set up contact: ${data.contactName} (${data.email})`,
    "- [ ] Configure pricing tier and service agreements",
    "- [ ] Send login credentials to client",
    "- [ ] Schedule onboarding call",
    `- [ ] Update portal request status to "active" when complete`,
    "",
    `Portal Request ID: ${data.portalRequestId}`,
  ].join("\n");
}
