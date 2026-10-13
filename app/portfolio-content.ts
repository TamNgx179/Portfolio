export const projects = [
  {
    index: "01",
    title: "DeepReader",
    category: "AI / Full-stack",
    year: "2025–2026",
    image: "/images/projects/deepreader-reader.png",
    imageAlt: "DeepReader PDF reading workspace",
    description: "A reading workspace that turns PDFs and EPUBs into grounded answers, summaries and flashcards.",
    detail: "Built RAG workflows with Gemini embeddings, Qdrant and Haystack, plus asynchronous document ingestion and Redis-backed rate limiting.",
    proof: "90+ Lighthouse score · 25 MB uploads",
    stack: ["Java", "Spring Boot", "Python", "FastAPI", "TypeScript", "Next.js", "React", "Tailwind CSS", "PostgreSQL", "MongoDB", "Redis", "Qdrant", "Apache Kafka", "Apache Camel", "Haystack", "Gemini", "Groq", "Docker", "Prometheus", "Grafana"],
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
    stack: ["JavaScript", "React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "Solidity", "Ethers.js", "Hardhat", "Ethereum / Sepolia"],
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
    role: "Full-stack Developer Intern",
    logo: "/images/alphasphere-logo-original.png",
    logoAlt: "AlphaSphere logo",
    url: "https://alphasphere.io/",
    lead: "Building dependable SaaS workflows from developer tooling to billing and content delivery.",
    points: [
      "Built an AI-assisted coding harness with structured project context and reusable engineering workflows.",
      "Developed asynchronous Instagram and X feed synchronization using Redis and BullMQ workers.",
      "Implemented Stripe subscriptions, webhooks and idempotency protection; designed secure media access with DigitalOcean Spaces."
    ],
    stack: [
      { label: "NestJS", image: "" },
      { label: "React", image: "/images/skills/react.png" },
      { label: "MongoDB", image: "/images/skills/mongodb.png" },
      { label: "Redis", image: "/images/skills/redis.png" },
      { label: "Docker", image: "/images/skills/docker.png" }
    ]
  },
  {
    index: "02",
    period: "Jan 2026 — Jun 2026",
    company: "HONEYNET Joint Stock Company",
    role: "Backend Developer Intern",
    logo: "/images/honeynet-logo.png",
    logoAlt: "HONEYNET logo",
    url: "",
    lead: "Creating reliable backend services for a public social welfare product.",
    points: [
      "Developed registration, OTP verification, login, account recovery and password reset APIs.",
      "Designed PostgreSQL models for news, events, donations, activity search and comment approval.",
      "Built validated real-time notifications for application status and administrative workflows."
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
