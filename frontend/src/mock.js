export const site = {
  brand: {
    name: "GoldLeaves",
    email: "projects@goldleaves.cloud",
    accent: "#BFA32F" // subtle gold
  },
  hero: {
    headline: "Custom Software. Clean Execution.",
    subtext: "Apps, dashboards, automations, and AI tools — shipped fast, built right.",
    ctaLabel: "Start a Project",
    ctaHref: "https://example.com/intake", // unused now; CTA handled inline
    secondaryCtaLabel: "Email us",
    secondaryCtaHref: "mailto:projects@goldleaves.cloud"
  },
  services: [
    { icon: "Code2", title: "Full‑stack product development" },
    { icon: "LayoutDashboard", title: "Dashboards & admin systems" },
    { icon: "Cpu", title: "AI integrations & intelligent tooling" },
    { icon: "CreditCard", title: "Subscriptions & payments" },
    { icon: "CloudCog", title: "API‑first platforms" },
    { icon: "Workflow", title: "Automations & workflows" }
  ],
  pricing: [
    {
      action: "Establish",
      descriptor: "Web Presence Starter",
      price: "$750+",
      features: [
        "Beautiful, fast‑loading single‑page website",
        "Custom domain (client‑provided or procured at added cost)",
        "Mobile‑responsive design",
        "Deployed and delivered with live hosting"
      ]
    },
    {
      action: "Expand",
      descriptor: "Business Site",
      price: "$1,500+",
      features: [
        "Multi‑page website (Home, About, Contact, Services)",
        "Custom contact form",
        "Basic branding integration (colors, logo, copy editing)",
        "Analytics + performance‑optimized"
      ]
    },
    {
      action: "Operate",
      descriptor: "Full‑stack Site with Admin",
      price: "$3,000+",
      features: [
        "Includes client dashboard (admin panel)",
        "CMS or basic content‑editing tools",
        "User auth, database integration, cloud‑hosted backend",
        "Deployed to scalable environment"
      ],
      recommended: true
    },
    {
      action: "Scale",
      descriptor: "Web App MVP",
      price: "$5,000+",
      features: [
        "Lightweight SaaS‑style application",
        "Core features fully functional (no external APIs)",
        "Includes mobile‑friendly frontend and backend",
        "Built with scalability in mind"
      ]
    },
    {
      action: "Command",
      descriptor: "Full SaaS or API‑Driven Platform",
      price: "$8,500+",
      features: [
        "Full‑stack platform with external API integrations",
        "Payments, user roles, notifications, etc.",
        "Deployment‑ready, client retains full IP rights",
        "Professional code quality, built to scale"
      ]
    }
  ],
  pricingFootnote: "All tiers include consultation, scoping, and post‑launch support. Every project is production‑ready, stable from day one, and designed to scale.",
  dummyNotice: "This page uses mock data only. The intake link is a placeholder."
};