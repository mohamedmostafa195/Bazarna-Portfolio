export interface StatItem {
  id: string;
  value: string;
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface VisitorGrowthItem {
  year: string;
  visitors: string;
  growthPercentage: number;
}

export interface PopUpConcept {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  highlights: string[];
  specs: string;
  editorialNote: string;
  image: string;
}

export interface RetailLocation {
  id: string;
  title: string;
  partner: string;
  location: string;
  description: string;
  highlights: string[];
  metrics: string;
  type: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
}

export interface PartnerCaseStudy {
  partner: string;
  concept: string;
  year: string;
  description: string;
  location: string;
  tag: string;
  image: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export const HERO_DATA = {
  brand: "BAZARNA",
  eyebrow: "SINCE 2010 • EGYPT'S LEADING POP-UP SOCIETY",
  headlineMain: "EGYPT'S LEADING POP-UP SOCIETY.",
  headlineAlt: "WHERE LOCAL BRANDS GROW.",
  subheadline: "Bazarna is Egypt's leading pop-up marketplace and brand growth platform, accelerating local brands through visibility, sales, real market traction, and meaningful community experiences.",
  ctaPrimary: "EXPLORE BAZARNA",
  ctaSecondary: "WORK WITH US",
};

export const ABOUT_DATA = {
  label: "01 — ABOUT BAZARNA",
  headline: "MORE THAN A MARKETPLACE.",
  quote: "Bazarna Pop-Up Society is Egypt's leading pop-up marketplace incubator, shaping local talent since 2010.",
  narrative1: "More than a marketplace, Bazarna is a movement where creativity, business, and community come together. We curate immersive pop-up experiences connecting emerging fashion, lifestyle, and homegrown brands with consumers.",
  narrative2: "Bazarna champions local talent and 'Made in Egypt', helping high-potential Egyptian brands launch, grow, thrive, and scale into enduring commercial powerhouses.",
  stages: [
    { label: "LAUNCH", desc: "Providing emerging brands their initial market stage and customer validation." },
    { label: "GROW", desc: "Accelerating sales volume and establishing strong brand equity." },
    { label: "THRIVE", desc: "Mastering retail operations, pricing psychology, and PR visibility." },
    { label: "SCALE", desc: "Expanding into permanent retail flagships and regional GCC markets." }
  ],
  pillars: [
    { label: "Emerging Brands", desc: "Incubating high-potential Egyptian creators from prototype to commercial longevity." },
    { label: "Fashion & Lifestyle", desc: "Curating premier contemporary apparel, artisanal jewelry, and lifestyle design." },
    { label: "Made in Egypt", desc: "Championing conscious consumer loyalty and elevating local craftsmanship standards." },
    { label: "Community & Culture", desc: "Fostering authentic human connection between founders and dedicated shoppers." }
  ]
};

export const VISION_MISSION_DATA = {
  vision: {
    title: "OUR VISION",
    headline: "THE REGIONAL BENCHMARK FOR BRAND ACCELERATION",
    statement: "To be the leading pop-up society and retail growth platform across the Middle East and North Africa—building an ecosystem where local creativity meets commercial excellence, sustainable retail success, and cross-border expansion.",
    keyPoints: [
      "Regional & MENA expansion from Egypt into high-spending GCC markets",
      "Pioneering innovative hybrid physical & experiential retail models",
      "Uncompromising curation standards and deep consumer trust",
      "Maximizing commercial longevity for high-potential local brands"
    ]
  },
  mission: {
    title: "OUR MISSION",
    headline: "NURTURING THE BRANDS OF TOMORROW",
    statement: "Helping high-potential local brands grow through curated retail solutions, immersive pop-up events, engaged shopper communities, continuous business education, and scalable commercial opportunities.",
    keyPoints: [
      "Curated retail solutions bridging pop-up validation to permanent leases",
      "Engaging hundreds of thousands of conscious, culture-driven shoppers",
      "Empowering founders through workshops, PR, and direct mentorship",
      "Co-creating memorable destination activations with tier-1 developers"
    ]
  }
};

export const STORY_DATA = {
  headline: "EVERY GREAT MOVEMENT BEGINS WITH A SPARK.",
  intro: "Bazarna began in 2010 when its founder transformed an empty apartment into a space where emerging designers could finally be seen, heard, and celebrated.",
  milestones: [
    {
      year: "2010",
      title: "The Empty Apartment Experience",
      description: "A young visionary transforms an empty Cairo apartment into a curated haven for emerging Egyptian designers to be seen, heard, and celebrated.",
      tag: "THE SPARK"
    },
    {
      year: "2015",
      title: "Scaling Community Pop-Ups",
      description: "Expanding into high-traffic urban cultural festivals, creating Egypt's defining weekend destination for local brand discovery.",
      tag: "POP-UPS"
    },
    {
      year: "2021",
      title: "Youth Volunteer Program & National Reach",
      description: "Formalizing brand incubation frameworks and launching the youth volunteer program, welcoming 50K+ visitors per season.",
      tag: "COMMUNITY"
    },
    {
      year: "2023 - 2024",
      title: "Luxury North Coast Retail",
      description: "Venturing into permanent physical retail with Emaar (The Store @ Marina Marassi) and BeFit (The Motion), capturing GCC & international footfall.",
      tag: "RETAIL"
    },
    {
      year: "2025 - 2026",
      title: "The Next Chapter: Permanent Flagships & MENA Expansion",
      description: "Translating 15 years of market testing into permanent retail flagships, Gen Z platforms, and regional GCC destinations.",
      tag: "EXPANSION"
    }
  ]
};

export const STATS_DATA: StatItem[] = [
  {
    id: "brands",
    value: "20K+",
    number: 20000,
    suffix: "+",
    label: "BRANDS HOSTED",
    sublabel: "SINCE 2010"
  },
  {
    id: "visitors",
    value: "25,000+",
    number: 25000,
    suffix: "+",
    label: "VISITORS PER EVENT",
    sublabel: "Averaging 25,000–30,000 engaged shoppers"
  },
  {
    id: "requests",
    value: "1,500+",
    number: 1500,
    suffix: "+",
    label: "EXHIBITOR REQUESTS",
    sublabel: "EVERY YEAR"
  },
  {
    id: "sales",
    value: "EGP 400K+",
    number: 400,
    suffix: "K+ EGP",
    label: "AVERAGE SALES",
    sublabel: "PER BRAND PER EVENT"
  }
];

export const VISITOR_GROWTH: VisitorGrowthItem[] = [
  { year: "2021", visitors: "50,000+", growthPercentage: 25 },
  { year: "2022", visitors: "120,000+", growthPercentage: 60 },
  { year: "2023", visitors: "150,000+", growthPercentage: 75 },
  { year: "2024", visitors: "170,000+", growthPercentage: 85 },
  { year: "2025", visitors: "200,000+", growthPercentage: 100 }
];

export const DIFFERENTIATION_PILLARS = [
  {
    number: "01",
    title: "LEADING POP-UP MARKETPLACE INCUBATOR",
    desc: "We don't simply rent booths; we curate, position, and accelerate emerging brands to transition into scalable, sustainable retail businesses."
  },
  {
    number: "02",
    title: "DEEP MARKET UNDERSTANDING",
    desc: "15 years of proprietary consumer buying patterns, vendor unit economics, and footfall metrics across Cairo and North Coast."
  },
  {
    number: "03",
    title: "COMMUNITY-LED, NOT TRANSACTION-LED",
    desc: "Deep consumer loyalty where shoppers attend for culture, connection, and discovery—resulting in high basket sizes and brand equity."
  },
  {
    number: "04",
    title: "PROVEN INTERNATIONAL EXPOSURE",
    desc: "Exporting Egyptian creativity to regional hubs, including featured showcases at Alserkal Avenue and Quoz Arts Fest in Dubai."
  },
  {
    number: "05",
    title: "ACCESS TO INTERNATIONAL SHOPPERS",
    desc: "Strategic flagship retail placements at prime summer destinations like Marina Marassi connecting brands with high-spending GCC and diaspora buyers."
  }
];

export const ECOSYSTEM_NODES = [
  {
    id: "popups",
    title: "POP-UPS",
    role: "Validation & Footfall Engine",
    description: "High-density experiential marketplaces that validate products, generate rapid revenue, and create instant brand awareness.",
    icon: "Layers"
  },
  {
    id: "retail",
    title: "RETAIL",
    role: "Permanent Commercial Presence",
    description: "Year-round luxury stores (The Store @ Marina Marassi) and seasonal concept hubs ensuring ongoing physical shelf presence.",
    icon: "Store"
  },
  {
    id: "workshops",
    title: "WORKSHOPS & PANELS",
    role: "Capability Building",
    description: "Masterclasses covering pricing, branding, marketing, unit economics, supply chain, and retail readiness.",
    icon: "GraduationCap"
  },
  {
    id: "consultancy",
    title: "CONSULTANCY & PR",
    role: "Targeted Positioning",
    description: "Dedicated advisory, influencer alignment, media placement, and brand packaging to ensure founders thrive.",
    icon: "Sparkles"
  },
  {
    id: "networking",
    title: "NETWORKING",
    role: "Capital & Industry Access",
    description: "Direct linkages connecting brand founders with real estate developers, investors, and commercial concessionaires.",
    icon: "Network"
  },
  {
    id: "community",
    title: "COMMUNITY BUILDING",
    role: "Cultural Foundation",
    description: "Youth volunteer incubation, mentorship, and creative collaborations fostering tomorrow's industry leaders.",
    icon: "Users"
  }
];

export const POPUP_CONCEPTS: PopUpConcept[] = [
  {
    id: "market",
    name: "THE MARKET",
    tagline: "Flagship Medium-to-Large Marketplace",
    category: "Flagship Pop-Up",
    description: "Bazarna's renowned flagship gathering bringing together over 100+ curated fashion, design, home, and lifestyle brands in a vibrant cultural setting.",
    highlights: ["25,000–30,000 Visitors", "Discovery & Live Culture", "Multi-Category Showcase"],
    specs: "Flagship Edition • Cairo Prime Venues",
    editorialNote: "The heart of Egyptian local brand discovery since 2010.",
    image: "/images/real_market.jpg"
  },
  {
    id: "youth",
    name: "B.YOUTH",
    tagline: "Youth-First Cultural Platform",
    category: "Next-Gen Concept",
    description: "A dynamic, energetic platform custom-engineered for Gen Z and Gen Alpha creators, streetwear designers, sneaker culture, and digital-first brands.",
    highlights: ["Gen Z & Alpha Curation", "Streetwear & Digital Trends", "Interactive Creative Hubs"],
    specs: "Youth Spaces • High Social Velocity",
    editorialNote: "Where the next generation of consumer culture is born.",
    image: "/images/youth_fashion.jpg"
  },
  {
    id: "outlet",
    name: "PREMIUM OUTLET",
    tagline: "Seasonal End-of-Season Engine",
    category: "High-Volume Retail",
    description: "Biannual Summer and Winter outlet events uniting 120+ established brands for high-velocity stock clearance, liquidity generation, and accessible luxury shopping.",
    highlights: ["120+ Established Brands", "Cash Flow & Stock Movement", "Biannual Summer & Winter"],
    specs: "High-Volume Turnover • Rapid Conversion",
    editorialNote: "A strategic mechanism solving retail seasonality and liquidity.",
    image: "/images/real_outlet.jpg"
  },
  {
    id: "expo",
    name: "THE EXPO",
    tagline: "Large-Scale Talent Exhibition",
    category: "Industry Exhibition",
    description: "Expansive multi-hall exhibitions uniting hundreds of emerging and established talents with industry leaders, commercial buyers, and venture investors.",
    highlights: ["Hundreds of Talents", "Investor & Buyer Matching", "Curated Educational Stages"],
    specs: "Mega Scale • B2B & B2C Integration",
    editorialNote: "The epicenter of creative industry commerce and scouting.",
    image: "/images/real_expo.jpg"
  },
  {
    id: "showcase",
    name: "THE SHOWCASE",
    tagline: "Storytelling & Fine Craftsmanship",
    category: "Curated Luxury",
    description: "An intimate, gallery-grade platform dedicated exclusively to exceptional artisanal craftsmanship, bespoke design pieces, and distinctive product narratives.",
    highlights: ["Artisanal Mastery", "Gallery-Style Curation", "Editorial Narratives"],
    specs: "Bespoke Exhibition • High-End Aesthetic",
    editorialNote: "Celebrating the pinnacle of Made-in-Egypt luxury craftsmanship.",
    image: "/images/real_showcase.jpg"
  },
  {
    id: "showroom",
    name: "THE SHOWROOM",
    tagline: "Curated Year-Round Retail Spaces",
    category: "Permanent Spaces",
    description: "Elegantly designed, continuously operating physical showrooms allowing emerging labels to maintain an ongoing presence in prime retail developments.",
    highlights: ["Ongoing Footfall", "Shared Prime Retail Overhead", "Turnkey Merchandising"],
    specs: "Permanent & Semi-Permanent Footprint",
    editorialNote: "Bridging the critical gap between weekend pop-up and permanent lease.",
    image: "/images/real_fashion.jpg"
  },
  {
    id: "bykidz",
    name: "BY KIDZ",
    tagline: "Junior Entrepreneurship & Family Playground",
    category: "Family & Junior Concept",
    description: "A tailored experiential zone fostering young entrepreneurial minds, junior-led business concepts, family activities, and children's lifestyle brands.",
    highlights: ["Junior Entrepreneurs", "Family-Friendly Activation", "Next-Gen Mentorship"],
    specs: "Family Experiential Zone",
    editorialNote: "Nurturing tomorrow's brand builders from an early age.",
    image: "/images/hero_market.jpg"
  }
];

export const RETAIL_SECTION = {
  headline: "FROM POP-UP TO RETAIL.",
  narrative: "Bazarna's retail concepts extend the brand-growth ecosystem beyond temporary markets into continuous physical commerce in Egypt's most exclusive destinations.",
  store: {
    title: "THE STORE",
    partner: "In Partnership with Emaar",
    location: "Marina Marassi, North Coast",
    description: "A premium retail concept showcasing selected local luxury labels with local roots and global potential, directly catering to high-spending GCC, diaspora, and international summer shoppers.",
    highlights: [
      "Exclusive Emaar Marina Marassi waterfront location",
      "High-spending GCC and international clientele",
      "Curated luxury apparel, fine jewelry, resort-wear, and accessories",
      "Turnkey visual merchandising and full retail management"
    ],
    image: "/images/real_marassi.jpg"
  },
  motion: {
    title: "THE MOTION",
    partner: "In Partnership with BeFit",
    location: "BeFit Marassi, North Coast",
    description: "A seasonal retail space launched at BeFit Marina Marassi, custom-designed for local activewear, athleisure, and lifestyle brands centered around peak fitness footfall.",
    highlights: [
      "Prime positioning inside Egypt's premier fitness hub",
      "25m² optimized boutique footprint with maximum footfall conversion",
      "Curated activewear, performance gear, and wellness labels",
      "Direct exposure to fitness enthusiasts and lifestyle tastemakers"
    ],
    image: "/images/marassi_store.jpg"
  },
  performance: {
    brands: "38+",
    brandsLabel: "CURATED BRANDS",
    orders: "1,600+",
    ordersLabel: "ORDERS IN SUMMER SEASON",
    sales: "8.5M",
    salesSuffix: "EGP",
    salesLabel: "TOTAL SUMMER SALES",
    summary: "Proven retail velocity converting summer footfall into verifiable sales volume."
  }
};

export const SERVICES_SECTION = {
  headline: "WE DON'T JUST CREATE EXPOSURE. WE HELP BRANDS GROW.",
  intro: "Providing emerging and established Egyptian brands with the educational tools, targeted PR, and annual partnerships necessary to achieve sustainable scale.",
  services: [
    {
      id: "workshops",
      title: "WORKSHOPS & PANELS",
      category: "Capability Building",
      summary: "Intensive, practical educational modules giving founders direct operational and commercial clarity.",
      details: [
        "Marketing & Social Commerce Strategy",
        "Brand Identity & Visual Storytelling",
        "Costing, Unit Economics & Pricing Psychology",
        "Operations & Inventory Scaling",
        "Business Planning & Expansion Roadmaps"
      ]
    },
    {
      id: "consultancy",
      title: "CONSULTANCY & PR",
      category: "Strategic Growth",
      summary: "Dedicated 1-on-1 advisory to refine brand voice, elevate customer touchpoints, and amplify media presence.",
      details: [
        "Brand Voice & Editorial Aesthetic",
        "Go-to-Market Strategy & Seasonal Launches",
        "Targeted PR Campaigns & Media Placement",
        "Influencer Alignment & Strategic Seeding",
        "Storytelling with Authentic Cultural Resonance"
      ]
    },
    {
      id: "partnerships",
      title: "EXCLUSIVE BRAND PARTNERSHIPS",
      category: "Annual Accelerator",
      summary: "A structured annual acceleration program for high-potential local brands ready for exponential market expansion.",
      details: [
        "Dedicated Strategic Consultancy Sessions",
        "Preferential & Discounted Event Participation",
        "Priority Placement in Curated Retail Concepts",
        "Integrated Social Media & PR Amplification",
        "Direct Introduction to Real Estate & Commercial Partners"
      ]
    },
    {
      id: "community-csr",
      title: "NETWORKING, CSR & COMMUNITY BUILDING",
      category: "Cultural Impact",
      summary: "Facilitating impactful connections, sustainable production practices, and creative industry collaborations across the region.",
      details: [
        "Founder-to-Founder Masterminds & Mixers",
        "CSR Initiatives & Sustainable Production Advocacy",
        "Direct Linkage with Commercial Developers",
        "Creative Industry Collaborative Projects"
      ]
    }
  ]
};

export const PARTNERSHIPS_SECTION = {
  headline: "PARTNERSHIPS THAT CREATE IMPACT.",
  intro: "Selected collaborations and concepts created with leading developers, creative districts, and luxury destinations.",
  caseStudies: [
    {
      partner: "Emaar",
      concept: "The Store @ Marina Marassi",
      year: "2023 - Present",
      location: "North Coast, Egypt",
      tag: "LUXURY RETAIL",
      description: "Co-creating a multi-brand physical luxury destination at Marina Marassi, connecting selective Egyptian designers with elite GCC and summer clientele.",
      image: "/images/real_marassi.jpg"
    },
    {
      partner: "District 5 (Marakez) / RiseUp",
      concept: "RiseUp Retail & Design Pop-Up",
      year: "2023 - 2024",
      location: "East Cairo",
      tag: "URBAN ACTIVATION",
      description: "Activating modern mixed-use lifestyle corridors, combining entrepreneurial summits with curated homegrown consumer marketplaces.",
      image: "/images/real_expo.jpg"
    },
    {
      partner: "Cairo Design Week",
      concept: "Official Design Showcase",
      year: "2023 - 2024",
      location: "Heliopolis & Citadel",
      tag: "CULTURAL PARTNERSHIP",
      description: "Curating the official design marketplace for Egypt's flagship creative design festival, spotlighting exceptional local craft.",
      image: "/images/real_showcase.jpg"
    },
    {
      partner: "Quoz Arts Fest (Alserkal Avenue)",
      concept: "The Showcase Dubai",
      year: "2024 - 2025",
      location: "Dubai, UAE",
      tag: "REGIONAL EXPOSURE",
      description: "Taking top Egyptian fashion, jewelry, and artisanal labels to Dubai's premier cultural district during Quoz Arts Fest.",
      image: "/images/real_fashion.jpg"
    },
    {
      partner: "Walk of Cairo",
      concept: "Open-Air Luxury Market",
      year: "2022 - 2024",
      location: "Sheikh Zayed",
      tag: "DESTINATION RETAIL",
      description: "Open-air luxury seasonal markets capturing West Cairo's most affluent, design-conscious demographic.",
      image: "/images/hero_market.jpg"
    },
    {
      partner: "HB Shop",
      concept: "Curated Merchandising Collaboration",
      year: "2023",
      location: "Cairo",
      tag: "FASHION CURATION",
      description: "Collaborative retail showcases and curated merchandising activations spotlighting contemporary fashion creators.",
      image: "/images/real_outlet.jpg"
    }
  ],
  approach: [
    { number: "01", title: "SELECTIVE BY DESIGN", desc: "Every participating brand is rigorously curated to maintain high standards of originality, quality, and aesthetic resonance." },
    { number: "02", title: "STRATEGIC GROWTH", desc: "Focusing on tangible commercial outcomes: verifiable sales volumes, brand elevation, and long-term business scalability." },
    { number: "03", title: "CO-CREATED EXPERIENCES", desc: "Every pop-up, showroom, and retail space is custom-tailored to seamlessly harmonize with its host destination." },
    { number: "04", title: "COMMUNITY & AUDIENCE ALIGNMENT", desc: "15 years of demographic insights ensure optimal alignment between partner brands and our high-intent audience." },
    { number: "05", title: "COMMERCIAL & BRAND IMPACT", desc: "Balancing authentic cultural credibility with high customer basket sizes and proven retail turnover." },
    { number: "06", title: "PROVEN EXECUTION", desc: "Full-service on-ground management, visual merchandising, logistics, and guest hospitality backed by hundreds of editions." }
  ]
};

export const COMMUNITY_SECTION = {
  headline: "BUILT AROUND COMMUNITY.",
  intro: "At its core, Bazarna is about human connection. We bring together a diverse, passionate network uniting shoppers, creatives, entrepreneurs, local brands, volunteers, and corporate partners.",
  pillars: [
    { title: "Conscious Shoppers", count: "200K+ Annual", desc: "An engaged audience actively seeking and championing Made in Egypt." },
    { title: "Creative Entrepreneurs", count: "20,000+ Brands", desc: "The visionary founders building Egypt's contemporary lifestyle economy." },
    { title: "Youth Volunteers", count: "Est. 2021", desc: "Passionate students gaining immersive operational and event leadership experience." },
    { title: "Strategic Partners", count: "Top Tier", desc: "Developers and brands seeking authentic cultural footfall and retail relevance." }
  ],
  volunteerProgram: {
    yearStarted: "2021",
    title: "The Bazarna Volunteer & Youth Incubator",
    summary: "Launched in 2021, the Bazarna Volunteer Program provides passionate students and young professionals with immersive, real-world operational and marketing experience in the heart of Egypt's fastest-growing events.",
    benefits: [
      "Hands-on event operations, floor management, and crowd dynamics",
      "Direct mentorship and interaction with 100+ business founders",
      "Skill development in customer service, sales, visual merchandising, and PR",
      "Accelerated market exposure and career pathway opportunities"
    ]
  }
};

export const FOUNDER_DATA = {
  sectionTitle: "MEET THE FOUNDER",
  name: "Yasmine Medhat",
  role: "Founder & CEO, Bazarna Pop-Up Society",
  vision: "Transforming an empty apartment into Egypt's premier pop-up incubator and cultural growth engine.",
  bioParagraph1: "In 2010, Yasmine Medhat identified a fundamental void in the Egyptian retail market: exceptional local designers and emerging talents had creative brilliance but lacked accessible, high-traffic commercial platforms to showcase their work.",
  bioParagraph2: "Beginning with an intimate pop-up organized inside an empty apartment, Yasmine founded Bazarna. Through 15 consecutive years of relentless curation, authentic community building, and strategic expansion, she grew Bazarna into Egypt's leading pop-up growth platform—hosting over 20,000 brands and welcoming hundreds of thousands of visitors annually.",
  bioParagraph3: "Under her leadership, Bazarna has evolved beyond pop-up markets into permanent retail hubs at Marina Marassi, active lifestyle concept stores with BeFit, youth innovation platforms, and comprehensive incubation services shaping the future of MENA retail.",
  image: "/images/real_yasmine_medhat.jpg"
};

export const PRESS_DATA = [
  {
    outlet: "Bazarna Press",
    badge: "Official Publication",
    headline: "Documenting the rise and cultural evolution of Egypt's homegrown brand movement."
  },
  {
    outlet: "G Talks",
    badge: "Keynote & Panel",
    headline: "Spotlighting female entrepreneurship, creative industry resilience, and retail innovation."
  },
  {
    outlet: "EE Awards",
    badge: "Ecosystem Recognition",
    headline: "Celebrated among Egypt's foremost entrepreneurship and creative ecosystem leaders."
  },
  {
    outlet: "StartupScene",
    badge: "Industry Feature",
    headline: "How Bazarna built an enduring 15-year platform powering the modern local retail economy."
  }
];

export const EXPANSION_2026 = {
  badge: "THE NEXT CHAPTER",
  headline: "2026 — THE NEXT CHAPTER.",
  subheadline: "After 15 years of market testing and validating retail through pop-up experiences, Bazarna is expanding its retail presence into permanent flagship destinations and regional MENA growth.",
  directions: [
    {
      number: "01",
      title: "BAZARNA FLAGSHIP",
      desc: "The flagship permanent concept reflecting the full market experience, cultural energy, and multi-category discovery in Cairo's prime developments."
    },
    {
      number: "02",
      title: "THE STORE EXPANSION",
      desc: "Expanding the curated luxury concept from Marina Marassi to year-round urban flagship locations for established and high-end labels."
    },
    {
      number: "03",
      title: "YOUTH-FOCUSED CONCEPT",
      desc: "Dedicated physical and digital retail environments custom-engineered to engage Gen Z with streetwear, sneakers, and digital-first brands."
    }
  ]
};

export const FINAL_CTA = {
  headline: "LET'S BUILD WHAT'S NEXT.",
  supportingText: "Whether you're a brand, partner, retailer, or creative, there's a place for you in the Bazarna ecosystem.",
  ctaPrimary: "PARTNER WITH BAZARNA",
  ctaSecondary: "JOIN OUR COMMUNITY"
};

export const FOOTER_DATA = {
  brand: "BAZARNA",
  tagline: "Egypt's Leading Pop-Up Growth Platform",
  description: "Accelerating local brands through visibility, sales, and real market traction since 2010.",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Pop-Ups", href: "#popups" },
    { label: "Retail", href: "#retail" },
    { label: "Services", href: "#services" },
    { label: "Partnerships", href: "#partnerships" },
    { label: "Community", href: "#community" },
    { label: "Founder", href: "#founder" }
  ],
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/bazarnasociety", target: "_blank" },
    { label: "TikTok", href: "#", target: "_blank" },
    { label: "LinkedIn", href: "#", target: "_blank" }
  ],
  copyright: `© ${new Date().getFullYear()} Bazarna Pop-Up Society. All rights reserved.`
};
