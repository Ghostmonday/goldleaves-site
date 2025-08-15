import React from "react";
import { site } from "../mock";
import { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow, Mail } from "lucide-react";
import ExpandableFormSection from "../components/ExpandableFormSection";
import { useIntakeForm } from "../context/IntakeFormContext";

const ICONS = { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow };

function Hero() {
  const accent = site.brand.accent;
  const { openForm } = useIntakeForm();
  return (
    <section id="top" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            {site.hero.headline}
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            {site.hero.subtext}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openForm()}
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: accent, color: "#111" }}
            >
              {site.hero.ctaLabel}
            </button>
            <a
              href={site.hero.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold border border-gray-300 text-gray-900"
            >
              <Mail size={18} className="mr-2" /> {site.hero.secondaryCtaLabel}
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-500">{site.dummyNotice}</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const accent = site.brand.accent;
  return (
    <section id="services" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900">Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.services.map((s) => {
            const Icon = ICONS[s.icon] || Code2;
            return (
              <div key={s.title} className="border border-gray-200 rounded-lg p-5 bg-white">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: "#F7F7F7", border: "1px solid #E5E7EB" }}>
                    <Icon size={18} color={accent} />
                  </span>
                  <div className="font-medium text-gray-900">{s.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const accent = site.brand.accent;
  return (
    <section id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
        <p className="mt-2 text-sm text-gray-600">{site.pricingFootnote}</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {site.pricing.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col">
              <div className="text-sm text-gray-500">{tier.name}</div>
              <div className="mt-2 text-3xl font-extrabold text-gray-900">{tier.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              {tier.note && <div className="mt-4 text-xs text-gray-500">{tier.note}</div>}
              <div className="mt-6">
                <button onClick={() => document.getElementById("top").scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center w-full rounded-full px-4 py-2 text-sm font-semibold" style={{ backgroundColor: accent, color: "#111" }}>Start here</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inquiry() {
  const accent = site.brand.accent;
  const { openForm } = useIntakeForm();
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Ready to discuss your project?</h3>
            <p className="mt-1 text-gray-700">Email us at <a href={`mailto:${site.brand.email}`} className="underline text-gray-900">{site.brand.email}</a> or start with the intake link.</p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button onClick={() => openForm()} className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold w-full md:w-auto" style={{ backgroundColor: accent, color: "#111" }}>Start a Project</button>
            <a href={`mailto:${site.brand.email}`} className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold border border-gray-300 text-gray-900 w-full md:w-auto">Email us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <main>
      <Hero />
      <ExpandableFormSection />
      <Services />
      <Pricing />
      <Inquiry />
    </main>
  );
}