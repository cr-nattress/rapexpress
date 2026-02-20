import { Section, SectionHeader } from "@/components/ui";

interface Testimonial {
  author: string;
  company?: string;
  text: string;
  rating: number;
  source?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    author: "Sarah M.",
    company: "Thompson & Associates Law",
    text: "Rap Express has been our go-to for court filings for over a decade. Their drivers know every courthouse in the Springs and never miss a deadline.",
    rating: 5,
    source: "Google",
  },
  {
    author: "Dr. James K.",
    company: "Peak View Medical Labs",
    text: "Reliable specimen transport with proper chain of custody. Their bonded drivers give us confidence in every pickup.",
    rating: 5,
    source: "Google",
  },
  {
    author: "Maria L.",
    company: "Front Range Manufacturing",
    text: "We switched from a national carrier to Rap Express and haven't looked back. Personal service, fair pricing, and they actually answer the phone.",
    rating: 5,
    source: "Yelp",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-orange-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  return (
    <Section>
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Trusted by hundreds of Colorado businesses for reliable courier service."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <StarRating rating={t.rating} />
            <p className="mt-4 flex-1 text-gray-700">&ldquo;{t.text}&rdquo;</p>
            <footer className="mt-4 border-t border-gray-100 pt-4">
              <p className="font-semibold text-navy-900">{t.author}</p>
              {t.company && (
                <p className="text-sm text-gray-500">{t.company}</p>
              )}
              {t.source && (
                <p className="mt-1 text-xs text-gray-400">via {t.source}</p>
              )}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
