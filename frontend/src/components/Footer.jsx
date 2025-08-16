import React from "react";
import { site } from "../mock";
import { Github } from "lucide-react";
import LeafLogo from "./LeafLogo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-20 dark:bg-[hsl(var(--card))]">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 dark:text-[hsl(var(--muted-foreground))] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1 flex items-center gap-2">
          <LeafLogo size={16} color={site.brand.accent} />
          <div className="font-semibold text-gray-900 dark:text-[hsl(var(--foreground))]">© {new Date().getFullYear()} {site.brand.name}</div>
        </div>
        <div className="space-y-1">
          <a href={`mailto:${site.brand.email}`} className="hover:text-gray-900 dark:hover:text-[hsl(var(--foreground))]">{site.brand.email}</a>
          <div className="flex items-center gap-3 text-xs">
            <a href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-[hsl(var(--foreground))]">Privacy</a>
            <span>•</span>
            <a href="/terms-of-service" className="hover:text-gray-900 dark:hover:text-[hsl(var(--foreground))]">Terms</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-gray-900 dark:hover:text-[hsl(var(--foreground))]">Services</a>
          <a href="#pricing" className="hover:text-gray-900 dark:hover:text-[hsl(var(--foreground))]">Pricing</a>
          <a href="#contact" className="hover:text-gray-900 dark:hover:text-[hsl(var(--foreground))]">Contact</a>
          <a href={site.brand.github || "#"} target="_blank" rel="noreferrer" className="text-gray-700 dark:text-[hsl(var(--muted-foreground))] hover:text-gray-900 dark:hover:text-[hsl(var(--foreground))]" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}