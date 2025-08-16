import React from "react";
import { Button } from "./ui/button";

export default function CtaButton({ children, onClick, as = "button", href, className = "", colorA, colorB, ...props }) {
  // Tactile gold button
  const style = {};
  const baseClasses = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold
    transition-all duration-200 will-change-transform select-none
    gold-gradient text-[hsl(var(--primary-foreground))]
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.35)]
    hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_14px_36px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 active:translate-y-0
    active:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_18px_rgba(0,0,0,0.4)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-[hsl(var(--gold-500))]`;

  if (as === "a") {
    return (
      <a href={href} onClick={onClick} className={`${baseClasses} ${className}`} style={style} {...props}>
        <span className="[text-shadow:0_1px_0_rgba(0,0,0,0.25)]">{children}</span>
      </a>
    );
  }
  return (
    <Button onClick={onClick} className={`${baseClasses} ${className}`} style={style} {...props}>
      <span className="[text-shadow:0_1px_0_rgba(0,0,0,0.25)]">{children}</span>
    </Button>
  );
}