import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Patient Testimonials | Dr. Bali's Bliss",
  description:
    "Real stories from patients who have transformed their health at Dr. Bali's Bliss — South Delhi's leading holistic health centre.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 text-center px-4">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          Real Stories
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Testimonials</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          Over 10,000 lives transformed. Here are some of the stories from our patients.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "10,000+", label: "Patients Treated" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "28+", label: "Years of Excellence" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-green-800">{value}</p>
              <p className="text-sm text-stone-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-stone-100 p-7 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex gap-1 mb-4 text-amber-400 text-lg">
                {"★".repeat(t.rating)}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-5 italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto pt-5 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                  <p className="text-xs text-stone-500">{t.condition}</p>
                  <p className="text-xs text-green-600">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-50 border-t border-stone-100 text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-stone-800 mb-3">Start Your Own Transformation</h2>
        <p className="text-stone-500 mb-8 max-w-md mx-auto">
          Book a consultation with Dr. Bali and take the first step towards the health you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/detox-programs"
            className="px-8 py-3.5 rounded-full border border-green-700 text-green-700 font-semibold hover:bg-green-50 transition-colors"
          >
            View Programs
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
