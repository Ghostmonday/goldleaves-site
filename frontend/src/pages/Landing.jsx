import React from "react";
import { site } from "../mock";
import { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow, Mail } from "lucide-react";
import ExpandableFormSection from "../components/ExpandableFormSection";
import { useIntakeForm } from "../context/IntakeFormContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import PricingThree from "../components/PricingThree";
import CaseStudies from "../components/CaseStudies";
import LeafLogo from "../components/LeafLogo";
import CtaButton from "../components/CtaButton";
import ResultPills from "../components/ResultPills";

const ICONS = { Code2, LayoutDashboard, Cpu, CreditCard, CloudCog, Workflow };

function Hero() {
  const accent = site.brand.accent;
  const { openForm } = useIntakeForm();
  return (
    <section id="top" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="flex flex-col items-center text-center">
          <LeafLogo size={64} color={accent} />
          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Build fast. Launch smart.
          </h1>
          <p className="mt-3 text-lg text-gray-700">Code that works. Support that sticks.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CtaButton onClick={() => openForm()}>Start a Project</CtaButton>
            <a href="#work" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold border border-gray-300 text-gray-900">See what we’ve built</a>
          </div>
          <p className="mt-4 text-sm text-gray-700">
            {site.hero.contactNote.split("projects@goldleaves.cloud")[0]}
            <a className="underline" href={`mailto:${site.brand.email}`}>projects@goldleaves.cloud</a>
            {site.hero.contactNote.includes("projects@goldleaves.cloud") ? site.hero.contactNote.split("projects@goldleaves.cloud")[1] : ""}
          </p>
        </div>

        {/* Result Pills section replaces tool badges */}
        <ResultPills />
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
      <CaseStudies />
      <PricingThree />
      <FAQ />
    </main>
  );
}