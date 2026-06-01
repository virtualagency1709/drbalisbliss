import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌿</span>
              <div>
                <p className="font-bold text-white">Dr. Bali&apos;s Bliss</p>
                <p className="text-xs text-green-300 tracking-widest uppercase">Holistic Health Centre</p>
              </div>
            </div>
            <p className="text-sm text-green-300 leading-relaxed">
              All Under One Roof — integrating Ayurveda, Detox, Homeopathy, Ozone Therapy, and Naturopathy since 1996.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h3>
            <ul className="space-y-3 text-sm text-green-300">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>South Delhi, India — 110017</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+911140000000" className="hover:text-white transition-colors">
                  +91-11-4000-0000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@drbalisbliss.com" className="hover:text-white transition-colors">
                  info@drbalisbliss.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Mon – Sat: 9 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-green-800 text-center text-xs text-green-500">
          © {new Date().getFullYear()} Dr. Bali&apos;s Bliss. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
