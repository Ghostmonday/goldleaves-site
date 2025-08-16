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
  const { openForm } = useIntakeForm();
  const { openPricing } = usePricing();

  const handlePricingClick = (e) => {
    e.preventDefault();
    openPricing();
    setTimeout(() => smoothScrollTo("pricing-block"), 60);
  };

  return (
    <header className="w-full sticky top-0 z-40">
      <div className="bg-[hsl(var(--card))]/90 backdrop-blur border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 select-none">
            <div className="relative">
              <GoldLogo size={28} />
            </div>
            <span className="text-[15px] font-semibold tracking-[0.02em] text-[hsl(var(--foreground))]">{site.brand.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.02em]">
            <a href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo("services"); }} className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">Services</a>
            <a href="#pricing-block" onClick={handlePricingClick} className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">Pricing</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo("contact"); }} className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <CtaButton onClick={() => openForm()}>Start a Project</CtaButton>
          </div>
        </div>
        <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, hsla(45,60%,50%,0.6), transparent)" }} />
      </div>
    </header>
  );
}