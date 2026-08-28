export const profile = {
  name: "Krismia Rohma",
  title: "Product Manager | Product Owner | Solution Specialist | Business Analyst",
  location: "BSD Tangerang, Indonesia",
  tagline:
    "I turn complex field operations, geospatial data, and client needs into products people choose to use.",
  email: "krismiayaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/krismia-rohma-660151197/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMDqs%2BtiiS4ycYCkOTi5B8A%3D%3D",
  cvUrl: "/documents/Krismia-Rohmanurfitria-Product-Manager-CV.pdf",
  recommendationUrl: "/documents/Krismia-Rohmanurfitria-CTO-Recommendation.pdf",
};

export const recruiterHighlights = [
  { value: "3+", label: "years across product, geospatial & SaaS" },
  { value: "6 months", label: "product ownership from concept to client launch" },
  { value: "B2B", label: "solution design, demos & stakeholder partnership" },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Recommendation", href: "#recommendation" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export const about =
  "I am a Product Manager who bridges technical geospatial expertise—GIS and remote sensing—with product strategy. I lead end-to-end development for a real-time sales monitoring platform, partnering with engineering, UI/UX, data, and sales to ship products that solve genuine client problems. My work starts with customer pain points and turns them into clear requirements, prioritised decisions, and product experiences that support adoption, retention, and lasting client value.";

export const strengths = [
  "Translate ambiguous client needs into clear product direction",
  "Align engineering, design, data, sales, and clients around one outcome",
  "Bring a technical GIS lens to commercial SaaS opportunities",
];

export const skillGroups = [
  {
    title: "Product Strategy",
    skills: ["Product Vision & Roadmapping", "PRD Writing", "Market Research", "Agile Development"],
  },
  {
    title: "Stakeholder & Client Management",
    skills: ["Cross-functional Collaboration", "Client-facing Demos", "Pre-sales Consultancy", "Solution Design"],
  },
  { title: "Analytical", skills: ["Python", "PostgreSQL", "Data-driven Decision Making"] },
  { title: "Domain Expertise", skills: ["GIS/Geospatial Technology", "ArcGIS/QGIS"] },
];

export const experience = {
  role: "Product Manager & Solution Specialist",
  company: "PT. Bhumi Varta Technology",
  location: "BSD Tangerang",
  period: "Aug 2023–Aug 2026",
  areas: [
    {
      title: "Product ownership",
      points: [
        "Own the product roadmap and coordinate cross-functional development across engineering, UI/UX, data, and sales.",
        "Translate client and market needs into actionable PRDs, prioritised features, and measurable outcomes.",
        "Drive feature adoption while helping reduce churn and improve NPS through an ongoing client feedback loop.",
      ],
    },
    {
      title: "Client & solution ownership",
      points: [
        "Bridge clients and technical teams to align business needs with feasible product solutions.",
        "Lead pre-sales consultancy, solution proposals, and client demos that make product value tangible.",
      ],
    },
  ],
};

export const recommendation = {
  quote:
    "The most significant thing she delivered was Targetin v2, the full revamp of the product, which was released this year.",
  author: "Azby Luthfan",
  role: "CTO, Bvarta · August 2026",
  context:
    "Written in August 2026. Krismia reported directly to Azby Luthfan for close to two years while taking ownership of Targetin and leading its V2 release.",
};

export const caseStudies = [
  {
    number: "01",
    title: "LOKASI Targetin V1",
    subtitle: "Sales Monitoring & Territory Management Platform",
    context:
      "Evolved a basic sales monitoring tool into a more complete platform for field teams and sales operations.",
    features: [
      ["SKU Management", "Centralised product catalogue management for clearer sales visibility."],
      ["Stockout Prediction", "Surfaced inventory risks early to help teams protect availability."],
      ["Sales Territory Mapping", "Visualised coverage and performance across sales territories."],
      ["Territory Settings", "Enabled flexible territory setup aligned with operational structures."],
      ["Order Request", "Streamlined field order submissions between sales and operations."],
    ],
    impact:
      "Landed Fastcon as the first client and generated interest across the FMCG pipeline, including Ichitan, AICE, Simbadda, and Unilever.",
    gallery: [
      {
        src: "/images/case-studies/targetin-v1/sales-territory-map.png",
        title: "Sales Territory Mapping",
        description: "Territory recommendations and outlet coverage visualised directly on the map.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v1/activity-insight.jpg",
        title: "Activity Insight Dashboard",
        description: "Configurable charts help teams turn field activity into operational insight.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v1/order-management.png",
        title: "Order Management",
        description: "A structured review flow connects order requests, invoices, and fulfilment status.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v1/sales-territory-report.png",
        title: "Territory Optimization Report",
        description: "Decision-ready summaries translate territory recommendations into business impact.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v1/store-selection.png",
        title: "Store & Order History",
        description: "Field users can see store information, pending requests, and transaction history.",
        format: "mobile",
      },
      {
        src: "/images/case-studies/targetin-v1/store-detail.png",
        title: "Location-aware Store Detail",
        description: "Map context and store information support better-prepared sales visits.",
        format: "mobile",
      },
      {
        src: "/images/case-studies/targetin-v1/visit-form.png",
        title: "Visit Form",
        description: "Sales representatives can capture visit notes and order details in the field.",
        format: "mobile",
      },
      {
        src: "/images/case-studies/targetin-v1/order-recommendation.jpg",
        title: "Order Recommendation",
        description: "Suggested SKUs simplify order preparation while keeping quantities editable.",
        format: "mobile",
      },
    ],
  },
  {
    number: "02",
    title: "LOKASI Targetin V2",
    subtitle: "Platform Revamp for Scalability",
    context:
      "Built on V1's traction by rethinking the platform architecture and experience for broader, repeatable use.",
    features: [],
    impact:
      "Redesigned for scalability beyond FMCG and F&B—opening the platform to retail, surveying, and other field-worker use cases.",
    gallery: [
      {
        src: "/images/case-studies/targetin-v2/dashboard.png",
        title: "Field Operations Dashboard",
        description: "A unified view of assignments, visit performance, success trends, and potential compliance risks.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v2/potential-site-details.jpg",
        title: "Potential Site Intelligence",
        description: "Map-based site discovery brings location context, approval status, scheduling, and ownership into one workflow.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v2/outlet-performance-overview.png",
        title: "Outlet Performance Overview",
        description: "Outlet health, execution risks, orders, visit activity, photos, and location context are connected in one profile.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v2/route-planning.jpg",
        title: "Multi-team Route Planning",
        description: "Visual route sequencing helps planners compare worker schedules, travel distance, visit order, and territory coverage.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v2/dataset-integration.png",
        title: "LOKASI Dataset Integration",
        description: "Reusable geospatial datasets can be searched, reviewed, and imported directly into Targetin workflows.",
        format: "desktop",
      },
      {
        src: "/images/case-studies/targetin-v2/mobile-map-activity.png",
        title: "Nearby Activity Map",
        description: "Field users can discover nearby registered and potential sites, see visit status, and switch between map and list views.",
        format: "mobile",
      },
      {
        src: "/images/case-studies/targetin-v2/mobile-nearby-sites.png",
        title: "Nearby Site Prioritisation",
        description: "Distance-aware site cards help workers prioritise scheduled, unscheduled, and potential visits.",
        format: "mobile",
      },
      {
        src: "/images/case-studies/targetin-v2/mobile-site-detail.png",
        title: "Site Detail & Check-in",
        description: "Map context, site photos, visit history, and radius-validated check-in come together in one field view.",
        format: "mobile",
      },
      {
        src: "/images/case-studies/targetin-v2/mobile-site-registration.png",
        title: "Potential Site Registration",
        description: "Field teams can capture a new site with a photo, live location, and automatically populated address information.",
        format: "mobile",
      },
      {
        src: "/images/case-studies/targetin-v2/mobile-field-form.png",
        title: "Dynamic Field Form",
        description: "Configurable questions and clear completion states make structured field data collection fast and reliable.",
        format: "mobile",
      },
    ],
  },
];

export const education = {
  degree: "Associate Degree, Remote Sensing & Geographic Information System",
  school: "Universitas Gadjah Mada",
  period: "2017–2020",
  detail: "Graduated with High Honor, GPA 3.58/4.00",
};
