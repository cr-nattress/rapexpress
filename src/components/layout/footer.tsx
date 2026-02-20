import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/services#standard-rap", label: "Standard RAP" },
    { href: "/services#same-day", label: "Same Day" },
    { href: "/services#stat", label: "STAT" },
    { href: "/services#overnight", label: "Overnight" },
    { href: "/services#priority-overnight", label: "Priority Overnight" },
    { href: "/services#special", label: "Special" },
  ],
  company: [
    { href: "/industries", label: "Industries" },
    { href: "/coverage", label: "Coverage & Fleet" },
    { href: "/tracking", label: "Tracking Portal" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-navy-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold text-white">
              Rap<span className="text-orange-500">Express</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Your Business Is Our Priority. Locally owned courier service
              serving the Front Range since 1984.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <address className="space-y-2 text-sm not-italic">
              <p>2486 Waynoka Rd</p>
              <p>Colorado Springs, CO 80915</p>
              <p className="mt-3">
                <a
                  href="tel:+17195979667"
                  className="font-semibold text-orange-400 transition-colors hover:text-orange-300"
                >
                  (719) 597-9667
                </a>
              </p>
              <p className="text-xs">
                Dispatch: Mon–Fri, 7:30 AM – 5:30 PM
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-navy-700 pt-8 md:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Rap Express, Inc. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
