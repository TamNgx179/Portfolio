"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2 } from "lucide-react";

const orbitGroups = [
  {
    name: "outer",
    path:
      "M 1165 330 C 1165 192 939 80 660 80 C 381 80 155 192 155 330 C 155 468 381 580 660 580 C 939 580 1165 468 1165 330 Z",
    stroke: "#7d4dff",
    dot: "#9a7dff",
    duration: 320,
    reverse: false,
    items: [
      { name: "JavaScript", src: "/images/skills/javascript.png", phase: 0, size: 82, bg: "#fff176" },
      { name: "TypeScript", src: "/images/skills/typescript.png", phase: 0.12, size: 78, bg: "#64b5ff" },
      { name: "Git", src: "/images/skills/git.png", phase: 0.25, size: 78, bg: "#ff875f" },
      { name: "Figma", src: "/images/skills/figma.png", phase: 0.39, size: 74, bg: "#f3e7ff" },
      { name: "PostgreSQL", src: "/images/skills/postgresql.png", phase: 0.53, size: 80, bg: "#d7efff" },
      { name: "MongoDB", src: "/images/skills/mongodb.png", phase: 0.69, size: 78, bg: "#e1ffd5" },
      { name: "Prometheus", src: "/images/skills/prometheus.png", phase: 0.84, size: 74, bg: "#ffd5c2" }
    ],
    dots: [
      [270, 145],
      [610, 82],
      [1018, 142],
      [1140, 376],
      [910, 530],
      [510, 570],
      [185, 388]
    ]
  },
  {
    name: "middle",
    path:
      "M 1065 330 C 1065 214 884 120 660 120 C 436 120 255 214 255 330 C 255 446 436 540 660 540 C 884 540 1065 446 1065 330 Z",
    stroke: "#31c8ff",
    dot: "#56d9ff",
    duration: 270,
    reverse: true,
    items: [
      { name: "React", src: "/images/skills/react.png", phase: 0.08, size: 78, bg: "#173f66" },
      { name: "Express.js", src: "/images/skills/express.png", phase: 0.2, size: 70, bg: "#f7f0de" },
      { name: "CSS", src: "/images/skills/css.png", phase: 0.34, size: 74, bg: "#d8edff" },
      { name: "Next.js", src: "/images/skills/nextjs.png", phase: 0.55, size: 78, bg: "#ffffff" },
      { name: "Grafana", src: "/images/skills/grafana.png", phase: 0.64, size: 72, bg: "#ffe0ba" },
      { name: "Docker", src: "/images/skills/docker.png", phase: 0.78, size: 80, bg: "#d4f6ff" },
      { name: "GitHub", src: "/images/skills/github.png", phase: 0.91, size: 72, bg: "#f2f5ff" }
    ],
    dots: [
      [368, 168],
      [660, 120],
      [950, 170],
      [1062, 333],
      [815, 500],
      [390, 492],
      [258, 330]
    ]
  },
  {
    name: "inner",
    path:
      "M 965 330 C 965 246 828 178 660 178 C 492 178 355 246 355 330 C 355 414 492 482 660 482 C 828 482 965 414 965 330 Z",
    stroke: "#ff9b39",
    dot: "#ffbd6a",
    duration: 230,
    reverse: false,
    items: [
      { name: "Tailwind CSS", src: "/images/skills/tailwind.png", phase: 0.05, size: 66, bg: "#ddf7ff" },
      { name: "Redis", src: "/images/skills/redis.png", phase: 0.18, size: 70, bg: "#ffd6d2" },
      { name: "SQL Server", src: "/images/skills/sqlserver.png", phase: 0.31, size: 68, bg: "#f2f4ea" },
      { name: "HTML", src: "/images/skills/html.png", phase: 0.52, size: 72, bg: "#ffe1cd" },
      { name: "Postman", src: "/images/skills/postman.png", phase: 0.68, size: 68, bg: "#ffe0c6" },
      { name: "Spring Boot", src: "/images/skills/spring.png", phase: 0.84, size: 74, bg: "#e8ffd6" }
    ],
    dots: [
      [514, 200],
      [760, 194],
      [936, 288],
      [882, 424],
      [610, 480],
      [392, 390],
      [404, 268]
    ]
  }
];

const orbitLayers = [...orbitGroups].reverse();

export function SkillsExplorer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative mx-auto min-h-[560px] w-[min(1320px,100%)] overflow-hidden max-[860px]:min-h-[620px] max-[520px]:min-h-[500px]">
      {!isExpanded ? (
        <button
          className="group absolute left-1/2 top-1/2 z-[3] grid w-[min(1160px,108vw)] -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center border-0 bg-transparent p-0 transition duration-500 hover:scale-[1.025] max-[520px]:w-[min(700px,120vw)]"
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-label="Open skill orbit"
        >
          <Image
            src="/images/skills-planet.png"
            alt="Purple planet"
            width={1772}
            height={955}
            loading="eager"
            className="h-auto w-full animate-[planetFloat_5.5s_ease-in-out_infinite] object-contain brightness-110 contrast-110 drop-shadow-[0_0_14px_rgba(144,224,255,.9)] drop-shadow-[0_0_42px_rgba(98,82,255,.82)] drop-shadow-[0_30px_62px_rgba(30,9,126,.72)]"
            priority={false}
          />
        </button>
      ) : (
        <div className="absolute inset-0 animate-[orbitReveal_700ms_ease-out_both]">
          <svg
            className="absolute inset-0 size-full overflow-visible"
            viewBox="0 0 1320 650"
            role="img"
            aria-label="Skill orbit map"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <filter id="skill-soft-shadow" x="-60%" y="-60%" width="220%" height="220%">
                <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity=".34" />
              </filter>
            </defs>

            {orbitGroups.map((group) => (
              <g key={`${group.name}-track`}>
                <path
                  d={group.path}
                  fill="none"
                  stroke={group.stroke}
                  strokeOpacity=".58"
                  strokeWidth="1.5"
                />
                {group.dots.map(([cxValue, cyValue], index) => (
                  <circle
                    cx={cxValue}
                    cy={cyValue}
                    fill={group.dot}
                    key={`${group.name}-dot-${index}`}
                    opacity=".9"
                    r={index % 2 === 0 ? 5 : 3.5}
                  />
                ))}
              </g>
            ))}

            {orbitLayers.map((group) => (
              <g key={`${group.name}-logos`}>
                {group.items.map((item) => (
                  <g
                    className="skill-logo group/logo cursor-pointer"
                    filter="url(#skill-soft-shadow)"
                    key={item.name}
                  >
                    <title>{item.name}</title>
                    <animateMotion
                      begin={`${-(group.duration * item.phase).toFixed(2)}s`}
                      dur={`${group.duration}s`}
                      path={group.path}
                      repeatCount="indefinite"
                      keyPoints={group.reverse ? "1;0" : undefined}
                      keyTimes={group.reverse ? "0;1" : undefined}
                      calcMode={group.reverse ? "linear" : undefined}
                    />
                    <circle
                      className="transition duration-300 group-hover/logo:scale-110"
                      fill={item.bg}
                      stroke="rgba(255,255,255,.26)"
                      strokeWidth="2"
                      r={item.size / 2}
                    />
                    <image
                      height={item.size * 0.62}
                      href={item.src}
                      preserveAspectRatio="xMidYMid meet"
                      width={item.size * 0.62}
                      x={-(item.size * 0.62) / 2}
                      y={-(item.size * 0.62) / 2}
                    />
                    <text
                      className="pointer-events-none opacity-0 transition-opacity duration-200 group-hover/logo:opacity-100"
                      fill="#ffffff"
                      fontSize="18"
                      fontWeight="900"
                      stroke="#080c1c"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      textAnchor="middle"
                      y={item.size / 2 + 24}
                    >
                      {item.name}
                    </text>
                    <text
                      className="pointer-events-none opacity-0 transition-opacity duration-200 group-hover/logo:opacity-100"
                      fill="#ffffff"
                      fontSize="18"
                      fontWeight="900"
                      textAnchor="middle"
                      y={item.size / 2 + 24}
                    >
                      {item.name}
                    </text>
                  </g>
                ))}
              </g>
            ))}
          </svg>

          <button
            className="group absolute left-1/2 top-1/2 z-[6] grid size-[142px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-yellow-100/55 bg-[radial-gradient(circle_at_34%_28%,#fff4a4,#ffd52e_42%,#f59b18_100%)] text-white shadow-[0_0_42px_rgba(255,192,34,.62)] transition duration-300 hover:scale-105 max-[520px]:size-24"
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label="Close skill orbit"
          >
            <Code2
              size={58}
              strokeWidth={3}
              className="drop-shadow-[0_2px_0_rgba(126,68,0,.32)] max-[520px]:size-11"
            />
          </button>
        </div>
      )}
    </div>
  );
}
