import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Dr. Bali's Bliss",
  description:
    "Explore the full range of integrative health services at Dr. Bali's Bliss — Ayurveda, Detox, Homeopathy, Ozone Therapy, IV Nutrition, Yoga, Skincare, and more.",
};

const serviceDetails: Record<string, string[]> = {
  detox: [
    "Personalised detox protocol designed by Dr. Bali",
    "Colon hydrotherapy with certified therapists",
    "Liver and kidney cleanse protocols",
    "Detox juice and nutrition plan",
    "Pre and post-detox lab work",
  ],
  ayurveda: [
    "Prakriti (constitution) analysis",
    "Panchakarma treatments",
    "Herbal formulations and remedies",
    "Personalised Ayurvedic diet plan",
    "Lifestyle and dinacharya coaching",
  ],
  homeopathy: [
    "Constitutional and acute homeopathy",
    "In-depth case taking and analysis",
    "Chronic disease management",
    "Individualised remedy selection",
    "Regular follow-up consultations",
  ],
  ozone: [
    "Major autohemotherapy (MAH)",
    "Rectal ozone insufflation",
    "Ozone saunas and topical applications",
    "IV ozone protocols",
    "Anti-ageing and immune support",
  ],
  yoga: [
    "Therapeutic yoga tailored to your condition",
    "Pranayama and breathwork",
    "Meditation and mindfulness training",
    "Yoga nidra for deep rest",
    "Lifestyle and circadian rhythm coaching",
  ],
  skincare: [
    "Advanced skin analysis",
    "Medical-grade facials and peels",
    "Collagen stimulation treatments",
    "Pigmentation and acne protocols",
    "Age-reversal and rejuvenation programmes",
  ],
  "iv-nutrition": [
    "Custom IV micronutrient drips",
    "High-dose Vitamin C infusions",
    "Glutathione and antioxidant IV",
    "Chelation therapy",
    "Myers Cocktail and energy IVs",
  ],
  naturopathy: [
    "Nutritional therapy and healing diets",
    "Hydrotherapy treatments",
    "Fasting and detox protocols",
    "Herbal medicine",
    "Lifestyle medicine coaching",
  ],
  energy: [
    "Pranic healing sessions",
    "Chakra balancing",
    "Bio-energy field assessment",
    "Aura scanning",
    "Remote energy healing sessions",
  ],
  counseling: [
    "One-on-one psychological counseling",
    "Stress and anxiety management",
    "Emotional root-cause exploration",
    "Mind-body connection therapy",
    "Relationship and life-transitions support",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 text-center px-4">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          Integrative Healing
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          10 healing modalities, all under one roof — each personalised to your unique constitution and health goals.
        </p>
      </section>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-100 p-7 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{service.icon}</div>
                <h2 className="text-xl font-bold text-stone-800">{service.title}</h2>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-5">{service.description}</p>
              {serviceDetails[service.id] && (
                <ul className="space-y-2">
                  {serviceDetails[service.id].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="text-green-600 text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Not Sure Which Service is Right for You?</h2>
        <p className="text-green-100 mb-8 max-w-lg mx-auto">
          Book a free initial consultation and Dr. Bali will recommend the ideal combination of treatments for your specific needs.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold transition-colors"
        >
          Book Free Consultation
        </Link>
      </section>
    </>
  );
}
