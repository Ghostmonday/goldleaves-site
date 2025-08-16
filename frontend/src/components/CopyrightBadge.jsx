import React from "react";
import LeafLogo from "./LeafLogo";
import { site } from "../mock";

export default function CopyrightBadge() {
  return (
    <div
      aria-label="GoldLeaves copyright"
      className="fixed bottom-4 right-4 z-[60] hidden md:flex items-center gap-2 rounded-full border border-gray-200/30 px-3 py-2 shadow-sm backdrop-blur bg-white/20 dark:bg-black/30"
      style={{ color: 'inherit' }}
    >
      <LeafLogo size={18} color={site.brand.accent} />
      <span className="text-xs">© {new Date().getFullYear()} {site.brand.name}</span>
    </div>
  );
}