export const profile = {
  name: "Krismia Rohmanurfitria",
  title: "Product Manager | Solution Specialist",
  location: "BSD Tangerang, Indonesia",
  tagline:
    "Product Manager with 4+ years of experience turning geospatial and SaaS technology into client-centric products.",
  email: "krismiayaya@gmail.com",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export const about =
  "I'm a Product Manager with a background bridging technical geospatial expertise (GIS, remote sensing) with product strategy. Over the past several years, I've led end-to-end product development for a real-time sales monitoring platform, working closely with engineering, UI/UX, data, and sales teams to ship features that matter to clients. My focus is on translating customer pain points into clear product requirements, driving measurable outcomes like feature adoption and NPS, and working closely with clients pre- and post-launch to ensure products deliver real value.";

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
  period: "Aug 2023–Present",
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
  },
];

export const education = {
  degree: "Associate Degree, Remote Sensing & Geographic Information System",
  school: "Universitas Gadjah Mada",
  period: "2017–2020",
  detail: "Graduated with High Honor, GPA 3.58/4.00",
};
