export const projects = [
  {
    index: "01",
    title: "DeepReader",
    category: "AI / Full-stack",
    year: "2025–2026",
    image: "/images/projects/deepreader-reader.png",
    imageAlt: "DeepReader PDF reading workspace",
    description: "An AI-powered PDF/EPUB reading platform with citation-grounded Q&A, summaries and 1–50 flashcards, supporting uploads up to 25 MB.",
    detail: "Full-stack developer in a six-member team. Built RAG workflows with Gemini embeddings, Qdrant and Haystack, asynchronous document ingestion and Redis-backed rate limiting; optimized Next.js performance and SEO with 90+ Lighthouse scores.",
    proof: "90+ Lighthouse score · 25 MB uploads",
    stack: ["Java", "Spring Boot", "Next.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Redis", "Qdrant", "Docker"],
    url: "https://github.com/23520904/deepreader",
    action: "View Project"
  },
  {
    index: "02",
    title: "Vehicle Marketplace",
    category: "Web3 / Commerce",
    year: "2025",
    image: "/images/projects/vehicle-marketplace-listing.png",
    imageAlt: "Vehicle marketplace listing interface",
    description: "A vehicle marketplace with a guided checkout and Sepolia escrow transaction states.",
    detail: "Designed responsive discovery and checkout flows, and connected transaction progress across React, Express, MongoDB and a verified smart contract.",
    proof: "End-to-end checkout · Verified contract",
    stack: ["JavaScript", "React", "Vite", "Node.js", "Express", "MongoDB"],
    url: "https://github.com/TamNgx179/blockchain-vehicle-marketplace",
    action: "View Project"
  },
  {
    index: "03",
    title: "Digital Social Welfare",
    category: "Public service / Mobile",
    year: "2026",
    image: "/images/projects/asxh-home.jpg",
    imageAlt: "Digital Social Welfare application home screen",
    description: "A citizen-facing mobile product for social welfare services in Ho Chi Minh City.",
    detail: "Contributed to secure account flows, validated application APIs, content services and real-time notifications.",
    proof: "Available on iOS & Android",
    stack: ["TypeScript", "Node.js", "Express", "PostgreSQL"],
    url: "https://play.google.com/store/apps/details?id=vn.mttqhcm.asxh",
    action: "View on Google Play"
  }
] as const;

export const experience = [
  {
    index: "01",
    period: "Jul 2026 — Oct 2026",
    company: "AlphaSphere",
    role: "Fullstack Developer Intern",
    logo: "/images/alphasphere-logo-original.png",
    logoAlt: "AlphaSphere logo",
    url: "https://alphasphere.io/",
    lead: "Building dependable SaaS workflows from developer tooling to billing and content delivery.",
    points: [
      "Built an AI-assisted coding harness that provides structured project context, reusable tools, and development workflows to support consistent software implementation and engineering tasks.",
      "Developed an asynchronous social-feed synchronization pipeline for Instagram and X using Redis and BullMQ workers, processing updates in dedicated background jobs and delivering new content to digital signage screens without blocking the main application.",
      "Built Stripe subscription billing flows for plan changes, proration, trials, and usage-based charging, with webhook-driven event handling and idempotency-key protection to prevent duplicate operations and improve payment-state consistency.",
      "Designed a secure media-storage workflow using DigitalOcean Spaces, introducing a quarantine stage for newly uploaded files and presigned URLs for controlled asset access."
    ],
    stack: [
      { label: "TypeScript", image: "" },
      { label: "NestJS", image: "" },
      { label: "React", image: "/images/skills/react.png" },
      { label: "Vite", image: "" },
      { label: "MongoDB", image: "/images/skills/mongodb.png" },
      { label: "Redis", image: "/images/skills/redis.png" },
      { label: "BullMQ", image: "" },
      { label: "Docker", image: "/images/skills/docker.png" },
      { label: "DigitalOcean Spaces", image: "" }
    ]
  },
  {
    index: "02",
    period: "Jan 2026 — Jun 2026",
    company: "HONEYNET Joint Stock Company",
    role: "Backend Developer Intern",
    logo: "/images/honeynet-logo.png",
    logoAlt: "HONEYNET logo",
    url: "https://honeynet.vn/",
    lead: "Creating reliable backend services for a public social welfare product.",
    points: [
      "Developed backend APIs for authentication and account management, covering registration, OTP verification, login, password setup, account recovery, and password reset workflows.",
      "Designed PostgreSQL data models and backend services for news/events, donation activities, activity search, and comment approval workflows.",
      "Built real-time notification APIs with robust request validation for application submission workflows, improving consistency and reliability of backend request handling."
    ],
    stack: [
      { label: "TypeScript", image: "/images/skills/typescript.png" },
      { label: "Node.js", image: "/images/skills/nodejs.png" },
      { label: "Express", image: "/images/skills/express.png" },
      { label: "PostgreSQL", image: "/images/skills/postgresql.png" }
    ]
  }
] as const;

export const awards = [
  { label: "2025–2026 / Term 1", image: "/images/education-award-2025-2026-s1.jpg" },
  { label: "2024–2025 / Term 2", image: "/images/education-award-2024-2025-s2.jpg" },
  { label: "2024–2025 / Term 1", image: "/images/education-award-2024-2025-s1.jpg" },
  { label: "2023–2024 / Term 2", image: "/images/education-award-2023-2024-s2.jpg" },
  { label: "2023–2024 / Term 1", image: "/images/education-award-2023-2024-s1.jpg" }
] as const;
