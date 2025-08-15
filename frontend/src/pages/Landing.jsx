import React from "react";
import { site } from "../mock";
import { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow, Mail } from "lucide-react";
import ExpandableFormSection from "../components/ExpandableFormSection";
import { useIntakeForm } from "../context/IntakeFormContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

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
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{ background: `linear-gradient(90deg, ${accent}, #d8c45a)`, color: "#111" }}
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
          <p className="mt-4 text-sm text-gray-700">
            {site.hero.contactNote.split("projects@goldleaves.cloud")[0]}
            <a className="underline" href={`mailto:${site.brand.email}`}>projects@goldleaves.cloud</a>
            {site.hero.contactNote.includes("projects@goldleaves.cloud") ? site.hero.contactNote.split("projects@goldleaves.cloud")[1] : ""}
          </p>
        </div>

        {/* Trusted by row */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 text-gray-500 text-sm">
          {["ACME", "Northwind", "Globex", "Umbrella", "Soylent"].map((brand) => (
            <div key={brand} className="border border-gray-200 rounded-md py-3 px-4 text-center bg-white/60">{brand}</div>
          ))}
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
        <p className="mt-2 text-sm text-gray-600">Production‑ready software, delivered with full‑stack expertise.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.services.map((s) => {
            const Icon = ICONS[s.icon] || Code2;
            return (
              <div key={s.title} className="border border-gray-200 rounded-lg p-5 bg-white transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
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

function TierCard({ tier }) {
  const accent = site.brand.accent;
  const { openForm } = useIntakeForm();
  return (
    <div className={`rounded-lg p-6 bg-white flex flex-col transition duration-200 transform hover:-translate-y-1 hover:shadow-lg ${tier.highlight ? "border-2" : "border"}`} style={{ borderColor: tier.highlight ? accent : "#E5E7EB", backgroundColor: tier.highlight ? "#fffdf3" : "#ffffff" }}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-base font-semibold text-gray-900">{tier.name}</div>
          <div className="mt-1 text-3xl font-extrabold text-gray-900">{tier.price}</div>
        </div>
        {tier.highlight && (
          <span className="text-xs font-semibold px-2 py-1 rounded-sm border" style={{ borderColor: accent, color: "#111", backgroundColor: "#fff" }}>Recommended</span>
        )}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc list-inside">
        {tier.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="mt-6">
        <button onClick={() => openForm()} className="inline-flex items-center justify-center w-full rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md" style={{ background: `linear-gradient(90deg, ${accent}, #d8c45a)`, color: "#111" }}>{tier.cta}</button>
      </div>
    </div>
  );
}

function Pricing() {
  const top = site.pricing.slice(0, 3);
  const bottom = site.pricing.slice(3);
  return (
    <section id="pricing" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
        <p className="mt-2 text-sm text-gray-600">{site.pricingFootnote}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {top.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottom.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
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

function HowWeWork() {
  const steps = [
    { title: "Scope", desc: "Focused discovery and clear deliverables." },
    { title: "Build", desc: "Iterative development with tight feedback loops." },
    { title: "Launch", desc: "Deployment, handoff, docs, and support." },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-lg p-5 bg-white text-gray-900 transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="text-sm font-semibold text-gray-500">{s.title}</div>
              <div className="mt-2 text-sm text-gray-700">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>What are payment terms?</AccordionTrigger>
            <AccordionContent>50% to start, 50% on delivery for most projects. Larger builds can be milestone‑based.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Who owns the code?</AccordionTrigger>
            <AccordionContent>You own 100% of the IP. Handoff includes repos, docs, and credentials.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What happens after I submit the form?</AccordionTrigger>
            <AccordionContent>We reply within 24 hours to confirm scope, timeline, and next steps. Kickoff typically 3–5 days from approval.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long will my project take?</AccordionTrigger>
            <AccordionContent>Depends on tier and scope. Starter sites are often 1–2 weeks; MVPs vary based on features.</AccordionContent>
          </AccordionItem>
        </Accordion>
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
      <HowWeWork />
      <FAQ />
    </main>
  );
}