import Link from "next/link";
import { buttonVariants } from "@/components/ui";

export function CtaStrip() {
  return (
    <section className="bg-navy-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to RAP?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Whether you need a one-time delivery or a daily route, we&apos;re here to move your
            business forward. Get started in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/quote" className={buttonVariants("primary", "lg")}>
              Get a Quote
            </Link>
            <Link
              href="/tracking"
              className={`${buttonVariants("outline", "lg")} border-white text-white hover:bg-white hover:text-navy-900`}
            >
              Request Portal Access
            </Link>
            <Link
              href="/careers"
              className={`${buttonVariants("ghost", "lg")} text-gray-300 hover:bg-navy-800 hover:text-white`}
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
