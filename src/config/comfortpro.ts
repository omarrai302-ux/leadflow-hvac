export const comfortPro = {
  id: process.env.NEXT_PUBLIC_DEMO_BUSINESS_ID ?? "00000000-0000-4000-8000-000000000001",
  name: "ComfortPro HVAC",
  city: "Dallas, Texas",
  tagline: "24/7 Heating & Air Conditioning",
  phone: "(555) 123-4567",
  phoneTel: "+15551234567",
  email: "service@comfortprohvac.demo",
  hours: {
    weekdays: "Mon–Fri: 7:00 AM – 7:00 PM",
    saturday: "Sat: 8:00 AM – 5:00 PM",
    sunday: "Sun: Emergency only",
    emergency: "24/7 emergency service available",
  },
  rating: {
    stars: "★★★★★",
    score: "4.9/5",
    label: "Sample rating for demonstration",
  },
  hero: {
    badge: "24/7 Emergency Service · Dallas, TX",
    headline: "HVAC Repair, Installation & Emergency Service in Dallas",
    subheadline:
      "Fast AC and heating service for homeowners across Dallas and the DFW metroplex—same-day appointments when available.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Call Now",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "HVAC technician servicing a residential air conditioning unit",
  },
  trustItems: [
    "Licensed technicians",
    "Same-day service",
    "Upfront pricing",
    "24/7 emergency",
    "DFW coverage",
  ],
  emergency: {
    headline: "AC or heating problem right now?",
    body: "Request emergency HVAC service and our Dallas team will follow up quickly to get a technician scheduled.",
    cta: "Request Emergency Service",
  },
  services: [
    {
      title: "AC Repair",
      description:
        "Restore cool air with thorough diagnostics and lasting repairs for Dallas summers.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3faabfeb?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Technician working on HVAC equipment",
    },
    {
      title: "AC Installation",
      description:
        "Right-sized central air and heat pump installs built for DFW heat and efficiency.",
      image:
        "https://images.unsplash.com/photo-1631545806609-bec83c214ab0?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Outdoor air conditioning condenser unit",
    },
    {
      title: "AC Maintenance",
      description:
        "Seasonal tune-ups that help prevent breakdowns and keep energy costs in check.",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Tools used for HVAC maintenance",
    },
    {
      title: "Heating Repair",
      description:
        "Furnace and heat pump repairs so your home stays warm through North Texas winters.",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
      imageAlt: "HVAC professional inspecting a residential system",
    },
    {
      title: "Furnace Installation",
      description:
        "Clean furnace replacements with safety checks and clear, upfront pricing.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Home heating and cooling ductwork",
    },
    {
      title: "Indoor Air Quality",
      description:
        "Filters, humidifiers, and purification options for cleaner, more comfortable air.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Clean home interior representing better indoor air quality",
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
      description: "Nights, weekends, and holidays—ready when comfort can't wait.",
    },
    {
      title: "Satisfaction-focused service",
      description: "We don't leave until you're comfortable and confident in the repair.",
    },
    {
      title: "Local Dallas team",
      description: "Familiar with DFW homes, weather swings, and common system issues.",
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
        "Sample review: Homeowner needed same-day AC help during peak summer heat in Plano.",
      author: "Sample Homeowner A",
      location: "Plano, TX",
      note: "Sample review — for demonstration only",
    },
    {
      quote:
        "Sample review: Clear quote and professional install communication for a furnace replacement in Dallas.",
      author: "Sample Homeowner B",
      location: "Dallas, TX",
      note: "Sample review — for demonstration only",
    },
    {
      quote:
        "Sample review: Routine maintenance visit described as on-time, thorough, and easy to schedule.",
      author: "Sample Homeowner C",
      location: "Richardson, TX",
      note: "Sample review — for demonstration only",
    },
  ],
  serviceAreas: [
    "Dallas",
    "Plano",
    "Irving",
    "Frisco",
    "Garland",
    "Richardson",
    "Arlington",
    "Mesquite",
    "Carrollton",
  ],
  finalCta: {
    headline: "Need HVAC Service in Dallas Today?",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Call Now",
  },
  form: {
    heading: "Request a Free Quote",
    intro:
      "Tell us what you need. Our Dallas team typically follows up quickly to confirm details and schedule service.",
    cardTitle: "Service request",
    cardHint: "Takes about 1 minute · We’ll confirm by phone or email",
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
