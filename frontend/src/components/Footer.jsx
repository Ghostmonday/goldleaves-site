import React from "react";
import { site } from "../mock";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-semibold text-gray-900">© {new Date().getFullYear()} {site.brand.name}</div>
          <div>
            <a href={`mailto:${site.brand.email}`} className="text-gray-700 hover:text-gray-900">{site.brand.email}</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}