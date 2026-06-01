import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dr. Poonam Bali | Dr. Bali's Bliss",
  description:
    "Meet Dr. Poonam Bali — founder of Bliss Holistic Health Centre, South Delhi. Over 28 years of integrative healing expertise.",
};

const philosophy = [
  {
    icon: "🌱",
    title: "Root-Cause Medicine",
    body: "We never just treat symptoms. Every protocol starts by identifying the underlying causes of your condition — whether physical, emotional, or environmental.",
  },
  {
    icon: "🤝",
    title: "Personalised Protocols",
    body: "No two bodies are the same. Every programme is customised to your unique constitution, medical history, and wellness goals.",
  },
  {
    icon: "🔬",
    title: "Ancient Wisdom + Modern Science",
    body: "We combine time-tested healing systems like Ayurveda and Homeopathy with evidence-based modern modalities like Ozone Therapy and IV Nutrition.",
  },
  {
    icon: "♾️",
    title: "Sustainable Transformation",
    body: "Our goal is not a quick fix — it's lasting change. We empower every patient with the knowledge and lifestyle tools to sustain their results for life.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 text-center px-4">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dr. Bali&apos;s Bliss</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          A healing sanctuary founded in 1996 and built on the conviction that true wellness is whole-body, whole-mind.
        </p>
      </section>

      {/* Dr. Bali bio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="bg-green-50 rounded-3xl h-80 md:h-full flex items-center justify-center text-8xl">
          👩‍⚕️
        </div>
        <div>
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
            The Founder
          </span>
          <h2 className="text-3xl font-bold text-stone-800 mt-2 mb-5">Dr. Poonam Bali</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Dr. Poonam Bali is a pioneer in integrative and holistic medicine in India. With a career spanning nearly three decades,
            she founded Bliss in 1996 with a clear vision: to create a space where all healing modalities could work together
            seamlessly for the benefit of each patient.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Trained across multiple disciplines — from Homeopathy and Ayurveda to Naturopathy and advanced clinical nutrition —
            Dr. Bali brings a rare depth of knowledge to every consultation. She has personally treated over 10,000 patients
            from across India and internationally.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Her approach is defined by deep compassion, scientific rigour, and an unwavering commitment to addressing root causes
            rather than masking symptoms.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-stone-50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Our Philosophy</h2>
            <p className="text-stone-500 max-w-xl mx-auto">The four pillars that guide every programme at Bliss.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {philosophy.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-stone-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-stone-800 text-lg mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Bliss */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">About Bliss Centre</h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Located in the heart of South Delhi, Bliss is a fully integrated healing centre designed to provide everything
            you need for deep health restoration — under one roof. From clinical consultations to residential detox stays,
            every touchpoint has been crafted to support your healing journey.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Our centre houses dedicated treatment rooms for Ozone Therapy, IV Nutrition, Colon Hydrotherapy, Ayurvedic
            treatments, and more. Our quiet homestay option allows patients to fully immerse in the healing process without
            the distractions of daily life.
          </p>
          <Link
            href="/homestay"
            className="inline-block px-6 py-3 rounded-full border border-green-700 text-green-700 font-semibold hover:bg-green-50 transition-colors mr-4"
          >
            View Homestay
          </Link>
          <Link
            href="/services"
            className="inline-block px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors"
          >
            Our Services
          </Link>
        </div>
      </section>
    </>
  );
}
