import React from "react";
import { site } from "../mock";
import { Rocket, TrendingUp, Database } from "lucide-react";
import { useIntakeForm } from "../context/IntakeFormContext";

const ICONS = { Rocket, TrendingUp, Database };

function Card({ tier }) {
  const { openForm } = useIntakeForm();
  const Icon = ICONS[tier.icon] || Rocket;
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: tier.accent + "20" }}>
            <Icon size={20} color={tier.accent} />
          </div>
          <div className="text-lg font-semibold tracking-wide uppercase text-gray-900">{tier.plan}</div>
        </div>
        <div className="mt-3 text-4xl font-extrabold text-gray-900">{tier.price}</div>
        <p className="mt-2 text-sm text-gray-600">{tier.tagline}</p>

        {tier.optionalLabel && (
          <div className="mt-5">
            <div className="text-xs font-semibold uppercase text-gray-500">+ {tier.optionalLabel}</div>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              {tier.options.map((opt) => (
                <li key={opt}>• {opt}</li>
              ))}
            </ul>
          </div>
        )}

        {tier.quote && (
          <div className="mt-5 border-t border-gray-200 pt-4">
            <p className="text-xs italic text-gray-600">{tier.quote}</p>
          </div>
        )}
      </div>
      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={() => openForm()}
          className="w-full rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-transform duration-150 hover:-translate-y-0.5"
          style={{ backgroundColor: tier.accent, color: "#111" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function PricingThree() {
  return (
    <section id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
        <p className="mt-2 text-sm text-gray-600">{site.pricingFootnote}</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.pricing.map((tier) => (
            <Card key={tier.plan} tier={tier} />
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-700">
          <div>• Full IP ownership. No vendor lock‑in.</div>
          <div>• Response within 24h. Kickoff in 3–5 days.</div>
        </div>
      </div>
    </section>
  );
}