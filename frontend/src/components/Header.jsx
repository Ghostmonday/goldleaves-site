import React from "react";
import { site } from "../mock";
import { useIntakeForm } from "../context/IntakeFormContext";

export default function Header() {
  const accent = site.brand.accent;
  const { openForm } = useIntakeForm();

  return (
    <header className="w-full border-b border-gray-200 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 select-none">
          <span className="text-xl font-semibold tracking-tight text-gray-900">{site.brand.name}</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: accent, color: "#111" }}>Freelance</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
        <div className="block">
          <button
            onClick={() => openForm()}
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: `linear-gradient(90deg, ${accent}, #d8c45a)`, color: "#111" }}
          >
            {site.hero.ctaLabel}
          </button>
        </div>
      </div>
    </header>
  );
}