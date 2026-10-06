export const comfortPro = {
  id: process.env.NEXT_PUBLIC_DEMO_BUSINESS_ID ?? "00000000-0000-4000-8000-000000000001",
  name: "ComfortPro HVAC",
  city: "Dallas, Texas",
  tagline: "24/7 Heating & Air Conditioning",
  phone: "(555) 123-4567",
  phoneTel: "+15551234567",
  email: "hello@comfortpro-hvac.demo",
  hours: {
    weekdays: "Mon–Fri: 7:00 AM – 7:00 PM",
    saturday: "Sat: 8:00 AM – 5:00 PM",
    sunday: "Sun: Emergency only",
    emergency: "24/7 emergency service available",
  },
  rating: {
    stars: "★★★★★",
    score: "4.9/5",
    label: "250+ Happy Customers",
  },
  hero: {
    headline: "24/7 HVAC Service You Can Count On",
    subheadline:
      "Fast, reliable heating and air conditioning service for homeowners throughout Dallas.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Call Now",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "HVAC technician servicing a residential air conditioning unit",
  },
  emergency: {
    headline: "AC or heating problem right now?",
    body: "Get same-day HVAC service from experienced technicians.",
    cta: "Request Emergency Service",
  },
  services: [
    {
      title: "AC Repair",
      description:
        "Restore cool air quickly with accurate diagnostics and lasting fixes—not temporary patches.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3faabfeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AC Installation",
      description:
        "Right-sized systems installed for efficiency, quieter operation, and year-round comfort.",
      image:
        "https://images.unsplash.com/photo-1631545806609-bec83c214ab0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AC Maintenance",
      description:
        "Seasonal tune-ups that prevent breakdowns, lower energy bills, and extend equipment life.",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Heating Repair",
      description:
        "Warm your home again with furnace and heat pump repairs from seasoned Dallas technicians.",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Furnace Installation",
      description:
        "Professional furnace replacements with clean installs, safety checks, and clear pricing.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Indoor Air Quality",
      description:
        "Filters, humidifiers, and purification options that help your family breathe easier.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    },
  ],
  whyChoose: [
    {
      title: "Licensed & experienced technicians",
      description: "Skilled pros who treat your home with care and explain options clearly.",
    },
    {
      title: "Same-day appointments",
      description: "When your system fails, we prioritize getting a tech to your door fast.",
    },
    {
      title: "Upfront pricing",
      description: "Know the cost before work begins—no surprise add-ons after the job.",
    },
    {
      title: "24/7 emergency service",
      description: "Nights, weekends, and holidays—we're ready when comfort can't wait.",
    },
    {
      title: "Satisfaction-focused service",
      description: "We don't leave until you're comfortable and confident in the repair.",
    },
  ],
  steps: [
    {
      step: "1",
      title: "Request Service",
      body: "Call or submit the quote form with your issue and preferred time.",
    },
    {
      step: "2",
      title: "Get a Fast Response",
      body: "Our Dallas dispatch team confirms details and schedules your visit.",
    },
    {
      step: "3",
      title: "Technician Arrives",
      body: "A licensed tech diagnoses the problem and shares clear options.",
    },
    {
      step: "4",
      title: "Problem Solved",
      body: "We complete the work, test the system, and leave your space tidy.",
    },
  ],
  testimonials: [
    {
      quote:
        "Our AC quit during a 100° afternoon. ComfortPro had a technician at our Plano home the same day and we were cool by evening.",
      author: "Rachel M.",
      location: "Plano, TX",
      note: "Demo review",
    },
    {
      quote:
        "Transparent quote on a furnace replacement—no pressure, no surprise fees. The install crew was respectful and thorough.",
      author: "Daniel K.",
      location: "Dallas, TX",
      note: "Demo review",
    },
    {
      quote:
        "We've used them for maintenance two summers in a row. Scheduling is easy and they always explain what they checked.",
      author: "Sofia R.",
      location: "Richardson, TX",
      note: "Demo review",
    },
  ],
  serviceAreas: ["Dallas", "Plano", "Irving", "Frisco", "Garland", "Richardson"],
  finalCta: {
    headline: "Need HVAC Service Today?",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Call Now",
  },
  form: {
    heading: "Request a Free Quote",
    intro:
      "Share a few details and our Dallas team will follow up quickly to schedule service.",
    submitLabel: "Get a Free Quote",
    successMessage:
      "Thank you. Your request was received. A ComfortPro HVAC team member will contact you shortly to confirm details.",
    services: [
      "AC Repair",
      "AC Installation",
      "AC Maintenance",
      "Heating Repair",
      "Furnace Installation",
      "Indoor Air Quality",
      "Emergency Service",
      "Other",
    ],
  },
} as const;
