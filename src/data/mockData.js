export const INITIAL_EVENTS = [
  {
    id: "bazarna-summer-26",
    title: "Bazarna Summer Expo 2026",
    tagline: "The Grand Summer Gathering for Egypt's Top Local Brands",
    date: "2026-08-14",
    endDate: "2026-08-16",
    time: "4:00 PM - 11:00 PM",
    venue: "District 5 Promenade",
    city: "New Cairo",
    locationUrl: "https://maps.google.com",
    status: "Featured",
    category: "Summer Expo",
    ticketPrice: 150,
    vipTicketPrice: 350,
    bannerImage: "https://images.unsplash.com/photo-1531058240690-006c446962d8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472653431158-6364773b2a5c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Join us for 3 days of vibrant summer shopping, live music performance, gourmet culinary delights, and over 120 of Egypt's finest local fashion, jewelry, and lifestyle brands.",
    totalBooths: 90,
    availableBooths: 14,
    highlights: [
      "120+ Verified Local Brands",
      "Live Acoustic & DJ Sunset Sessions",
      "Interactive Kids Pottery & Painting Corner",
      "VIP Lounge & Gourmet F&B Alley"
    ]
  },
  {
    id: "bazarna-sahel-26",
    title: "Bazarna Sahel Sunset Pop-Up",
    tagline: "Beachside Shopping & Sunset Vibe at Marassi",
    date: "2026-07-30",
    endDate: "2026-08-01",
    time: "5:00 PM - 1:00 AM",
    venue: "Marassi Clubhouse & Beach Lounge",
    city: "North Coast",
    locationUrl: "https://maps.google.com",
    status: "Selling Fast",
    category: "Beach Pop-Up",
    ticketPrice: 250,
    vipTicketPrice: 500,
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The ultimate beachside bazaar experience in Sahel! Exclusive summer resort wear, handcrafted swimwear accessories, tropical cocktails, and seaside ambiance.",
    totalBooths: 55,
    availableBooths: 4,
    highlights: [
      "Exclusive Beachwear & Resort Collections",
      "Sunset Cocktail Lounge",
      "Sunset Live Saxophone Show",
      "Complimentary Beach Bag for First 200 Visitors"
    ]
  },
  {
    id: "bazarna-autumn-26",
    title: "Bazarna Autumn Fashion & Living",
    tagline: "Discover Cozy Home Decor, Artisanal Leather & Fall Fashion",
    date: "2026-10-10",
    endDate: "2026-10-12",
    time: "2:00 PM - 10:00 PM",
    venue: "Walk of Cairo Open Arena",
    city: "Sheikh Zayed",
    locationUrl: "https://maps.google.com",
    status: "Upcoming",
    category: "Fashion & Home",
    ticketPrice: 120,
    vipTicketPrice: 300,
    bannerImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Celebrate the autumn season with handcrafted ceramic tablewares, cozy Egyptian cotton home textiles, genuine leather accessories, and warm artisanal coffee.",
    totalBooths: 110,
    availableBooths: 42,
    highlights: [
      "Fall/Winter Local Brand Launches",
      "Artisanal Coffee & Bakery Pavilions",
      "Live Ceramic & Leather Crafts Demo",
      "Free Styling Advice Sessions"
    ]
  },
  {
    id: "bazarna-winter-25",
    title: "The Grand Christmas & Winter Bazaar",
    tagline: "Magic, Lights, and Festive Holiday Gifting",
    date: "2025-12-15",
    endDate: "2025-12-18",
    time: "1:00 PM - 11:00 PM",
    venue: "Hyde Park Central Gardens",
    city: "New Cairo",
    locationUrl: "https://maps.google.com",
    status: "Past",
    category: "Festive Market",
    ticketPrice: 150,
    vipTicketPrice: 350,
    bannerImage: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1543589077-47d51996477a?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Our landmark annual winter celebration featuring 140+ brands, giant Christmas tree lighting, carols, hot chocolate, and holiday gift hampers.",
    totalBooths: 140,
    availableBooths: 0,
    highlights: [
      "140+ Local Egyptian Vendors",
      "Giant Christmas Tree & Carols",
      "Santa Gift Giving for Kids",
      "Holiday Food Truck Village"
    ]
  }
];

export const INITIAL_BRANDS = [
  {
    id: "brand-1",
    name: "Nevin Altmann",
    category: "Handmade & Bags",
    instagram: "@nevinaltmann",
    instagramUrl: "https://instagram.com/bazarnasociety",
    logo: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=80",
    description: "Traditional Sinai & Nubian embroidery reimagined into modern high-fashion tote bags, cushions, and jackets.",
    rating: 4.9,
    featuredIn: ["bazarna-summer-26", "bazarna-sahel-26"],
    origin: "Cairo, Egypt",
    priceRange: "1,200 - 4,500 EGP",
    boothAssigned: "A-04",
    verified: true
  },
  {
    id: "brand-2",
    name: "Jude Benhalim Jewelry",
    category: "Jewelry & Accessories",
    instagram: "@jude.benhalim",
    instagramUrl: "https://instagram.com/bazarnasociety",
    logo: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80",
    description: "Architectural silver & gold-plated jewelry inspired by calligraphic lines and bold geometric silhouettes.",
    rating: 5.0,
    featuredIn: ["bazarna-summer-26", "bazarna-sahel-26"],
    origin: "Giza, Egypt",
    priceRange: "2,500 - 8,000 EGP",
    boothAssigned: "VIP-01",
    verified: true
  },
  {
    id: "brand-3",
    name: "Inca & Co.",
    category: "Home Decor & Living",
    instagram: "@incandco",
    instagramUrl: "https://instagram.com/bazarnasociety",
    logo: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
    description: "Bohemian luxury printed textiles, throw pillows, rugs, and outdoor leisure furniture crafted in Egypt.",
    rating: 4.8,
    featuredIn: ["bazarna-summer-26", "bazarna-autumn-26"],
    origin: "Maadi, Cairo",
    priceRange: "800 - 6,000 EGP",
    boothAssigned: "B-12",
    verified: true
  },
  {
    id: "brand-4",
    name: "Opio Apparel",
    category: "Fashion",
    instagram: "@opio.apparel",
    instagramUrl: "https://instagram.com/bazarnasociety",
    logo: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=400&q=80",
    description: "Effortless everyday linen shirts, summer co-ords, and minimalist loungewear made from premium Egyptian cotton.",
    rating: 4.9,
    featuredIn: ["bazarna-summer-26", "bazarna-sahel-26"],
    origin: "Heliopolis, Cairo",
    priceRange: "950 - 2,800 EGP",
    boothAssigned: "A-08",
    verified: true
  },
  {
    id: "brand-5",
    name: "Up-fuse",
    category: "Sustainable Fashion",
    instagram: "@upfuse",
    instagramUrl: "https://instagram.com/bazarnasociety",
    logo: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80",
    description: "Eco-friendly backpacks, beach bags, and sneakers handcrafted by local Egyptian artisans using recycled plastic bags.",
    rating: 4.9,
    featuredIn: ["bazarna-summer-26"],
    origin: "Zamalek, Cairo",
    priceRange: "1,100 - 3,200 EGP",
    boothAssigned: "C-02",
    verified: true
  },
  {
    id: "brand-6",
    name: "Urban Earth Pottery",
    category: "Handmade & Ceramics",
    instagram: "@urbanearthpottery",
    instagramUrl: "https://instagram.com/bazarnasociety",
    logo: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80",
    description: "Hand-thrown ceramic mugs, dinnerware sets, and botanical vases fired in Fayoum pottery villages.",
    rating: 4.7,
    featuredIn: ["bazarna-autumn-26"],
    origin: "Fayoum / Cairo",
    priceRange: "350 - 2,400 EGP",
    boothAssigned: "B-05",
    verified: true
  },
  {
    id: "brand-7",
    name: "Raw Organics",
    category: "Beauty & Wellness",
    instagram: "@raworganics.eg",
    instagramUrl: "https://instagram.com/bazarnasociety",
    logo: "https://images.unsplash.com/photo-1608248597266-c89050df9c15?auto=format&fit=crop&w=400&q=80",
    description: "Cold-pressed Egyptian jojoba oils, honey face masks, whipped shea body butters, and organic summer sunblocks.",
    rating: 4.9,
    featuredIn: ["bazarna-summer-26", "bazarna-sahel-26"],
    origin: "Alexandria, Egypt",
    priceRange: "250 - 950 EGP",
    boothAssigned: "C-09",
    verified: true
  },
  {
    id: "brand-8",
    name: "Culina Gourmet Bakes",
    category: "Food & Gourmet",
    instagram: "@culinabakes",
    instagramUrl: "https://instagram.com/bazarnasociety",
    logo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    description: "Artisanal sourdough breads, pistachio knafeh croissants, dark chocolate babka, and specialty matcha drinks.",
    rating: 5.0,
    featuredIn: ["bazarna-summer-26", "bazarna-sahel-26"],
    origin: "New Cairo",
    priceRange: "120 - 450 EGP",
    boothAssigned: "F-01",
    verified: true
  }
];

export const BOOTH_TIERS = [
  {
    id: "standard",
    name: "Standard Exhibitor Booth",
    size: "2m x 2m Space",
    price: 7500,
    currency: "EGP",
    features: [
      "1 Wood Display Table (180x80cm) + 2 Folding Chairs",
      "Branded Booth Backdrop & Header Signboard",
      "Dedicated 220V Power Outlet (Up to 1000W)",
      "2 Exhibitor Badges & Parking Passes",
      "Listed in Official Bazarna Visitor Directory"
    ],
    recommendedFor: "Accessories, Jewelry, Skincare & Small Fashion Boutiques",
    badge: "Popular"
  },
  {
    id: "corner",
    name: "Premium Corner Booth",
    size: "3m x 3m Corner Space",
    price: 12000,
    currency: "EGP",
    features: [
      "Dual Open Sides (Maximum Visitor Footfall & Visibility)",
      "2 Wood Display Tables + 4 Chairs + Clothing Racks",
      "Overhead Spotlight Track Lighting Included",
      "Dedicated 220V Power Outlet (Up to 2500W)",
      "4 Exhibitor Badges & VIP Parking",
      "Featured Brand Post on Bazarna Instagram (100k+ Reach)"
    ],
    recommendedFor: "Apparel Brands, Home Decor & High-Volume Vendors",
    badge: "High Visibility"
  },
  {
    id: "food_kiosk",
    name: "Food & Beverage Kiosk Space",
    size: "3m x 3m Dedicated F&B Zone",
    price: 15000,
    currency: "EGP",
    features: [
      "Heavy Duty 3-Phase Electrical Supply (Refrigerators & Ovens)",
      "Water Supply & Waste Disposal Hookup Access",
      "Food Safety Inspection Badge Provided",
      "Counter Table Setup & Menu Board Stand",
      "6 Exhibitor Staff Badges",
      "Prominent Spot in Bazarna Food Village"
    ],
    recommendedFor: "Gourmet Bakers, Specialty Coffee, Artisanal Ice Cream & Bites",
    badge: "F&B Only"
  },
  {
    id: "pavilion",
    name: "Flagship Brand Pavilion",
    size: "6m x 3m Island Space",
    price: 22000,
    currency: "EGP",
    features: [
      "Four-Sided Open Island Pavilion at Main Entrance",
      "Custom Booth Construction Allowance & Support",
      "Dedicated High-Speed Wi-Fi for POS Machines",
      "Custom DJ Shoutouts & Social Media Live Story Feature",
      "8 VIP Badges + Dedicated Storage Locker Room",
      "Sponsor Logo on Official Bazarna Entrance Arch"
    ],
    recommendedFor: "Established Luxury Brands & Major Flagship Activations",
    badge: "VIP Flagship"
  }
];

export const INITIAL_VENDOR_APPLICATIONS = [
  {
    id: "BZ-APP-9021",
    brandName: "L'Atelier Ceramic",
    applicantName: "Salma El-Sayed",
    email: "salma@latelier.eg",
    phone: "+20 100 123 4567",
    instagram: "@latelier_ceramics",
    category: "Handmade & Ceramics",
    eventId: "bazarna-summer-26",
    eventTitle: "Bazarna Summer Expo 2026",
    boothTierId: "standard",
    boothTierName: "Standard Exhibitor Booth",
    price: 7500,
    paymentMethod: "InstaPay",
    paymentReference: "INSTA-99482103",
    status: "Approved",
    assignedBooth: "B-09",
    appliedAt: "2026-07-10T14:20:00Z",
    notes: "Requires 1 extra table for vase display"
  },
  {
    id: "BZ-APP-9022",
    brandName: "Karkadeh Organic Brews",
    applicantName: "Youssef Mansour",
    email: "youssef@karkadeh.com",
    phone: "+20 111 987 6543",
    instagram: "@karkadeh_brews",
    category: "Food & Gourmet",
    eventId: "bazarna-summer-26",
    eventTitle: "Bazarna Summer Expo 2026",
    boothTierId: "food_kiosk",
    boothTierName: "Food & Beverage Kiosk Space",
    price: 15000,
    paymentMethod: "Vodafone Cash",
    paymentReference: "VF-0100988772",
    status: "Pending",
    assignedBooth: null,
    appliedAt: "2026-07-18T10:15:00Z",
    notes: "Needs 3-phase outlet for ice machine"
  },
  {
    id: "BZ-APP-9023",
    brandName: "Nomad Silver & Stones",
    applicantName: "Mariam Khedr",
    email: "mariam@nomadsilver.eg",
    phone: "+20 122 444 3322",
    instagram: "@nomad_silver",
    category: "Jewelry & Accessories",
    eventId: "bazarna-sahel-26",
    eventTitle: "Bazarna Sahel Sunset Pop-Up",
    boothTierId: "corner",
    boothTierName: "Premium Corner Booth",
    price: 12000,
    paymentMethod: "Credit Card",
    paymentReference: "CARD-AUTH-88712",
    status: "Approved",
    assignedBooth: "VIP-03",
    appliedAt: "2026-07-15T09:40:00Z",
    notes: "Requires spotlight lighting for silver display"
  }
];

export const INITIAL_TICKETS = [
  {
    id: "BZ-TKT-88401",
    eventId: "bazarna-summer-26",
    eventTitle: "Bazarna Summer Expo 2026",
    venue: "District 5 Promenade, New Cairo",
    date: "2026-08-14 to 2026-08-16",
    time: "4:00 PM - 11:00 PM",
    visitorName: "Ahmed Hassan",
    visitorEmail: "ahmed.hassan@gmail.com",
    visitorPhone: "+20 100 555 1234",
    ticketType: "VIP Pass",
    quantity: 2,
    totalPaid: 700,
    qrCodeValue: "BZ-TKT-88401-AHMED-VIP",
    status: "Valid",
    bookedAt: "2026-07-19T11:00:00Z"
  }
];
