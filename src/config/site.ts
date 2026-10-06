export const leadflowSite = {
  name: "LeadFlow HVAC",
  tagline: "Lead capture built for HVAC crews",
  demoCtaHref: "#demo",
  loginHref: "/login",
  dashboardHref: "/dashboard",
} as const;

export const landingContent = {
  headline: "Never Lose Another HVAC Lead",
  subheadline:
    "LeadFlow captures every website inquiry in one place so your office can respond in minutes—not hours. Built for owner-operators and growing HVAC teams across the US.",
  primaryCta: "Request a Demo",
  secondaryCta: "See how it works",
  features: [
    {
      title: "Website lead capture",
      description:
        "Embed a branded quote form on your site. Every submission lands in your dashboard instantly.",
      icon: "inbox" as const,
    },
    {
      title: "Pipeline at a glance",
      description:
        "Track new, contacted, and booked jobs without spreadsheets. Update status in one click.",
      icon: "pipeline" as const,
    },
    {
      title: "Built for field teams",
      description:
        "Mobile-friendly dashboard your dispatcher can use between calls—no training manual required.",
      icon: "mobile" as const,
    },
  ],
  steps: [
    {
      step: "1",
      title: "Connect your site",
      body: "Add the LeadFlow form to your HVAC website or use our demo ComfortPro site to test the flow.",
    },
    {
      step: "2",
      title: "Leads arrive organized",
      body: "Name, phone, service, ZIP, and preferred date—everything you need to call back fast.",
    },
    {
      step: "3",
      title: "Work your pipeline",
      body: "Mark leads contacted, qualified, or booked. See conversion metrics that matter to your shop.",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "For single-location shops getting serious about follow-up.",
      features: ["1 business location", "Unlimited form submissions", "Lead dashboard", "Email support"],
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$149",
      period: "/month",
      description: "For teams with a dispatcher and multiple techs in the field.",
      features: [
        "Everything in Starter",
        "Multiple user logins",
        "Priority support",
        "Custom form fields (coming soon)",
      ],
      highlighted: true,
    },
  ],
  footer: {
    company: "LeadFlow HVAC",
    blurb: "Simple lead management for heating and cooling professionals.",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "ComfortPro demo", href: "/comfortpro" },
      { label: "Login", href: "/login" },
    ],
  },
} as const;
