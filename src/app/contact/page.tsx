"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", programme: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 text-center px-4">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          Ready to begin your healing journey? Book a consultation or drop us a message — we&apos;d love to hear from you.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-14">
        {/* Contact info */}
        <div>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Find Us</h2>
          <div className="space-y-5">
            {[
              {
                icon: "📍",
                label: "Address",
                value: "Dr. Bali's Bliss Centre, South Delhi, India — 110017",
              },
              {
                icon: "📞",
                label: "Phone",
                value: "+91-11-4000-0000",
                href: "tel:+911140000000",
              },
              {
                icon: "✉️",
                label: "Email",
                value: "info@drbalisbliss.com",
                href: "mailto:info@drbalisbliss.com",
              },
              {
                icon: "🕐",
                label: "Hours",
                value: "Monday – Saturday: 9:00 AM – 7:00 PM",
              },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-lg shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-stone-700 hover:text-green-700 transition-colors text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="text-stone-700 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-8 bg-stone-100 rounded-2xl h-56 flex items-center justify-center text-stone-400 text-sm">
            📍 Map — South Delhi
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h2 className="text-2xl font-bold text-stone-800 mb-6">Send a Message</h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Message Received!</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Thank you for reaching out. Dr. Bali&apos;s team will get back to you within 24 hours to schedule your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">
                    Phone *
                  </label>
                  <input
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">
                  Interested In
                </label>
                <select
                  name="programme"
                  value={form.programme}
                  onChange={handleChange}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-green-500 transition-colors bg-white"
                >
                  <option value="">Select a programme...</option>
                  <option>1-Day Detox</option>
                  <option>Weekend Retreat</option>
                  <option>3-Day Intensive</option>
                  <option>7-Day Transformation</option>
                  <option>14-Day Deep Heal</option>
                  <option>General Consultation</option>
                  <option>Homestay Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-widest mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your health concerns or questions..."
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:border-green-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
