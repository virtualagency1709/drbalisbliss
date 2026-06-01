import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healing Homestay | Dr. Bali's Bliss",
  description:
    "Stay on-site at Dr. Bali's Bliss for a fully immersive residential healing experience. Meals, treatments, and daily activities — all integrated.",
};

const amenities = [
  { icon: "🛏️", title: "Private Rooms", body: "Calm, serene private accommodation designed to support deep rest and recovery." },
  { icon: "🥗", title: "Healing Meals", body: "Three daily meals tailored to your detox protocol — freshly prepared with wholesome, seasonal ingredients." },
  { icon: "🧘", title: "Daily Yoga & Meditation", body: "Guided morning yoga and evening meditation sessions included with every residential stay." },
  { icon: "💆", title: "On-Site Treatments", body: "All scheduled treatments — Ayurveda, Ozone, IV drips, colon therapy — take place right at the centre." },
  { icon: "🌿", title: "Healing Garden", body: "Access to a quiet garden space for rest, reflection, and gentle walks throughout your stay." },
  { icon: "📋", title: "Daily Check-ins", body: "Dr. Bali or a senior practitioner conducts daily check-ins to monitor progress and adjust protocols." },
];

export default function HomestayPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 text-center px-4">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          Residential Healing
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bliss Healing Homestay</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          Immerse yourself fully in the healing process. Stay on-site and let us take care of everything — treatments, meals, yoga, and daily support.
        </p>
      </section>

      {/* Why stay */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-amber-600 text-sm font-semibold uppercase tracking-widest">
            Why Residential?
          </span>
          <h2 className="text-3xl font-bold text-stone-800 mt-2 mb-5">
            The Healing Power of Full Immersion
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Research consistently shows that healing outcomes are significantly better when patients can
            fully commit to a programme — away from the stress and distractions of everyday life.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Our Bliss Homestay is designed to provide exactly that: a sanctuary where every aspect of
            your environment — food, sleep, activity, and treatment — is optimised for your recovery.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Available as an add-on to any programme of 3 days or more, the homestay option is especially
            popular for our 7-Day Transformation and 14-Day Deep Heal programmes.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors"
          >
            Enquire About Homestay
          </Link>
        </div>
        <div className="bg-green-50 rounded-3xl h-72 md:h-full flex items-center justify-center text-8xl">
          🏡
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-stone-50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-3">What&apos;s Included</h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              Every residential stay comes complete with everything you need for a deeply restorative experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-stone-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample day */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-stone-800 text-center mb-10">A Typical Day at Bliss</h2>
        <div className="space-y-4">
          {[
            { time: "6:30 AM", activity: "Morning yoga and pranayama session" },
            { time: "8:00 AM", activity: "Healing breakfast tailored to your protocol" },
            { time: "9:30 AM", activity: "Primary treatment session (Ayurveda / Ozone / IV drip)" },
            { time: "11:00 AM", activity: "Consultation review with Dr. Bali or senior practitioner" },
            { time: "1:00 PM", activity: "Detox lunch and rest period" },
            { time: "3:00 PM", activity: "Secondary treatment or naturopathy session" },
            { time: "5:00 PM", activity: "Guided walk and garden rest time" },
            { time: "6:30 PM", activity: "Evening meditation and yoga nidra" },
            { time: "7:30 PM", activity: "Light healing dinner" },
            { time: "9:30 PM", activity: "Lights out for deep, restorative sleep" },
          ].map(({ time, activity }) => (
            <div key={time} className="flex gap-5 items-start">
              <div className="w-20 shrink-0 text-sm font-semibold text-green-700 pt-0.5">{time}</div>
              <div className="flex-1 bg-white border border-stone-100 rounded-xl px-4 py-3 text-sm text-stone-600">
                {activity}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Book Your Residential Stay</h2>
        <p className="text-green-100 mb-8 max-w-lg mx-auto">
          Limited spaces available. Contact us to check availability and book your place.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-semibold transition-colors"
        >
          Check Availability
        </Link>
      </section>
    </>
  );
}
