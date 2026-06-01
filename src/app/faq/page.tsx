"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/lib/data";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-stone-800 hover:bg-stone-50 transition-colors"
      >
        <span>{q}</span>
        <svg
          className={`w-5 h-5 text-green-600 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 text-center px-4">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-4">
          Got Questions?
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-green-100 max-w-xl mx-auto text-lg">
          Everything you need to know about our programmes, treatments, and what to expect at Bliss.
        </p>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {faqs.map((category) => (
          <div key={category.category} className="mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-green-700 mb-4">
              {category.category}
            </h2>
            <div className="space-y-3">
              {category.questions.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 bg-green-50 border border-green-100 rounded-2xl p-7 text-center">
          <p className="text-stone-700 font-medium mb-2">Still have questions?</p>
          <p className="text-sm text-stone-500 mb-5">
            Our team is happy to help. Get in touch and we&apos;ll answer any questions before you book.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
