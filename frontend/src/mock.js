export const site = {
  brand: {
    name: "GoldLeaves",
    email: "projects@goldleaves.cloud",
    accent: "#BFA32F" // subtle gold
  },
  hero: {
    headline: "Independent full‑stack engineer shipping production‑ready software.",
    subtext: "For founders, startups, and teams that need speed, clarity, and clean execution.",
    contactNote: "You can also email us directly at projects@goldleaves.cloud",
    ctaLabel: "Start a Project",
    ctaHref: "https://example.com/intake", // unused now; CTA handled inline
    secondaryCtaLabel: "Email us",
    secondaryCtaHref: "mailto:projects@goldleaves.cloud"
  },
  services: [
    { icon: "Code2", title: "Full‑stack product development — launch‑ready builds" },
    { icon: "LayoutDashboard", title: "Secure, auditable dashboards built to scale" },
    { icon: "Cpu", title: "AI integrations that enhance workflows, not complexity" },
    { icon: "CreditCard", title: "Subscriptions & payments wired for growth" },
    { icon: "CloudCog", title: "API‑first platforms with clean contracts" },
    { icon: "Workflow", title: "Systems that reduce overhead, not add it" }
  ],
  pricing: [
    {
      name: "Establish — Web Presence Starter",
      price: "$750+",
      features: [
        "Custom-built site (single-page or multi-page)",
        "Mobile-optimized design",
        "Basic contact form or calendar link",
        "1-year domain & lightweight hosting included"
      ],
      cta: "Start this build",
      highlight: false
    },
    {
      name: "Expand — Business Site",
      price: "$1,500+",
      features: [
        "Multiple core views (Home, About, Contact, Services)",
        "Responsive branding across pages",
        "Optional integrations (video, maps, intake forms)",
        "Early-stage SEO and mobile performance tuning"
      ],
      cta: "Start this build",
      highlight: false
    },
    {
      name: "Operate — Full Stack Site with Admin",
      price: "$3,000+",
      features: [
        "Custom backend (auth + content/admin panel)",
        "Database & session management included",
        "Email integration + basic dashboards",
        "Secure deploy & performance monitoring"
      ],
      cta: "Start this build",
      highlight: true
    },
    {
      name: "Scale — Web App MVP",
      price: "$5,000+",
      features: [
        "Lightweight SaaS-style application",
        "Core business logic & workflows",
        "User roles, session state, protected routes",
        "Deploy-ready with no external APIs"
      ],
      cta: "Start this build",
      highlight: false
    },
    {
      name: "Command — AI-Driven Platform",
      price: "$8,500+",
      features: [
        "AI features: assistants, webhooks, pipelines",
        "Authentication + authorization flows",
        "Database, platform-managed APIs, messaging",
        "Deploy included (optional admin UI)"
      ],
      cta: "Start this build",
      highlight: false
    }
  ],
  pricingFootnote: "All tiers include consultation, scoping, and post‑launch support. Every project is production‑ready, stable from day one, and designed to scale.",
  dummyNotice: "This page uses mock data only. The intake link is a placeholder."
};