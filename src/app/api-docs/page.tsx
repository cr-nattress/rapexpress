import type { Metadata } from "next";
import { Section, SectionHeader, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "API Documentation",
  description:
    "Rap Express API documentation for enterprise clients. Submit quotes, track deliveries, and manage portal access programmatically.",
};

const endpoints = [
  {
    method: "POST",
    path: "/api/quotes",
    description: "Submit a new delivery quote request.",
    body: {
      serviceLevel: { type: "string", required: true, desc: "One of: standard-rap, same-day, stat, overnight, priority-overnight, special" },
      pickupAddress: { type: "string", required: true, desc: "Full pickup street address" },
      pickupCity: { type: "string", required: true, desc: "Pickup city name" },
      dropoffAddress: { type: "string", required: true, desc: "Full drop-off street address" },
      dropoffCity: { type: "string", required: true, desc: "Drop-off city name" },
      packageDescription: { type: "string", required: true, desc: "Description of package contents" },
      weight: { type: "string", required: false, desc: "Approximate package weight" },
      specialInstructions: { type: "string", required: false, desc: "Handling instructions" },
      contactName: { type: "string", required: true, desc: "Requester full name" },
      contactEmail: { type: "string", required: true, desc: "Requester email address" },
      contactPhone: { type: "string", required: true, desc: "Requester phone number" },
      company: { type: "string", required: false, desc: "Company name" },
    },
    response: '{ "success": true, "data": { "id": "uuid" } }',
  },
  {
    method: "POST",
    path: "/api/contact",
    description: "Submit a general contact inquiry.",
    body: {
      name: { type: "string", required: true, desc: "Your full name" },
      email: { type: "string", required: true, desc: "Your email address" },
      phone: { type: "string", required: false, desc: "Phone number" },
      subject: { type: "string", required: false, desc: "Message subject" },
      message: { type: "string", required: true, desc: "Message content (min 10 characters)" },
    },
    response: '{ "success": true, "data": { "id": "uuid" } }',
  },
  {
    method: "POST",
    path: "/api/portal-requests",
    description: "Request portal access for your company.",
    body: {
      companyName: { type: "string", required: true, desc: "Company name" },
      contactName: { type: "string", required: true, desc: "Primary contact name" },
      email: { type: "string", required: true, desc: "Contact email" },
      phone: { type: "string", required: false, desc: "Contact phone" },
      features: { type: "string", required: false, desc: "Desired portal features" },
      notes: { type: "string", required: false, desc: "Additional notes" },
    },
    response: '{ "success": true, "data": { "id": "uuid" } }',
  },
  {
    method: "POST",
    path: "/api/stat-requests",
    description: "Submit an urgent after-hours STAT delivery request. Triggers immediate SMS to dispatcher.",
    body: {
      name: { type: "string", required: true, desc: "Your name" },
      phone: { type: "string", required: true, desc: "Best phone to reach you" },
      pickupAddress: { type: "string", required: true, desc: "Pickup address" },
      dropoffAddress: { type: "string", required: true, desc: "Drop-off address" },
      description: { type: "string", required: false, desc: "Package description" },
    },
    response: '{ "success": true, "data": { "id": "uuid" } }',
  },
  {
    method: "POST",
    path: "/api/applications",
    description: "Submit a job application.",
    body: {
      name: { type: "string", required: true, desc: "Applicant name" },
      email: { type: "string", required: true, desc: "Applicant email" },
      phone: { type: "string", required: true, desc: "Applicant phone" },
      role: { type: "string", required: true, desc: "Position applying for" },
      resumeUrl: { type: "string", required: false, desc: "URL to resume file" },
    },
    response: '{ "success": true, "data": { "id": "uuid" } }',
  },
];

export default function ApiDocsPage() {
  return (
    <>
      <section className="bg-navy-900 py-12 md:py-16">
        <Container>
          <h1 className="text-3xl font-bold text-white md:text-4xl">API Documentation</h1>
          <p className="mt-3 max-w-2xl text-gray-300">
            Integrate with Rap Express programmatically. Submit quotes, track deliveries, and
            manage your account through our REST API.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-navy-900">Authentication</h2>
            <p className="text-gray-600">
              Currently, the public API endpoints do not require authentication. Enterprise clients
              with dedicated API access will receive API keys — contact{" "}
              <a href="mailto:dispatch@rapexpress.com" className="text-orange-500">
                dispatch@rapexpress.com
              </a>{" "}
              to set up programmatic access.
            </p>

            <h2 className="mt-12 text-2xl font-bold text-navy-900">Base URL</h2>
            <code className="block rounded-lg bg-gray-900 px-4 py-3 text-sm text-green-400">
              https://rapexpress.com/api
            </code>

            <h2 className="mt-12 text-2xl font-bold text-navy-900">Response Format</h2>
            <p className="text-gray-600">
              All endpoints return JSON. Successful responses include a <code>success: true</code>{" "}
              field and a <code>data</code> object. Error responses include an{" "}
              <code>error</code> message.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-sm font-semibold text-green-600">Success (201)</p>
                <pre className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`{
  "success": true,
  "data": { "id": "..." }
}`}
                </pre>
              </div>
              <div>
                <p className="mb-1 text-sm font-semibold text-red-600">Error (400/500)</p>
                <pre className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
{`{
  "success": false,
  "error": "Error message"
}`}
                </pre>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="gray">
        <Container>
          <SectionHeader title="Endpoints" subtitle="All available API endpoints." />

          <div className="mt-8 space-y-12">
            {endpoints.map((ep) => (
              <div key={ep.path} className="rounded-xl border border-gray-200 bg-white">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-bold text-green-800">
                      {ep.method}
                    </span>
                    <code className="text-lg font-semibold text-navy-900">{ep.path}</code>
                  </div>
                  <p className="mt-2 text-gray-600">{ep.description}</p>
                </div>

                <div className="px-6 py-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Request Body
                  </h4>
                  <table className="mt-3 w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 text-left">
                        <th className="pb-2 font-semibold text-gray-700">Field</th>
                        <th className="pb-2 font-semibold text-gray-700">Type</th>
                        <th className="pb-2 font-semibold text-gray-700">Required</th>
                        <th className="pb-2 font-semibold text-gray-700">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(ep.body).map(([field, info]) => (
                        <tr key={field} className="border-b border-gray-50">
                          <td className="py-2 font-mono text-navy-900">{field}</td>
                          <td className="py-2 text-gray-500">{info.type}</td>
                          <td className="py-2">
                            {info.required ? (
                              <span className="text-red-600">Yes</span>
                            ) : (
                              <span className="text-gray-400">No</span>
                            )}
                          </td>
                          <td className="py-2 text-gray-600">{info.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="border-t border-gray-200 px-6 py-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Response
                  </h4>
                  <pre className="mt-2 rounded-lg bg-gray-900 p-3 text-sm text-gray-100">
                    {ep.response}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="font-bold text-navy-900">Need Help?</h3>
            <p className="mt-2 text-gray-600">
              For API support, integration assistance, or to request additional endpoints, contact
              our development team at{" "}
              <a href="mailto:dispatch@rapexpress.com" className="font-semibold text-orange-500">
                dispatch@rapexpress.com
              </a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
