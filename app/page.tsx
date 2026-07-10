"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  ExternalLink,
  Film,
  FileText,
  Info,
  Music,
  SlidersHorizontal,
  Trophy
} from "lucide-react";
import { EducationBook } from "./components/EducationBook";
import { SkillsExplorer } from "./components/SkillsExplorer";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skill", href: "#skill" },
  { label: "Experience", href: "#experience" },
  { label: "Project", href: "#project" }
];

const hobbies = [
  {
    title: "Watching Movies",
    description: "I enjoy stories with strong pacing, cinematic visuals, and memorable moods.",
    icon: Film
  },
  {
    title: "Listening Music",
    description: "Music helps me focus while coding, reset my energy, and find new ideas.",
    icon: Music
  },
  {
    title: "Basketball",
    description: "Basketball keeps me active, competitive, and connected with teammates.",
    icon: Trophy
  }
];

const experienceTech = [
  { label: "Express.js", src: "/images/skills/express.png" },
  { label: "TypeScript", src: "/images/skills/typescript.png" },
  { label: "PostgreSQL", src: "/images/skills/postgresql.png" },
  { label: "Postman", src: "/images/skills/postman.png" },
  { label: "Docker", src: "/images/skills/docker.png" },
];

const experienceBullets = [
  {
    lead: "Built and maintained backend services:",
    text:
      "Developed RESTful APIs and server-side features to support product workflows with clean, maintainable business logic."
  },
  {
    lead: "Worked with database design and data flow:",
    text:
      "Modeled relational data, wrote practical queries, and improved API responses for reliable application behavior."
  },
  {
    lead: "Implemented authentication-oriented features:",
    text:
      "Supported secure user flows, request validation, and permission-aware backend logic across application modules."
  },
  {
    lead: "Collaborated in an engineering workflow:",
    text:
      "Used Git, API testing tools, and team feedback to refine requirements, debug issues, and deliver stable features."
  }
];

const monthLabels = [
  { label: "Jul", column: 1 },
  { label: "Aug", column: 5 },
  { label: "Sep", column: 10 },
  { label: "Oct", column: 14 },
  { label: "Nov", column: 18 },
  { label: "Dec", column: 23 },
  { label: "Jan", column: 27 },
  { label: "Feb", column: 32 },
  { label: "Mar", column: 36 },
  { label: "Apr", column: 41 },
  { label: "May", column: 46 },
  { label: "Jun", column: 50 }
];

const getContributionLevel = (week: number, day: number) => {
  const seed = (week * 17 + day * 29 + 7) % 13;
  const isSepNovCluster = week >= 10 && week <= 18 && seed > 2;
  const isMayJunCluster = week >= 44 && week <= 51 && seed > 1;
  const isMarchCluster = week >= 34 && week <= 38 && seed > 4;
  const isSparseMonth = (week >= 21 && week <= 25) || (week >= 40 && week <= 43);
  const isSinglePop = [8, 20, 26, 30, 33, 39, 52].includes(week) && seed > 7;

  if (!isSepNovCluster && !isMayJunCluster && !isMarchCluster && !isSparseMonth && !isSinglePop) {
    return 0;
  }

  if (seed > 10) return 4;
  if (seed > 7) return 3;
  if (seed > 4) return 2;
  return 1;
};

const contributionWeeks = Array.from({ length: 53 }, (_, week) =>
  Array.from({ length: 7 }, (_, day) => getContributionLevel(week, day))
);

const contributionColors = [
  "bg-[#20283c]",
  "bg-[#27425a]",
  "bg-[#32617c]",
  "bg-[#4383a6]",
  "bg-[#5aa9c9]"
];

const featuredProjects = [
  {
    title: "blockchain-vehicle-marketplace",
    description:
      "A simulated vehicle marketplace that combines React, Express, MongoDB, and Ethereum Sepolia escrow to make vehicle transactions more transparent and trustworthy.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/TamNgx179/blockchain-vehicle-marketplace",
        icon: ExternalLink
      }
    ]
  },
  {
    title: "deepreader",
    description:
      "An AI-powered deep reading platform where users can upload books, chat with content through RAG, generate summaries, and study with flashcards.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/23520904/deepreader",
        icon: ExternalLink
      }
    ]
  },
  {
    title: "Social Welfare Application",
    description:
      "A mobile application for digital social welfare services in Ho Chi Minh City, supporting citizens through Android and iOS app distribution.",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=vn.mttqhcm.asxh",
        icon: ExternalLink
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/vn/app/an-sinh-x%C3%A3-h%E1%BB%99i-s%E1%BB%91-tp-hcm/id6761987939?l=vi",
        icon: ExternalLink
      }
    ]
  }
];

const meteors = [
  { top: "4%", left: "92%", delay: "0s", duration: "10s" },
  { top: "16%", left: "76%", delay: "4.5s", duration: "12s" },
  { top: "2%", left: "58%", delay: "8s", duration: "11s" },
  { top: "28%", left: "98%", delay: "12.5s", duration: "13s" },
  { top: "8%", left: "42%", delay: "17s", duration: "12s" },
  { top: "36%", left: "84%", delay: "21.5s", duration: "14s" },
  { top: "10%", left: "68%", delay: "2.8s", duration: "14s" },
  { top: "22%", left: "88%", delay: "7.2s", duration: "13s" },
  { top: "1%", left: "34%", delay: "14.6s", duration: "15s" },
  { top: "31%", left: "72%", delay: "19.4s", duration: "12s" }
];

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const displayFont = "[font-family:var(--font-display),var(--font-body),sans-serif]";
const aboutSurface =
  "rounded-xl border border-[#79dcff]/45 bg-[#071958]/90 shadow-[0_20px_65px_rgba(3,5,35,0.38),inset_0_1px_0_rgba(173,228,255,0.14)]";
const resumeSurface =
  "rounded-xl border border-[#b89cff]/45 bg-[#28156e]/90 shadow-[0_20px_65px_rgba(8,3,42,0.38),inset_0_1px_0_rgba(220,207,255,0.13)]";
const hobbiesSurface =
  "rounded-xl border border-[#8ea8ff]/45 bg-[#10175c]/90 shadow-[0_20px_65px_rgba(3,5,35,0.38),inset_0_1px_0_rgba(176,196,255,0.13)]";
const doodle =
  "pointer-events-none absolute z-10 h-auto object-contain drop-shadow-[0_10px_14px_rgba(0,0,0,0.28)] saturate-[.92] hue-rotate-[8deg]";

export default function Home() {
  const [isAwardPreviewOpen, setIsAwardPreviewOpen] = useState(false);

  return (
    <main className="relative isolate overflow-hidden bg-[#10008a] bg-[url('/images/main-space-background.png')] bg-[length:100%_auto] bg-top bg-repeat-y text-white">
      <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden mix-blend-screen" aria-hidden="true">
        {meteors.map((meteor, index) => (
          <span
            className="meteor"
            key={`${meteor.top}-${meteor.left}-${index}`}
            style={{
              top: meteor.top,
              left: meteor.left,
              animationDelay: meteor.delay,
              animationDuration: meteor.duration
            }}
          />
        ))}
      </div>
      <header
        className={cx(
          "pointer-events-none fixed left-0 top-0 z-30 flex min-h-[58px] w-full items-center justify-center px-[clamp(14px,4vw,40px)] py-2 transition-[opacity,visibility] duration-200 max-[860px]:justify-start max-[860px]:overflow-x-auto max-[860px]:px-3 max-[860px]:py-3",
          isAwardPreviewOpen && "invisible opacity-0"
        )}
        aria-label="Primary navigation"
      >
        <div className="pointer-events-auto relative flex w-fit max-w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,rgba(9,13,28,0.94),rgba(17,12,36,0.94))] py-[5px] pl-2 pr-4 shadow-[0_18px_50px_rgba(0,0,0,0.42)] max-[860px]:justify-start">
          <a
            className="group relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-full border border-cyan-100/55 bg-[#080914] shadow-[0_0_0_4px_rgba(120,221,255,0.08),0_0_28px_rgba(120,221,255,0.42)] transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_0_0_5px_rgba(120,221,255,0.1),0_0_38px_rgba(120,221,255,0.58)] max-[520px]:size-[38px]"
            href="#home"
            aria-label="Go to home"
          >
            <Image
              src="/images/portfolio-logo.png"
              alt="Portfolio logo"
              width={64}
              height={64}
              loading="eager"
              className="size-full scale-[1.16] object-cover transition-transform duration-200 group-hover:scale-[1.24]"
            />
          </a>

          <nav className="flex min-w-0 items-center justify-center gap-1.5 overflow-x-auto text-[clamp(.8rem,1.15vw,1rem)] font-black uppercase [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[520px]:text-[.72rem]">
            {navItems.map((item) => (
              <a
                className="inline-flex min-h-8 items-center justify-center whitespace-nowrap rounded-full border border-transparent px-[clamp(10px,1.45vw,20px)] text-white/75 transition duration-200 hover:-translate-y-0.5 hover:text-white max-[520px]:min-h-8 max-[520px]:px-3"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <span
            className="pointer-events-none absolute -bottom-5 -right-5 size-[52px] origin-[50%_18%] rotate-[10deg] animate-[astronautFloat_4.8s_ease-in-out_infinite] drop-shadow-[0_10px_16px_rgba(0,0,0,0.36)] max-[520px]:-bottom-4 max-[520px]:-right-3 max-[520px]:size-11"
            aria-hidden="true"
          >
            <Image
              src="/images/astronaut-navbar.png"
              alt=""
              width={82}
              height={82}
              loading="eager"
              className="block size-full object-contain"
            />
          </span>
        </div>
      </header>

      <section id="home" className="relative isolate z-10 min-h-[100svh] overflow-hidden">
        <div className="mx-auto grid min-h-[100svh] w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,1.02fr)_minmax(280px,.78fr)] items-center gap-[clamp(28px,6vw,84px)] pb-16 pt-[134px] max-[860px]:grid-cols-1 max-[860px]:content-center max-[520px]:w-[min(100%-28px,1180px)] max-[520px]:pb-10">
          <div className="max-w-[690px] max-[860px]:order-1">
            <h1
              className={cx(
                displayFont,
                "m-0 max-w-[760px] text-balance text-[clamp(3.15rem,8vw,7.6rem)] font-bold leading-[.98] text-white [text-shadow:0_10px_34px_rgba(0,0,0,0.55)] max-[520px]:text-[clamp(2.65rem,16vw,4rem)]"
              )}
            >
              Welcome to my portfolio
            </h1>
          </div>

          <div
            className="relative aspect-[4/5] w-[min(360px,100%)] justify-self-center overflow-hidden rounded-[30px] max-[860px]:order-2 max-[860px]:w-[min(320px,78vw)]"
            aria-label="Portfolio owner portrait"
          >
            <Image
              src="/images/profile.jpg"
              alt="Portfolio owner"
              fill
              priority
              sizes="(max-width: 768px) 72vw, 360px"
              className="object-cover object-[50%_30%] transition-transform duration-300 hover:scale-[1.08]"
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative z-10 overflow-hidden border-t border-[#8ee9ff]/30 bg-transparent px-5 py-[118px] max-[860px]:px-[18px] max-[860px]:py-24 max-[520px]:px-3.5 max-[520px]:py-20"
      >
        <div className="relative z-[1] mx-auto w-[min(1180px,100%)]">
          <div className="relative mb-8 grid w-fit gap-3 pr-[78px] max-[520px]:mb-6 max-[520px]:pr-[72px]">
            <Image
              src="/images/doodle-saturn.png"
              alt=""
              width={112}
              height={68}
              className={cx(doodle, "-right-[58px] -top-[30px] w-28 rotate-[8deg] max-[520px]:-right-[30px] max-[520px]:-top-[26px] max-[520px]:w-[74px]")}
            />
            <h2
              className={cx(
                displayFont,
                "relative z-[1] m-0 text-[clamp(2.8rem,7vw,6rem)] leading-none"
              )}
            >
              Introduction
            </h2>
            <Image
              src="/images/doodle-star.png"
              alt=""
              width={54}
              height={54}
              className={cx(doodle, "-right-[84px] -bottom-1 h-auto w-[54px] -rotate-12 max-[520px]:-right-[46px] max-[520px]:w-9")}
            />
          </div>

          <div className="grid grid-cols-[minmax(0,1.08fr)_minmax(320px,.92fr)] items-stretch gap-6 max-[860px]:grid-cols-1">
            <div className="grid h-full grid-rows-[minmax(0,1fr)_auto] gap-5">
              <article className={cx(aboutSurface, "relative overflow-visible p-[clamp(26px,4vw,44px)] before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,#78ddff,#b4a2ff,#ffbe6b)] before:content-[''] max-[520px]:p-5")}>
                <div className="relative z-[3] mb-[18px] flex min-h-[82px] w-full items-center gap-3 isolate pr-[clamp(112px,16vw,188px)] max-[520px]:mb-5 max-[520px]:min-h-[70px] max-[520px]:pr-[104px]">
                  <Image
                    src="/images/doodle-rocket.png"
                    alt=""
                    width={68}
                    height={76}
                    className={cx(doodle, "right-3 -top-16 w-[92px] rotate-[14deg] max-[520px]:right-2.5 max-[520px]:-top-[50px] max-[520px]:w-[60px]")}
                  />
                  <h3
                    className={cx(
                      displayFont,
                      "relative z-[4] m-0 max-w-[740px] pb-3 text-[clamp(1.65rem,3vw,2.7rem)] leading-[1.08] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-[linear-gradient(90deg,#78ddff,#ffb45c)] after:content-['']"
                    )}
                  >
                    About me
                  </h3>
                  <Image
                    src="/images/doodle-sparkle.png"
                    alt=""
                    width={38}
                    height={46}
                    className={cx(doodle, "right-[120px] -top-[65px] h-auto w-[38px] max-[520px]:right-[78px] max-[520px]:top-11 max-[520px]:w-7")}
                  />
                </div>

                <div className="grid gap-4">
                  <p className="m-0 max-w-[760px] text-[clamp(1.08rem,1.7vw,1.2rem)] font-bold leading-[1.7] text-[#f2fbff]">
                    I am an Information Technology student at VNUHCM - University of
                    Information Technology, building my path as a Backend and Fullstack
                    Developer.
                  </p>
                  <p className="m-0 max-w-[760px] text-[clamp(1rem,1.5vw,1.08rem)] font-bold leading-[1.7] text-[#cfe8ff]">
                    I enjoy working on practical products: designing RESTful APIs, handling
                    authentication flows, modeling databases, and connecting backend logic
                    with clean user-facing experiences.
                  </p>
                </div>
              </article>

              <div className={cx(resumeSurface, "grid gap-3 p-4 max-[520px]:p-4")}>
                <div className="flex items-center gap-3">
                  <FileText className="text-[#d2c1ff]" size={24} strokeWidth={2.4} />
                  <h4 className="m-0 text-lg font-black text-[#fbf8ff]">Resume</h4>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    className="group flex min-h-12 items-center justify-between rounded-lg border border-[#c8b8ff]/25 bg-[#100947]/75 px-4 py-2 font-extrabold text-[#f1ebff] transition hover:-translate-y-0.5 hover:border-[#d8ccff]/60 hover:bg-[#17105a]"
                    href="/documents/nguyen-minh-tam-cv-backend-engineer.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Backend CV
                    <ExternalLink
                      className="text-[#b9a9eb] transition group-hover:text-white"
                      size={18}
                      strokeWidth={2.4}
                    />
                  </a>
                  <a
                    className="group flex min-h-12 items-center justify-between rounded-lg border border-[#c8b8ff]/25 bg-[#100947]/75 px-4 py-2 font-extrabold text-[#f1ebff] transition hover:-translate-y-0.5 hover:border-[#d8ccff]/60 hover:bg-[#17105a]"
                    href="/documents/nguyen-minh-tam-cv-fullstack-intern.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fullstack CV
                    <ExternalLink
                      className="text-[#b9a9eb] transition group-hover:text-white"
                      size={18}
                      strokeWidth={2.4}
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={cx(hobbiesSurface, "relative h-full overflow-visible p-6 max-[520px]:p-5")}>
              <div className="relative z-[3] mb-[18px] flex min-h-[82px] w-full items-center gap-3 isolate pr-[clamp(112px,16vw,188px)] max-[520px]:mb-5 max-[520px]:min-h-[70px] max-[520px]:pr-[104px]">
                <Image
                  src="/images/doodle-planet.png"
                  alt=""
                  width={72}
                  height={48}
                  className={cx(doodle, "right-0 -top-[63px] w-[150px] -rotate-[10deg] max-[520px]:right-[76px] max-[520px]:-top-[50px] max-[520px]:w-[58px]")}
                />
                <h3
                  className={cx(
                    displayFont,
                    "relative z-[4] m-0 pb-3 text-[clamp(1.7rem,3vw,2.7rem)] leading-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-full after:bg-[linear-gradient(90deg,#78ddff,#ffb45c)] after:content-['']"
                  )}
                >
                  Hobbies
                </h3>
                <Image
                  src="/images/doodle-comet.png"
                  alt=""
                  width={82}
                  height={38}
                  className={cx(doodle, "right-[120px] -top-[52px] w-[120px] rotate-[6deg] max-[520px]:right-2 max-[520px]:-top-[38px] max-[520px]:w-[66px]")}
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {hobbies.map((hobby) => {
                  const Icon = hobby.icon;

                  return (
                    <article
                      className="relative grid min-h-[124px] grid-cols-[auto_1fr] gap-x-3.5 gap-y-2 rounded-lg border border-[#9ab6ff]/25 bg-[#080e45]/78 p-[18px] shadow-[0_16px_42px_rgba(4,5,35,0.28),inset_0_1px_0_rgba(181,203,255,0.1)] max-[520px]:p-5"
                      key={hobby.title}
                    >
                      <Icon
                        className="row-span-2 mt-1 text-[#8ee9ff]"
                        aria-hidden="true"
                        size={24}
                        strokeWidth={2.4}
                      />
                      <h4 className="m-0 text-lg font-black text-[#fbfcff]">{hobby.title}</h4>
                      <p className="col-start-2 m-0 font-bold leading-[1.6] text-[#d4dcff]">
                        {hobby.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="relative isolate z-10 overflow-hidden border-t border-[#8ee9ff]/30 bg-transparent px-5 py-[118px] max-[860px]:px-[18px] max-[860px]:py-24 max-[520px]:px-3.5 max-[520px]:py-20"
      >
        <div className="relative z-[2] mx-auto grid w-[min(1320px,100%)] gap-6">
          <div className="mx-auto mb-7 grid w-fit text-center">
            <h2
              className={cx(
                displayFont,
                "m-0 text-center text-[clamp(2.8rem,7vw,6rem)] leading-none"
              )}
            >
              Learning Journey
            </h2>
          </div>
          <EducationBook onPreviewChange={setIsAwardPreviewOpen} />
        </div>
      </section>

      <section
        id="skill"
        className="relative isolate z-10 overflow-hidden border-t border-[#8ee9ff]/30 bg-transparent px-5 py-[72px] max-[860px]:px-[18px] max-[860px]:py-20 max-[520px]:px-3.5 max-[520px]:py-14"
      >
        <div className="relative z-[1] mx-auto grid w-[min(1240px,100%)] gap-2">
          <h2
            className={cx(
              displayFont,
              "m-0 text-center text-[clamp(2.8rem,7vw,6rem)] leading-none"
            )}
          >
            Skills
          </h2>
          <SkillsExplorer />
        </div>
      </section>

      <section
        id="experience"
        className="relative isolate z-10 overflow-hidden border-t border-[#8ee9ff]/30 bg-transparent px-5 py-[104px] max-[860px]:px-[18px] max-[860px]:py-24 max-[520px]:px-3.5 max-[520px]:py-20"
      >
        <div className="relative z-[1] mx-auto grid w-[min(1280px,100%)] gap-10">
          <h2
            className={cx(
              displayFont,
              "m-0 text-center text-[clamp(2.8rem,7vw,6rem)] leading-none"
            )}
          >
            Experience
          </h2>

          <div className="grid grid-cols-[minmax(220px,320px)_1fr] gap-10 max-[860px]:grid-cols-1 max-[860px]:gap-6">
            <div className="relative flex items-start pt-2 max-[860px]:pt-0">
              <div className="relative rounded-2xl border border-cyan-100/45 bg-[linear-gradient(135deg,#1886ff,#38d5ff)] px-8 py-4 text-center text-xl font-black text-white shadow-[9px_9px_0_rgba(56,213,255,0.32),0_18px_42px_rgba(0,154,255,0.24)] max-[520px]:px-5 max-[520px]:text-base">
                Jun 2025 - Jun 2026
              </div>
            </div>

            <article className="relative overflow-hidden rounded-3xl border-2 border-dashed border-[#78ddff]/65 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(233,247,255,0.82)),linear-gradient(135deg,rgba(120,221,255,0.2),rgba(178,132,255,0.16))] p-[clamp(22px,3.4vw,42px)] text-[#263348] shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
              <div className="relative z-[1] grid gap-5">
                <div className="flex items-center gap-5 max-[520px]:items-start">
                  <div className="grid size-[74px] shrink-0 place-items-center rounded-2xl bg-[#fff7e8] p-3 shadow-[0_12px_26px_rgba(245,158,11,0.22)] max-[520px]:size-16">
                    <Image
                      src="/images/honeynet-logo.png"
                      alt="Honeynet logo"
                      width={80}
                      height={80}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="m-0 text-[clamp(1.8rem,3vw,2.7rem)] font-black leading-none text-[#ff9f1c]">
                      HONEYNET Joint Stock Company
                    </h3>
                    <p className="m-0 mt-2 text-[clamp(1.1rem,1.8vw,1.45rem)] font-black text-[#14233c]">
                      Backend Engineer Intern
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {experienceTech.map((tech) => (
                    <span
                      className="group relative grid size-10 place-items-center rounded-full bg-white shadow-[0_8px_20px_rgba(28,43,82,0.16)] ring-1 ring-[#7bdff2]/45"
                      key={tech.label}
                    >
                      <Image
                        src={tech.src}
                        alt={tech.label}
                        width={30}
                        height={30}
                        className="max-h-7 max-w-7 object-contain"
                      />
                      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0b1025] px-3 py-1 text-xs font-black text-white opacity-0 shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition group-hover:opacity-100">
                        {tech.label}
                      </span>
                    </span>
                  ))}
                </div>

                <ul className="m-0 grid list-disc gap-3 pl-5 text-[clamp(.98rem,1.35vw,1.08rem)] font-bold leading-[1.55] text-[#596174] marker:text-[#ff9f1c]">
                  {experienceBullets.map((item) => (
                    <li key={item.lead}>
                      <span className="font-black text-[#293247]">{item.lead}</span>{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="project"
        className="relative isolate z-10 overflow-hidden border-t border-[#8ee9ff]/30 bg-[linear-gradient(180deg,#0b0825_0%,#190a46_52%,#06030f_100%)] px-5 py-[104px] max-[860px]:px-[18px] max-[860px]:py-24 max-[520px]:px-3.5 max-[520px]:py-20"
      >
        <div className="relative z-[1] mx-auto grid w-[min(1280px,100%)] gap-10">
          <h2
            className={cx(
              displayFont,
              "m-0 text-center text-[clamp(2.8rem,7vw,6rem)] leading-none"
            )}
          >
            Projects
          </h2>

          <article className="rounded-3xl border-2 border-dashed border-[#78ddff]/70 bg-[linear-gradient(145deg,rgba(17,40,58,0.9),rgba(35,24,74,0.88)),rgba(8,13,30,0.92)] p-[clamp(22px,3vw,34px)] shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
            <div className="mb-7 flex items-center justify-center gap-3 text-center text-[#8ee9ff]">
              <SlidersHorizontal size={30} strokeWidth={2.5} />
              <h3 className="m-0 text-[clamp(1.45rem,2.8vw,2.4rem)] font-black">
                Contribution Activity
              </h3>
            </div>
            <div className="mb-9 h-px bg-[linear-gradient(90deg,transparent,#78ddff,transparent)]" />

            <div className="overflow-x-auto pb-2">
              <div className="mx-auto grid w-[min-content] gap-3">
                <div
                  className="grid gap-[6px] text-sm font-black text-[#b8f4ff]"
                  style={{ gridTemplateColumns: "repeat(53, 14px)" }}
                >
                  {monthLabels.map((month) => (
                    <span
                      className="whitespace-nowrap"
                      key={month.label}
                      style={{ gridColumn: `${month.column} / span 3` }}
                    >
                      {month.label}
                    </span>
                  ))}
                </div>

                <div className="grid">
                  <div
                    className="grid grid-flow-col grid-rows-7 gap-[6px]"
                    style={{ gridTemplateColumns: "repeat(53, 14px)" }}
                    aria-label="258 contributions in the last year"
                  >
                    {contributionWeeks.map((week, weekIndex) =>
                      week.map((level, dayIndex) => (
                        <span
                          className={cx(
                            "size-[14px] rounded-[4px] border border-[#9ddff0]/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_1px_4px_rgba(0,0,0,0.22)]",
                            contributionColors[level]
                          )}
                          key={`${weekIndex}-${dayIndex}`}
                          title={`${level} contribution level`}
                        />
                      ))
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-5 text-sm font-black text-[#b8f4ff]">
                  <span>258 contributions in the last year</span>
                  <div className="flex items-center gap-2">
                    <span>Less</span>
                    {contributionColors.map((color, index) => (
                      <span
                        className={cx("size-[14px] rounded-[4px] border border-[#9ddff0]/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]", color)}
                        key={`${color}-${index}`}
                      />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border-2 border-dashed border-[#78ddff]/70 bg-[linear-gradient(145deg,rgba(17,40,58,0.9),rgba(35,24,74,0.88)),rgba(8,13,30,0.92)] p-[clamp(22px,3vw,34px)] shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
            <div className="mb-7 flex items-center justify-center gap-3 text-center text-[#8ee9ff]">
              <BookOpen size={30} strokeWidth={2.5} />
              <h3 className="m-0 text-[clamp(1.45rem,2.8vw,2.4rem)] font-black">
                Featured Projects
              </h3>
            </div>
            <div className="mb-9 h-px bg-[linear-gradient(90deg,transparent,#78ddff,transparent)]" />

            <div className="grid grid-cols-3 gap-5 max-[980px]:grid-cols-2 max-[680px]:grid-cols-1">
              {featuredProjects.map((project) => (
                <article
                  className="group grid min-h-[278px] grid-rows-[auto_1fr_auto] rounded-2xl border border-cyan-100/18 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),transparent_42%),rgba(9,16,40,0.72)] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-[#78ddff]/55 hover:bg-white/[.08]"
                  key={project.title}
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h4 className="m-0 text-xl font-black leading-tight text-white">
                      {project.title}
                    </h4>
                    <div className="flex shrink-0 items-center gap-2">
                      {project.links.map((link) => {
                        const Icon = link.icon;

                        return (
                          <a
                            className="grid size-9 place-items-center rounded-full border border-cyan-100/20 bg-white/[.07] text-[#8ee9ff] transition hover:-translate-y-0.5 hover:border-[#78ddff]/60 hover:bg-[#78ddff]/15"
                            href={link.href}
                            key={link.label}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title} ${link.label}`}
                          >
                            <Icon size={18} strokeWidth={2.4} />
                          </a>
                        );
                      })}
                      <button
                        className="grid size-9 place-items-center rounded-full border border-cyan-100/20 bg-white/[.07] text-[#ffcf8a] transition hover:-translate-y-0.5 hover:border-[#ffcf8a]/70 hover:bg-[#ffcf8a]/15"
                        type="button"
                        aria-label={`View ${project.title} details`}
                      >
                        <Info size={18} strokeWidth={2.4} />
                      </button>
                    </div>
                  </div>

                  <p className="m-0 text-[1rem] font-bold leading-[1.65] text-[#d6e6ff]">
                    {project.description}
                  </p>

                  <div className="mt-6 h-px bg-[linear-gradient(90deg,#78ddff,transparent)] opacity-60" />
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
