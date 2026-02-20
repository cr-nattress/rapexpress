/**
 * CRM Integration Layer
 *
 * Abstracts CRM operations so the backend can switch between
 * HubSpot, Airtable, or other providers without changing API routes.
 *
 * Currently implements a console-logging stub.
 * Production implementation requires HUBSPOT_API_KEY in env vars.
 */

export interface CrmDeal {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  pipeline: "quotes" | "portal_onboarding" | "applications";
  stage: string;
  properties: Record<string, string>;
}

export interface CrmContact {
  email: string;
  name: string;
  phone?: string;
  company?: string;
}

export async function createOrUpdateContact(contact: CrmContact): Promise<string | null> {
  const apiKey = process.env.HUBSPOT_API_KEY;

  if (!apiKey) {
    console.log(`[CRM] Would create/update contact: ${contact.email}`);
    return null;
  }

  // HubSpot API implementation
  try {
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        properties: {
          email: contact.email,
          firstname: contact.name.split(" ")[0],
          lastname: contact.name.split(" ").slice(1).join(" ") || "",
          phone: contact.phone || "",
          company: contact.company || "",
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.id;
    }

    // If contact exists (409), try to find and return existing
    if (response.status === 409) {
      console.log(`[CRM] Contact already exists: ${contact.email}`);
      return null;
    }

    console.error(`[CRM] Failed to create contact: ${response.status}`);
    return null;
  } catch (err) {
    console.error("[CRM] Contact creation error:", err);
    return null;
  }
}

export async function createDeal(deal: CrmDeal): Promise<string | null> {
  const apiKey = process.env.HUBSPOT_API_KEY;

  if (!apiKey) {
    console.log(`[CRM] Would create deal: ${deal.name} in ${deal.pipeline} pipeline`);
    return null;
  }

  try {
    const response = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        properties: {
          dealname: deal.name,
          pipeline: deal.pipeline,
          dealstage: deal.stage,
          ...deal.properties,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.id;
    }

    console.error(`[CRM] Failed to create deal: ${response.status}`);
    return null;
  } catch (err) {
    console.error("[CRM] Deal creation error:", err);
    return null;
  }
}

/**
 * High-level helper: create CRM records from a quote submission.
 */
export async function pushQuoteToCrm(data: {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  company?: string;
  serviceLevel: string;
  pickupCity: string;
  dropoffCity: string;
}): Promise<void> {
  await createOrUpdateContact({
    email: data.contactEmail,
    name: data.contactName,
    phone: data.contactPhone,
    company: data.company,
  });

  await createDeal({
    name: `Quote: ${data.serviceLevel} — ${data.contactName}`,
    email: data.contactEmail,
    phone: data.contactPhone,
    company: data.company,
    pipeline: "quotes",
    stage: "new",
    properties: {
      service_level: data.serviceLevel,
      route: `${data.pickupCity} → ${data.dropoffCity}`,
    },
  });
}

/**
 * High-level helper: create CRM records from a portal request.
 */
export async function pushPortalRequestToCrm(data: {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
}): Promise<void> {
  await createOrUpdateContact({
    email: data.email,
    name: data.contactName,
    phone: data.phone,
    company: data.companyName,
  });

  await createDeal({
    name: `Portal: ${data.companyName}`,
    email: data.email,
    phone: data.phone,
    company: data.companyName,
    pipeline: "portal_onboarding",
    stage: "requested",
    properties: {},
  });
}

/**
 * High-level helper: create CRM records from a job application.
 */
export async function pushApplicationToCrm(data: {
  name: string;
  email: string;
  phone: string;
  role: string;
}): Promise<void> {
  await createOrUpdateContact({
    email: data.email,
    name: data.name,
    phone: data.phone,
  });

  await createDeal({
    name: `Application: ${data.role} — ${data.name}`,
    email: data.email,
    phone: data.phone,
    pipeline: "applications",
    stage: "received",
    properties: {
      role: data.role,
    },
  });
}
