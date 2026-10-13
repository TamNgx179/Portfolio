"use client";

import { useEffect, useState, type ReactNode, type MouseEvent } from "react";
import dynamic from "next/dynamic";
import {
  BriefcaseBusiness, FolderKanban, House, Layers3, Mail, UserRound
} from "lucide-react";

const SkillsScene = dynamic(() => import("./SkillsScene"), { ssr: false });

const links = [
  { id: "home", label: "Home", Icon: House },
  { id: "about", label: "About", Icon: UserRound },
  { id: "skills", label: "Skills", Icon: Layers3 },
  { id: "experience", label: "Experience", Icon: BriefcaseBusiness },
  { id: "work", label: "Projects", Icon: FolderKanban },
  { id: "contact", label: "Contact", Icon: Mail }
];

export function PortfolioShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const scrollToSection = (id: string, focus = false) => {
      const section = document.getElementById(id);
      if (!section) return;
      const available = window.innerHeight;
      const rect = section.getBoundingClientRect();
      // Center sections that fit; longer content starts at the viewport top.
      const offset = Math.max(0, (available - rect.height) / 2);
      window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: "instant" });
      if (focus) section.querySelector<HTMLElement>("h1, h2")?.focus({ preventScroll: true });
    };
    const sync = () => scrollToSection(window.location.hash.slice(1));
    const observeScroll = () => {
      const target = window.innerHeight * .45;
      const closest = links.reduce((best, link) => {
        const rect = document.getElementById(link.id)?.getBoundingClientRect();
        if (!rect) return best;
        const distance = rect.top <= target && rect.bottom >= target ? 0 : Math.min(Math.abs(rect.top - target), Math.abs(rect.bottom - target));
        return distance < best.distance ? { id: link.id, distance } : best;
      }, { id: "home", distance: Infinity });
      setActive(closest.id);
    };
    requestAnimationFrame(sync);
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    window.addEventListener("scroll", observeScroll, { passive: true });
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
      window.removeEventListener("scroll", observeScroll);
    };
  }, []);

  const navigate = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
    const id = anchor?.getAttribute("href")?.slice(1);
    if (!id || !links.some((link) => link.id === id) || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (active !== id) window.history.pushState(null, "", `#${id}`);
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      const offset = Math.max(0, (window.innerHeight - rect.height) / 2);
      window.scrollTo({ top: window.scrollY + rect.top - offset, behavior: "instant" });
      requestAnimationFrame(() => section.querySelector<HTMLElement>("h1, h2")?.focus({ preventScroll: true }));
    }
  };

  return <div className="portfolio-shell" onClick={navigate}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <PortfolioNavigation active={active} />
    <main id="main-content" className="section-viewport" tabIndex={-1}>
      {children}
    </main>
  </div>;
}

function PortfolioNavigation({ active }: { active: string }) {
  return (
    <>
      <nav className="section-rail" aria-label="Section navigation">
        {links.map(({ id, label, Icon }) => (
          <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""} aria-label={`Go to ${label}`} aria-current={active === id ? "location" : undefined} title={label}>
            <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
            <span className="rail-label">{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

const allTechnologies = ["Java", "Spring Boot", "NestJS", "Node.js", "Express", "Redis", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Figma", "PostgreSQL", "MongoDB", "Qdrant", "Docker", "Git", "GitHub", "Postman", "DigitalOcean Spaces", "Prometheus"];

export function SkillStack() {
  const [technology, setTechnology] = useState<string>("Java");

  return (
    <div className="skill-universe" aria-label="Interactive technology logos">
      <SkillsScene items={allTechnologies} highlighted={allTechnologies} selected={technology} onSelect={setTechnology} />
      <span className="sr-only" aria-live="polite">Selected technology: {technology}</span>
      <ul className="sr-only">{allTechnologies.map((name) => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}
