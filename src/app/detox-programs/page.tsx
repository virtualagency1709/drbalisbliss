import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Detox Programs | Dr. Bali's Bliss",
  description:
    "Choose from 1-day, weekend, 3-day, 7-day, or 14-day detox and healing programmes at Dr. Bali's Bliss. Personalised, medically supervised, transformative.",
};

const badgeColors: Record<string, string> = {
  "Quick Reset": "bg-blue-100 text-blue-700",
  "Most Popular": "bg-amber-100 text-amber-700",
  "Deep Cleanse": "bg-green-100 text-green-700",
  Transformation: "bg-purple-100 text-purple-700",
  Premium: "bg-rose-100 text-rose-700",
};

export default function DetoxProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 text-center px-4">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          Medically Supervised
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Detox & Healing Programs</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          From a single-day reset to a 14-day deep transformation — every programme is fully personalised and supervised by Dr. Poonam Bali.
        </p>
      </section>

      {/* Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Card header */}
              <div className="bg-gradient-to-r from-green-700 to-green-800 text-white p-6 flex items-start justify-between">
                <div>
                  <span
                    className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-2 ${badgeColors[program.badge] ?? "bg-white/20 text-white"}`}
                  >
                    {program.badge}
                  </span>
                  <h2 className="text-2xl font-bold">{program.title}</h2>
                  <p className="text-green-200 text-sm mt-0.5">{program.duration}</p>
                </div>
                <div className="text-4xl opacity-60">🌿</div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-stone-600 text-sm leading-relaxed mb-5">{program.description}</p>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
                  What&apos;s Included
                </h3>
                <ul className="space-y-2 mb-6">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="text-green-600 mt-0.5">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors"
                >
                  {program.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-stone-50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">How it Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Initial Consultation", body: "Dr. Bali reviews your health history and goals to recommend the right programme." },
              { step: "02", title: "Customised Protocol", body: "A fully personalised treatment plan is designed based on your constitution and lab work." },
              { step: "03", title: "Guided Programme", body: "Attend your programme with full support from Dr. Bali and our experienced team." },
              { step: "04", title: "Post-Programme Support", body: "Receive diet plans, supplement protocols, and follow-up support to maintain your results." },
            ].map(({ step, title, body }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-700 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-stone-800 mb-2">{title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-4">
        <h2 className="text-2xl font-bold text-stone-800 mb-3">Ready to Begin?</h2>
        <p className="text-stone-500 mb-8 max-w-md mx-auto">
          Call us or fill in the contact form to book your consultation and programme.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
