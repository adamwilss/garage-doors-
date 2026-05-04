import Link from "next/link";
import { business, services, areas, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">
              Quality Garage Doors Carlisle
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Family run specialists supplying, installing, repairing and automating garage
              doors and gates across Carlisle and the surrounding region.
            </p>
            <ul className="text-sm space-y-2">
              <li>
                <span className="text-slate-400">Phone:</span>{" "}
                <a href={business.phoneHref} className="text-white hover:text-accent">
                  {business.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-400">Mobile:</span>{" "}
                <a href={business.mobileHref} className="text-white hover:text-accent">
                  {business.mobile}
                </a>
              </li>
              <li>
                <span className="text-slate-400">Address:</span> {business.address}
              </li>
              <li>
                <span className="text-slate-400">VAT:</span> {business.vat}
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={s.href} className="hover:text-accent transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Areas Covered</h4>
            <ul className="space-y-2 text-sm">
              {areas.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    href="/areas-covered"
                    className="hover:text-accent transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas-covered" className="text-accent hover:text-accent-light">
                  View all areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="text-white font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-2 text-sm">
              {business.trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>VAT number: {business.vat}</p>
        </div>
      </div>
    </footer>
  );
}
