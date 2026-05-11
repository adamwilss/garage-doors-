export const business = {
  name: "Quality Garage Doors Carlisle",
  shortName: "Quality Garage Doors",
  phone: "01228 532495",
  phoneHref: "tel:01228532495",
  mobile: "07519 021 053",
  mobileHref: "tel:07519021053",
  whatsAppHref: "https://wa.me/447519021053",
  email: "info@qualitygaragedoors.co.uk",
  vat: "531 4198 60",
  address: "28 Esk Rd, Carlisle CA3 0HW",
  established: 1999,
  yearsExperience: 25,
  tagline: "Fast, affordable garage door repair and installation across Carlisle and the surrounding region. Same day service available.",
  serviceArea:
    "Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders",
  openingHours: [
    { day: "Monday – Friday", hours: "8:00 – 17:00" },
    { day: "Saturday", hours: "9:00 – 14:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  trustPoints: [
    "Same day service available",
    "Licensed & fully insured",
    "Free in-home estimates",
    "20+ years experience",
    "Senior discounts",
    "All major payment methods",
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Garage Doors", href: "/garage-doors" },
  { label: "Repairs", href: "/garage-door-repairs" },
  { label: "Automation", href: "/garage-door-automation" },
  { label: "Gates", href: "/gates" },
  { label: "Gallery", href: "/gallery" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Areas Covered", href: "/areas-covered" },
  { label: "Brochures", href: "/brochures" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "garage-doors",
    title: "Garage Doors",
    description:
      "New garage door supply and installation. Sectional, roller, up and over and automated doors fitted with professional installation and guarantee.",
    href: "/garage-doors",
    icon: "door",
  },
  {
    id: "repairs",
    title: "Garage Door Repairs",
    description:
      "Garage door stuck? Broken spring? Door off track? Fast, reliable repairs for all makes and models. We fix it today.",
    href: "/garage-door-repairs",
    icon: "wrench",
  },
  {
    id: "automation",
    title: "Garage Door Automation",
    description:
      "Convert your manual garage door to electric. Remote controls, keypads and safety systems installed.",
    href: "/garage-door-automation",
    icon: "zap",
  },
  {
    id: "gates",
    title: "Gates",
    description:
      "Automated and manual gates for driveways and commercial properties. Sliding, swing and cantilever designs.",
    href: "/gates",
    icon: "gate",
  },
];

export const garageDoorTypes = [
  {
    name: "Sectional Doors",
    tagline: "Best for insulation, security, modern looks and automation",
    description:
      "Alutech Trend and Prestige sectional doors open vertically, maximising driveway space. Thermally efficient, secure and available in a wide range of panel styles, colours and finishes.",
    features: ["Excellent insulation", "Space saving", "Modern aesthetics", "Wide automation options"],
  },
  {
    name: "Roller Shutter Doors",
    tagline: "Best for tight spaces, low ceilings and practical access",
    description:
      "Compact roller shutter doors coil into a small box above the opening, making them ideal for garages with limited headroom or obstructions.",
    features: ["Compact design", "Low headroom compatible", "Practical daily use", "Simple operation"],
  },
  {
    name: "Up and Over Doors",
    tagline: "Best for simple, reliable and cost effective replacement",
    description:
      "The classic up and over garage door remains a popular choice for straightforward replacement projects where reliability and value are priorities.",
    features: ["Simple design", "Reliable mechanism", "Cost effective", "Easy to maintain"],
  },
  {
    name: "Automated Doors",
    tagline: "Best for convenience, security and daily use",
    description:
      "Add electric operation to almost any door type. Remote handsets, keypads and safety systems make every arrival and departure effortless.",
    features: ["Remote control", "Keypad entry", "Safety systems", "Battery backup option"],
  },
];

export const repairIssues = [
  "Broken springs",
  "Faulty motors",
  "Remote control faults",
  "Doors stuck open or closed",
  "Damaged panels",
  "Noisy or stiff doors",
  "Cable problems",
  "Roller and track issues",
];

export const automationFeatures = [
  {
    title: "Remote Handsets",
    description: "Convenient remote control operation from your vehicle or home.",
  },
  {
    title: "Wall Mounted Keypads",
    description: "Secure keypad entry for family members without remotes.",
  },
  {
    title: "Safety Systems",
    description: "Photocells and edge sensors prevent the door from closing on obstructions.",
  },
  {
    title: "External Release",
    description: "Manual override system for power failure situations.",
  },
  {
    title: "Battery Backup",
    description: "Optional battery backup keeps your door operational during power cuts.",
  },
  {
    title: "Existing Door Conversion",
    description: "Suitable existing tracked manual doors can often be converted to electric operation where condition allows.",
  },
];

export const gateTypes = [
  { name: "Sliding gates", description: "Ideal for sites with limited swing space or sloping driveways." },
  { name: "Swing gates", description: "Traditional style gates that open inward or outward on hinges." },
  { name: "Cantilever gates", description: "Smooth sliding operation without ground tracks across the entrance." },
  { name: "Steel gates", description: "Strong, secure and durable for residential and commercial applications." },
  { name: "Aluminium gates", description: "Lightweight, corrosion resistant and available in modern styles." },
  { name: "Timber gates", description: "Natural appearance with warmth and kerb appeal for any property." },
];

export const areas = [
  {
    name: "Carlisle",
    slug: "carlisle",
    description:
      "Quality Garage Doors Carlisle is based in Carlisle and serves every neighbourhood across the city. From the historic centre to the surrounding suburbs, we provide garage door supply, installation, repair and automation services with fast response times and local knowledge.",
    services: ["garage-doors", "repairs", "automation", "gates"],
  },
  {
    name: "Cumbria",
    slug: "cumbria",
    description:
      "We cover the whole of Cumbria with our garage door and gate services. From the Lake District to the Eden Valley, our team travels to supply, install, repair and automate garage doors and gates for homes and businesses throughout the county.",
    services: ["garage-doors", "repairs", "automation", "gates"],
  },
  {
    name: "Dumfries and Galloway",
    slug: "dumfries-and-galloway",
    description:
      "Our service area extends into Dumfries and Galloway for garage door and gate installations and repairs. We regularly travel across the Scottish border to help residential and commercial customers with professional automation and replacement services.",
    services: ["garage-doors", "repairs", "automation", "gates"],
  },
  {
    name: "Penrith",
    slug: "penrith",
    description:
      "Penrith is a key part of our Cumbria service area. We provide garage door supply, installation, repairs and automation to homes and businesses in Penrith and the surrounding Eden Valley.",
    services: ["garage-doors", "repairs", "automation"],
  },
  {
    name: "Workington",
    slug: "workington",
    description:
      "Workington and the west Cumbria coast are covered by our garage door and gate services. From repairs to full installations, our team is available across the area with free visits and quotations.",
    services: ["garage-doors", "repairs", "gates"],
  },
  {
    name: "Whitehaven",
    slug: "whitehaven",
    description:
      "Whitehaven and the surrounding coastal towns are within our service area. We supply and install garage doors and automated gates, carrying out repairs and servicing for residential and commercial customers.",
    services: ["garage-doors", "repairs", "gates"],
  },
  {
    name: "Northumberland",
    slug: "northumberland",
    description:
      "We travel into Northumberland for garage door and gate projects. Our team covers the county for installations, repairs and automation services with the same professional standards we apply across Cumbria.",
    services: ["garage-doors", "repairs", "automation", "gates"],
  },
  {
    name: "Scottish Borders",
    slug: "scottish-borders",
    description:
      "The Scottish Borders are part of our extended service area for garage doors and automated gates. We regularly undertake installation and repair projects across the region for both residential and commercial clients.",
    services: ["garage-doors", "repairs", "automation", "gates"],
  },
];

export const faqs = [
  {
    question: "Do you offer free quotations?",
    answer:
      "Yes. We provide free visits and quotations for all garage door and gate projects across our service area. There is no obligation and we will advise you on the best options for your property and budget.",
  },
  {
    question: "How long does a garage door installation take?",
    answer:
      "Most standard garage door installations are completed within a single day. Larger or more complex projects, such as custom gates or automation retrofits, may take longer. We will give you a clear timeline during your quotation.",
  },
  {
    question: "Can you automate my existing manual garage door?",
    answer:
      "Yes, in many cases we can convert an existing manual garage door to electric operation. The suitability depends on the door type, condition and tracking system. We will assess this during a free site visit.",
  },
  {
    question: "Do you repair garage doors you did not install?",
    answer:
      "Absolutely. We repair and service all makes of garage door regardless of who originally installed them. We carry common spare parts and can source specialist components when needed.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders. Our base in Carlisle allows us to reach customers across the wider region with prompt service.",
  },
  {
    question: "Is your work guaranteed?",
    answer:
      "Yes. All our work is fully guaranteed. We are a family run business with 25 years of experience and our reputation depends on doing the job properly. We use quality products from leading manufacturers such as Alutech and Hormann.",
  },
];

export const reviews = [
  {
    rating: 5,
    text: "Very helpful and a very nice man thank you.",
    author: "Verified Customer",
  },
  {
    rating: 5,
    text: "Phil and Dan have just completed fitting two electric garage doors at my home. They have done a fantastic job. Two very professional and friendly lads. Work completed exactly as specified, even clearing up all mess after themselves. I am delighted with their work and can highly recommend.",
    author: "Verified Customer",
  },
];

export const galleryCategories = [
  "All",
  "Garage doors",
  "Gates",
  "Automation",
  "Repairs",
  "Residential",
  "Commercial",
  "Before and after",
];

export const galleryItems = [
  {
    id: 1,
    src: "/images/placeholder.jpg",
    alt: "Sectional garage door installation in Carlisle",
    category: "Garage doors",
    location: "Carlisle",
    service: "Installation",
    caption: "Insulated sectional garage door fitted in Carlisle",
  },
  {
    id: 2,
    src: "/images/placeholder.jpg",
    alt: "Automated swing gate installation",
    category: "Gates",
    location: "Penrith",
    service: "Installation",
    caption: "Automated steel swing gates installed in Penrith",
  },
  {
    id: 3,
    src: "/images/placeholder.jpg",
    alt: "Garage door automation upgrade",
    category: "Automation",
    location: "Cumbria",
    service: "Automation",
    caption: "Manual door converted to electric operation with remote handset",
  },
  {
    id: 4,
    src: "/images/placeholder.jpg",
    alt: "Garage door spring repair",
    category: "Repairs",
    location: "Carlisle",
    service: "Repair",
    caption: "Broken spring replaced and door rebalanced",
  },
  {
    id: 5,
    src: "/images/placeholder.jpg",
    alt: "Roller shutter garage door",
    category: "Garage doors",
    location: "Workington",
    service: "Installation",
    caption: "Compact roller shutter door fitted in a garage with limited headroom",
  },
  {
    id: 6,
    src: "/images/placeholder.jpg",
    alt: "Residential sliding gate",
    category: "Gates",
    location: "Dumfries and Galloway",
    service: "Installation",
    caption: "Aluminium sliding gate with automation for a residential driveway",
  },
  {
    id: 7,
    src: "/images/placeholder.jpg",
    alt: "Commercial gate system",
    category: "Commercial",
    location: "Northumberland",
    service: "Installation",
    caption: "Commercial cantilever gate system with keypad and safety photocells",
  },
  {
    id: 8,
    src: "/images/placeholder.jpg",
    alt: "Before and after garage door replacement",
    category: "Before and after",
    location: "Carlisle",
    service: "Replacement",
    caption: "Old up and over door replaced with a new insulated sectional door",
  },
  {
    id: 9,
    src: "/images/placeholder.jpg",
    alt: "Residential garage door installation",
    category: "Residential",
    location: "Scottish Borders",
    service: "Installation",
    caption: "New residential sectional garage door with windows and remote control",
  },
  {
    id: 10,
    src: "/images/placeholder.jpg",
    alt: "Garage door motor replacement",
    category: "Repairs",
    location: "Whitehaven",
    service: "Repair",
    caption: "Faulty motor diagnosed and replaced with a new unit",
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Case Study 1",
    date: "2024",
    location: "Carlisle, Cumbria",
    service: "Garage Door Installation",
    challenge: "[Edit this: Describe the customer's situation and requirements. Example: old door failing, new build needing insulation, or specific design preferences.]",
    recommendedSolution: "[Edit this: Explain the recommended door type, size, automation and accessories based on the site survey.]",
    installationDetails: "[Edit this: Describe the installation process, any challenges overcome, and time taken.]",
    productUsed: "[Edit this: Specify the Alutech or Hormann product, panel style, colour and any accessories such as windows, wicket doors or automation system.]",
    result: "[Edit this: Summarise the outcome, customer satisfaction and any feedback received.]",
    customerComment: "[Edit this: Add the customer's actual testimonial once available.]",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
  {
    id: 2,
    title: "Case Study 2",
    date: "2024",
    location: "Penrith, Cumbria",
    service: "Garage Door Automation",
    challenge: "[Edit this: Describe the existing door and the customer's reason for wanting automation.]",
    recommendedSolution: "[Edit this: Explain the automation system recommended, including motor, controls and safety features.]",
    installationDetails: "[Edit this: Describe the retrofit process and any modifications required.]",
    productUsed: "[Edit this: Specify the Alutech Levigato or Avanti automation system and any accessories.]",
    result: "[Edit this: Summarise the outcome and how the customer uses the new system.]",
    customerComment: "[Edit this: Add the customer's actual testimonial once available.]",
    images: ["/images/placeholder.jpg"],
  },
  {
    id: 3,
    title: "Case Study 3",
    date: "2023",
    location: "Dumfries and Galloway",
    service: "Automated Gate Installation",
    challenge: "[Edit this: Describe the property layout, security needs and design preferences.]",
    recommendedSolution: "[Edit this: Explain the gate type, material, automation and access control chosen.]",
    installationDetails: "[Edit this: Describe the installation process, groundworks and automation setup.]",
    productUsed: "[Edit this: Specify the gate material, design and automation hardware used.]",
    result: "[Edit this: Summarise the outcome, security improvement and customer satisfaction.]",
    customerComment: "[Edit this: Add the customer's actual testimonial once available.]",
    images: ["/images/placeholder.jpg", "/images/placeholder.jpg"],
  },
];

export const brochures = [
  {
    id: "alutech-sectional",
    title: "Alutech Sectional Garage Door and Automation",
    description:
      "Our Alutech brochure includes sectional garage door styles, colours, finishes, accessories, wicket doors, pass doors and automation options. Download it to explore the full range.",
    href: "#",
  },
  {
    id: "hormann-range",
    title: "Hormann Garage Door Range",
    description:
      "Discover the Hormann range of residential and commercial garage doors. This brochure covers sectional, roller and up and over doors with full technical specifications.",
    href: "#",
  },
  {
    id: "automation-guide",
    title: "Garage Door Automation Guide",
    description:
      "Learn about converting manual garage doors to electric operation. This guide covers remote controls, keypads, safety systems, battery backup and suitable door types.",
    href: "#",
  },
];

export const whyChoosePoints = [
  {
    title: "25 Years Experience",
    description:
      "Established 25 years ago, we have fitted and repaired thousands of garage doors and gates across the region. That experience means we get it right first time.",
  },
  {
    title: "Family Run",
    description:
      "We are a small family business, not a call centre or franchise. You deal directly with the people doing the work, from quotation through to installation and aftercare.",
  },
  {
    title: "Free Visits and Quotations",
    description:
      "We visit your property at no charge, assess the job properly and provide a clear written quotation with no hidden extras. There is no obligation and no pressure.",
  },
  {
    title: "Fully Guaranteed Work",
    description:
      "All installations and repairs are fully guaranteed. We use quality components from Alutech and Hormann and stand behind every job we complete.",
  },
  {
    title: "Automation Specialists",
    description:
      "Converting manual doors to electric operation is one of our core services. We know which doors can be automated, which motors to use and how to do it safely.",
  },
  {
    title: "AESIF Member",
    description:
      "We are a member of the Automatic Entrance Systems Installers Federation, demonstrating our commitment to professional standards and safe installation practices.",
  },
];

export const alutechContent = {
  intro:
    "Alutech sectional doors are safe, practical, thermally efficient, reliable and price competitive.",
  panelStyles: ["Microwave", "S Ribbed", "M Ribbed", "L Ribbed", "Georgian"],
  finishes: [
    "Traffic white as standard",
    "RAL colours",
    "Woodgrain",
    "Smooth textures",
    "Wood effect finishes",
    "Natural wood",
    "Natural stone",
    "Specialised printed images",
  ],
  options: [
    "Windows",
    "Wicket doors",
    "Pass doors",
    "Automation",
    "Remote controls",
    "Keypads",
    "Battery backup",
    "Photocells",
    "External release systems",
  ],
  levigato: "Sleek, smooth and versatile. The Alutech Levigato automation system offers refined performance with a compact design that suits modern sectional doors.",
  avanti:
    "Quiet, powerful and suitable for existing manual tracked garage doors. The Alutech Avanti system is ideal for retrofit automation projects where reliability matters.",
};

export const coupons = [
  {
    id: "new-door-combo",
    title: "$200 OFF",
    subtitle: "NEW GARAGE DOOR + MOTOR COMBO",
    description: "Save $200 when you purchase a new garage door with motor installation.",
    code: "COMBO200",
    disclaimer: "Cannot be combined with other offers. Expires end of month.",
  },
  {
    id: "new-door-only",
    title: "$100 OFF",
    subtitle: "NEW GARAGE DOOR ONLY",
    description: "Save $100 on any new garage door installation.",
    code: "DOOR100",
    disclaimer: "Excludes combo offers. One per household.",
  },
  {
    id: "repair-discount",
    title: "$25 OFF",
    subtitle: "GARAGE DOOR REPAIR",
    description: "Save $25 on any garage door repair service call.",
    code: "REPAIR25",
    disclaimer: "Minimum service charge applies. Cannot be combined.",
  },
  {
    id: "spring-replacement",
    title: "$50 OFF",
    subtitle: "SPRING REPLACEMENT",
    description: "Save $50 on broken spring replacement service.",
    code: "SPRING50",
    disclaimer: "Single spring only. Call for dual spring pricing.",
  },
  {
    id: "opener-install",
    title: "$75 OFF",
    subtitle: "LIFTMASTER OPENER INSTALL",
    description: "Save $75 on LiftMaster garage door opener installation.",
    code: "OPENER75",
    disclaimer: "Opener purchase required. Professional install included.",
  },
];
