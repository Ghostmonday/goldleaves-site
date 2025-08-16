import React from "react";
import { site } from "../mock";
import { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow } from "../components/LeafIcons";
import ExpandableFormSection from "../components/ExpandableFormSection";
import { useIntakeForm } from "../context/IntakeFormContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import ResultPills from "../components/ResultPills";
import PricingReveal from "../components/PricingReveal";
import { usePricing } from "../context/PricingContext";
import ContactSection from "../components/ContactSection";
import CtaButton from "../components/CtaButton";
import GoldLogo from "../components/GoldLogo";

const ICONS = { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow };

function Hero() {
  const { openForm } = useIntakeForm();
  const { openPricing } = usePricing();
  return (
    <section id="top" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Asymmetric layout: logo + heading left, actions right on md+ */}
        <div className="md:col-span-7">
          <div className="flex items-center gap-3">
            <GoldLogo size={56} />
            <span className="sr-only">GoldLeaves</span>
          </div>
          <h1 className="mt-6 text-[40px] md:text-[56px] leading-[1.06] font-extrabold tracking-tight text-gray-900">
            Build fast. Launch smart.
          </h1>
          <p className="mt-3 text-[16px] md:text-[18px] leading-relaxed text-gray-700 max-w-[56ch]">
            Code that works. Support that sticks.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CtaButton as="a" onClick={() => openForm()}>
              Start a Project
            </CtaButton>
            <button onClick={() => { openPricing(); setTimeout(() => document.getElementById("pricing-block")?.scrollIntoView({ behavior: "smooth" }), 50); }} className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold border border-[hsl(var(--border))] text-gray-900">
              View pricing
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-700">
            Prefer email? <a className="underline" href={`mailto:${site.brand.email}`}>{site.brand.email}</a>
          </p>
        </div>
        <div className="md:col-span-5 hidden md:block">
          {/* Accent lines block for visual interest */}
          <div className="relative h-[200px]">
            <div className="absolute left-8 top-4 h-[2px] w-1/2" style={{ background: "linear-gradient(90deg, hsla(45,60%,50%,0.8), transparent)" }} />
            <div className="absolute left-16 top-12 h-[2px] w-2/3" style={{ background: "linear-gradient(90deg, hsla(45,60%,45%,0.6), transparent)" }} />
            <div className="absolute left-24 top-20 h-[2px] w-1/3" style={{ background: "linear-gradient(90deg, hsla(45,60%,40%,0.4), transparent)" }} />
          </div>
        </div>

        <div className="md:col-span-12">
          <div className="accent-underline text-gray-900 text-xl font-semibold">What You Walk Away With</div>
        </div>
        <div className="md:col-span-12">
          <ResultPills />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900">Services</h2>
          <div className="hidden md:block h-[1px] w-1/3" style={{ background: "linear-gradient(90deg, transparent, hsla(45,60%,50%,0.6))" }} />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {site.services.map((s) => {
            const Icon = ICONS[s.icon] || Code2;
            return (
              <div key={s.title} className="card-premium card-hover rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--secondary))]">
                    <Icon size={18} />
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
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900">FAQ</h2>
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