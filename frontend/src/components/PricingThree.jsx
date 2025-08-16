import React from "react";
import { site } from "../mock";
import { Rocket, TrendingUp, Database } from "lucide-react";
import { useIntakeForm } from "../context/IntakeFormContext";

const ICONS = { Rocket, TrendingUp, Database };

function Card({ tier }) {
  const { openForm } = useIntakeForm();
  const Icon = ICONS[tier.icon] || Rocket;
  return (
    <div className="card-premium card-hover rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-[hsl(var(--border))] bg-[hsl(var(--secondary))]" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)" }}>
            <Icon size={20} color={tier.accent} />
          </div>
          <div className="text-sm font-semibold tracking-[0.12em] uppercase text-gray-900">{tier.plan}</div>
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
          <div className="mt-5 border-t border-[hsl(var(--border))] pt-4">
            <p className="text-xs italic text-gray-600">{tier.quote}</p>
          </div>
        )}
      </div>
      <div className="px-6 pb-6 mt-auto">
        <button
          onClick={() => openForm()}
          className="w-full rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-transform duration-150"
          style={{ background: `linear-gradient(98deg, ${tier.accent} 0%, ${tier.accent} 100%)`, color: "#111", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 10px 26px rgba(0,0,0,0.35)" }}
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
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
          <div className="hidden md:block h-[1px] w-1/3" style={{ background: "linear-gradient(90deg, transparent, hsla(45,60%,50%,0.6))" }} />
        </div>
        <p className="mt-2 text-sm text-gray-600">{site.pricingFootnote}</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
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