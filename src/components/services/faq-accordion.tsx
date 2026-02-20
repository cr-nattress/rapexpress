"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What areas do you cover?",
    answer:
      "We serve the entire Front Range including Colorado Springs, Denver Metro, Pueblo, Canon City, and surrounding communities. Contact us for runs to other Colorado destinations.",
  },
  {
    question: "How quickly can you pick up a package?",
    answer:
      "For STAT service, we guarantee pickup within 70 minutes. Standard and Same Day services have specific cutoff times — see our service tiers above for details.",
  },
  {
    question: "Do you handle medical or legal deliveries?",
    answer:
      "Yes. Our drivers are bonded, insured, and trained for chain-of-custody deliveries. We regularly handle court filings, legal documents, lab specimens, and pharmaceutical deliveries.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "Dispatch operates Monday through Friday, 7:30 AM to 5:30 PM. After-hours, weekend, and holiday deliveries are available through our Special service tier with applicable surcharges.",
  },
  {
    question: "How do I track my delivery?",
    answer:
      "All deliveries are tracked via our Courier Complete system. Portal clients get real-time tracking, automated notifications, and proof-of-delivery photos. Contact us to set up portal access.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, Discover, PayPal, and invoicing for established accounts. Online payment is available through our secure portal.",
  },
];

export function FaqAccordion({ items = defaultFaqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="pr-4 font-semibold text-navy-900">{item.question}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-4">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
