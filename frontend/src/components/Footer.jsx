import React from "react";
import { site } from "../mock";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-semibold text-gray-900">© {new Date().getFullYear()} {site.brand.name}</div>
          <div>
            <a href={`mailto:${site.brand.email}`} className="text-gray-700 hover:text-gray-900">{site.brand.email}</a>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}