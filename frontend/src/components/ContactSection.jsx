import React from "react";
import { site } from "../mock";
import CtaButton from "./CtaButton";
import { useIntakeForm } from "../context/IntakeFormContext";

export default function ContactSection() {
  const { openForm } = useIntakeForm();
  return (
    <section id="contact" className="bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-[hsl(var(--foreground))]">Ready to discuss your project?</h3>
            <p className="mt-1 text-gray-700 dark:text-[hsl(var(--muted-foreground))]">
              Email us at <a href={`mailto:${site.brand.email}`} className="underline">{site.brand.email}</a> or start with the intake link.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <CtaButton onClick={() => openForm()}>Start a Project</CtaButton>
            <a href={`mailto:${site.brand.email}`} className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold border border-gray-300 text-gray-900 dark:text-[hsl(var(--foreground))] w-full md:w-auto">Email us</a>
          </div>
        </div>
      </div>
    </section>
  );
}