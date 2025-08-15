export const site = {
  brand: {
    name: "GoldLeaves",
    email: "projects@goldleaves.cloud",
    accent: "#BFA32F", // subtle gold
    github: "https://github.com/Ghostmonday/goldleaves-site"
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
  // Refactored 3-tier pricing to match provided visual reference
  pricing: [
    {
      plan: "Starter",
      price: "$750",
      tagline: "You’re launching a new product",
      optionalLabel: "Optional",
      options: ["Admin dashboard", "Payment integration"],
      icon: "Rocket",
      accent: "#BFA32F", // gold
      tint: "#FFF6D9" // light gold tint
    },
    {
      plan: "Growth",
      price: "$2,500",
      tagline: "You’re replacing spreadsheets with real software",
      optionalLabel: "Optional",
      options: ["User logins", "Team workflows"],
      icon: "TrendingUp",
      accent: "#2563EB", // refined blue
      tint: "#EEF2FF" // soft indigo tint
    },
    {
      plan: "Scale",
      price: "$7,500+",
      tagline: "You’re building a complex system or platform",
      optionalLabel: "Optional",
      options: ["APIs & integrations", "Advanced analytics", "Priority support"],
      icon: "Database",
      accent: "#6B7280", // neutral gray
      tint: "#F3F4F6" // light gray tint
    }
  ],
  pricingFootnote: "All tiers include consultation, scoping, and post‑launch support. Every project is production‑ready, stable from day one, and designed to scale.",
  dummyNotice: "This page uses mock data only. The intake link is a placeholder."
};