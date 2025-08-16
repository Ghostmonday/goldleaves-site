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
  deliverables: [
    { icon: "check", title: "Launched product at your domain", note: "Live. Hosted. Working. No ‘Coming Soon’ nonsense." },
    { icon: "key", title: "You keep the keys", note: "Admin access. Source code. Infra handoff. It’s yours." },
    { icon: "lab", title: "Tested and deployed", note: "Not ‘a build.’ A deployed, working, error‑free app." },
    { icon: "doc", title: "Docs you’ll actually read", note: "Simple instructions. No jungle of Notion pages." },
    { icon: "target", title: "Built to your spec — or better", note: "We don’t overpromise. We overdeliver." },
    { icon: "clock", title: "Launch in days, not months", note: "We’ve done 10‑day MVPs. And we slept." },
  ],
  // limit how many result pills show on mobile (smaller than sm). Show all on sm+.
  resultPillsMobileMax: 3,
  // 3-tier pricing (Starter / Growth / Scale)
  pricing: [
    {
      plan: "Starter",
      price: "$750",
      tagline: "You’re launching a new product",
      optionalLabel: "Optional",
      options: ["Admin dashboard", "Payment integration"],
      icon: "Rocket",
      accent: "#BFA32F", // gold
      tint: "#FFF6D9", // light gold tint
      quote: "“Delivered in days — we launched on schedule.” — Founder, consumer app"
    },
    {
      plan: "Growth",
      price: "$2,500",
      tagline: "You’re replacing spreadsheets with real software",
      optionalLabel: "Optional",
      options: ["User logins", "Team workflows"],
      icon: "TrendingUp",
      accent: "#2563EB", // refined blue
      tint: "#EEF2FF", // soft indigo tint
      quote: "“Clean build, clean handoff. Exactly what we needed.” — Ops lead"
    },
    {
      plan: "Scale",
      price: "$7,500+",
      tagline: "You’re building a complex system or platform",
      optionalLabel: "Optional",
      options: ["APIs & integrations", "Advanced analytics", "Priority support"],
      icon: "Database",
      accent: "#6B7280", // neutral gray
      tint: "#F3F4F6", // light gray tint
      quote: "“Handled complexity without drama.” — CTO, B2B SaaS"
    }
  ],
  pricingFootnote: "All tiers include consultation, scoping, and post‑launch support. Every project is production‑ready, stable from day one, and designed to scale.",
  dummyNotice: "This page uses mock data only. The intake link is a placeholder."
};