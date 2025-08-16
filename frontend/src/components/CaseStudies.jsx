import React from "react";

const CASES = [
  {
    title: "Fintech MVP",
    result: "Launched in 10 days",
    desc: "Subscription billing + dashboard with clean handoff.",
  },
  {
    title: "Ops Automation",
    result: "Saved 20+ hrs/week",
    desc: "API + workflow automation replacing spreadsheets.",
  },
  {
    title: "Client Portal",
    result: "Zero support tickets",
    desc: "Auth, roles, and docs that users actually read.",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Selected work</h2>
          <a href="#contact" className="text-sm text-gray-700 hover:text-gray-900 underline">Start your build</a>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES.map(c => (
            <div key={c.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-sm font-semibold text-gray-500">{c.result}</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">{c.title}</div>
              <p className="mt-2 text-sm text-gray-700">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}