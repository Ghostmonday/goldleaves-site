import React from "react";
import { site } from "../mock";
import { CheckCircle2, KeyRound, FlaskConical, FileText, Target, Clock } from "lucide-react";

const ICONS = {
  check: CheckCircle2,
  key: KeyRound,
  lab: FlaskConical,
  doc: FileText,
  target: Target,
  clock: Clock,
};

export default function ResultPills() {
  const accent = site.brand.accent;
  const pills = site.deliverables || [];
  const maxMobile = site.resultPillsMobileMax ?? 3;
  return (
    <section id="deliverables" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-gray-900">What You Walk Away With</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pills.map((p, idx) => {
            const Icon = ICONS[p.icon] || CheckCircle2;
            const hiddenMobile = idx >= maxMobile;
            return (
              <div key={p.title} className={`rounded-full border border-gray-200 bg-white shadow-sm px-5 py-4 items-start gap-3 hover:shadow-md transition ${hiddenMobile ? "hidden sm:flex" : "flex"}`}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: "#F7F7F7", border: "1px solid #E5E7EB" }}>
                  <Icon size={18} color={accent} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{p.title}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{p.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}