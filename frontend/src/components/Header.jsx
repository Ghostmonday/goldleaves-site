import React from "react";
import { site } from "../mock";
import { useIntakeForm } from "../context/IntakeFormContext";
import ThemeToggle from "./ThemeToggle";
import GoldLogo from "./GoldLogo";
import CtaButton from "./CtaButton";
import { usePricing } from "../context/PricingContext";

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const accent = site.brand.accent;
  const { openForm } = useIntakeForm();
  const { openPricing } = usePricing();

  const handlePricingClick = (e) => {
    e.preventDefault();
    openPricing();
    setTimeout(() => smoothScrollTo("pricing-block"), 60);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white/90 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 select-none">
          <GoldLogo size={28} />
          <span className="text-xl font-semibold tracking-tight text-gray-900">{site.brand.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo("services"); }} className="text-gray-700 hover:text-gray-900">Services</a>
          <a href="#pricing-block" onClick={handlePricingClick} className="text-gray-700 hover:text-gray-900">Pricing</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo("contact"); }} className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <CtaButton onClick={() => openForm()}>Start a Project</CtaButton>
        </div>
      </div>
    </header>
  );
}