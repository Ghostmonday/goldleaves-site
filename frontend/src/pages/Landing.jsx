import React from "react";
import { site } from "../mock";
import { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow, Mail } from "lucide-react";
import ExpandableFormSection from "../components/ExpandableFormSection";
import { useIntakeForm } from "../context/IntakeFormContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import ResultPills from "../components/ResultPills";
import PricingReveal from "../components/PricingReveal";
import { usePricing } from "../context/PricingContext";
import ContactSection from "../components/ContactSection";
import HeroCube from "../components/HeroCube";

const ICONS = { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow };

function Hero() {
  const accent = site.brand.accent;
  const { openForm } = useIntakeForm();
  const { openPricing } = usePricing();
  return (
    <section id="top" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Build fast. Launch smart.
            </h1>
            <p className="mt-3 text-lg text-gray-700">Code that works. Support that sticks.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                onClick={() => openForm()}
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
                style={{ background: `linear-gradient(90deg, ${accent}, #d8c45a)`, color: "#111" }}
              >
                Start a Project
              </a>
              <button onClick={() => { openPricing(); setTimeout(() => document.getElementById("pricing-block")?.scrollIntoView({ behavior: "smooth" }), 50); }} className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold border border-gray-300 text-gray-900">View pricing</button>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              Prefer email? <a className="underline" href={`mailto:${site.brand.email}`}>{site.brand.email}</a>
            </p>
          </div>
          <div className="hidden md:flex justify-center md:justify-end">
            <HeroCube size={300} />
          </div>
          <div className="md:hidden flex justify-center mt-6">
            <HeroCube size={220} />
          </div>
        </div>

        <ResultPills />
      </div>
    </section>
  );
}

function Services() {
  const accent = site.brand.accent;
  return (
    <section id="services" className="bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900">Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.services.map((s) => {
            const Icon = ICONS[s.icon] || Code2;
            return (
              <div key={s.title} className="border border-gray-200 rounded-lg p-5 bg-white transform transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full" style={{ backgroundColor: "#F7F7F7", border: "1px solid #E5E7EB" }}>
                    <Icon size={18} color={accent} />
                  </span>
                  <div>
                    <div className="font-medium text-gray-900">{s.title}</div>
                    <p className="text-sm text-gray-600 mt-1">Production‑ready, maintainable software.</p>
                  </div>
                </div>
              </div>
            );
          })}
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
      <PricingReveal />
      <ContactSection />
      <FAQ />
    </main>
  );
}