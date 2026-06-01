import Link from "next/link";
import { services, programs, testimonials } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#fde68a,_transparent)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6">
            Established 1996 · South Delhi
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Heal Deeply.<br />
            <span className="text-amber-400">Live Blissfully.</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dr. Poonam Bali&apos;s integrated wellness centre — Ayurveda, Detox, Homeopathy,
            Ozone Therapy and more. All Under One Roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/detox-programs"
              className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold transition-colors shadow-lg"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border border-white/40 hover:bg-white/10 text-white font-semibold transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-amber-50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "28+", label: "Years of Excellence" },
            { value: "10,000+", label: "Lives Transformed" },
            { value: "10", label: "Healing Modalities" },
            { value: "5", label: "Programme Durations" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-green-800">{value}</p>
              <p className="text-sm text-stone-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Our Healing Services</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            A full spectrum of integrative therapies — all under one roof, tailored to you.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-green-200 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-stone-800 mb-2 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-green-700 font-medium hover:underline"
          >
            View all 10 services →
          </Link>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
              About Dr. Poonam Bali
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
              28 Years of Integrative<br />Healing Excellence
            </h2>
            <p className="text-green-100 leading-relaxed mb-4">
              Dr. Poonam Bali founded Bliss in 1996 with a vision to create a truly holistic healing space —
              one that combines the wisdom of ancient systems like Ayurveda and Homeopathy with modern
              modalities like Ozone Therapy and IV Nutrition.
            </p>
            <p className="text-green-100 leading-relaxed mb-8">
              Over nearly three decades, she has helped over 10,000 patients reclaim their health through
              deeply personalised, root-cause medicine.
            </p>
            <Link
              href="/about"
              className="inline-block px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold transition-colors"
            >
              Meet Dr. Bali
            </Link>
          </div>
          <div className="bg-green-700/50 rounded-3xl h-72 md:h-full flex items-center justify-center text-6xl">
            🌿
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Detox & Healing Programs</h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            From a single-day reset to a transformative two-week journey — find the programme that fits your life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-green-700 text-white p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                  {program.badge}
                </span>
                <h3 className="text-xl font-bold mt-1">{program.title}</h3>
                <p className="text-green-200 text-sm">{program.duration}</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-stone-600 mb-4 leading-relaxed">{program.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {program.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="text-green-600">✓</span> {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/detox-programs"
                  className="block text-center py-2.5 rounded-full border border-green-700 text-green-700 text-sm font-semibold hover:bg-green-700 hover:text-white transition-colors"
                >
                  {program.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/detox-programs"
            className="inline-flex items-center gap-2 text-green-700 font-medium hover:underline"
          >
            View all programmes →
          </Link>
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="bg-stone-50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">What Our Patients Say</h2>
            <p className="text-stone-500">Real stories. Real transformations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-3 text-amber-400">
                  {"★".repeat(t.rating)}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800 text-sm">{t.name}</p>
                    <p className="text-xs text-stone-500">{t.condition} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-green-700 font-medium hover:underline"
            >
              Read all testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Book a free initial consultation with Dr. Bali and discover the programme that&apos;s right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/faq"
              className="px-8 py-3.5 rounded-full border border-green-700 text-green-700 font-semibold hover:bg-green-50 transition-colors"
            >
              Read FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
