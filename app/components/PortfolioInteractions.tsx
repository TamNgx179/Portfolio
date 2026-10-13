"use client";

import { Children, cloneElement, isValidElement, useEffect, useRef, useState, type ReactNode, type MouseEvent, type HTMLAttributes } from "react";
import dynamic from "next/dynamic";
import { BriefcaseBusiness, FolderKanban, House, Layers3, Mail, UserRound } from "lucide-react";

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
  const [enabled, setEnabled] = useState(false);
  const jump = useRef<(id: string, focus?: boolean) => void>(() => {});

  useEffect(() => {
    let currentId = "home", lastWheel = 0, locked = false, total = 0, focusFrame = 0;
    let touchStart = 0, touchIgnored = false, touchCanLeave = false;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const show = (id: string, focus = false) => {
      if (!links.some((link) => link.id === id)) return;
      currentId = id; setActive(id);
      cancelAnimationFrame(focusFrame);
      focusFrame = requestAnimationFrame(() => {
        const section = document.getElementById(id);
        if (section) section.scrollTop = 0;
        if (focus) section?.querySelector<HTMLElement>("h1, h2")?.focus({ preventScroll: true });
      });
    };
    jump.current = show;
    const panel = () => document.getElementById(currentId);
    const canLeave = (section: HTMLElement, direction: number) => direction > 0
      ? section.scrollTop + section.clientHeight >= section.scrollHeight - 2 : section.scrollTop <= 2;
    const advance = (direction: number) => {
      const next = links[links.findIndex((link) => link.id === currentId) + direction];
      if (!next) return;
      window.history.replaceState(null, "", `#${next.id}`); show(next.id, true);
    };
    const wheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !event.deltaY) return;
      const now = performance.now(), gap = now - lastWheel;
      lastWheel = now;
      if (gap > 220) { locked = false; total = 0; }
      if (locked) { event.preventDefault(); return; }
      const section = panel(), direction = Math.sign(event.deltaY);
      if (!section) return;
      if (!canLeave(section, direction)) {
        const remaining = direction > 0 ? section.scrollHeight - section.clientHeight - section.scrollTop : section.scrollTop;
        const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? section.clientHeight : 1);
        if (Math.abs(delta) >= remaining) {
          event.preventDefault(); section.scrollTop += direction * remaining; locked = true;
        }
        return;
      }
      event.preventDefault(); total += event.deltaY;
      if (Math.abs(total) >= 12) { locked = true; advance(direction); }
    };
    const keyboard = (event: KeyboardEvent) => {
      if ((event.target as HTMLElement).closest("input, textarea, select, button, [role='group'], [contenteditable='true']")) return;
      if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        const id = event.key === "Home" ? "home" : "contact";
        window.history.replaceState(null, "", `#${id}`); show(id, true); return;
      }
      if (!["PageDown", "PageUp", "ArrowDown", "ArrowUp"].includes(event.key)) return;
      const direction = ["PageDown", "ArrowDown"].includes(event.key) ? 1 : -1;
      const section = panel();
      if (!section) return;
      event.preventDefault();
      if (canLeave(section, direction)) { if (!event.repeat) advance(direction); }
      else section.scrollBy({ top: direction * (event.key.startsWith("Page") ? section.clientHeight * .85 : 40), behavior: "instant" });
    };
    const touchstart = (event: TouchEvent) => {
      touchStart = event.touches[0]?.clientY ?? 0;
      touchIgnored = !!(event.target as HTMLElement).closest("canvas, a, button, input, textarea, select");
      const section = panel(); touchCanLeave = !!section && section.scrollHeight <= section.clientHeight + 2;
    };
    const touchmove = (event: TouchEvent) => {
      if (touchIgnored) return;
      const direction = Math.sign(touchStart - (event.touches[0]?.clientY ?? touchStart));
      const section = panel();
      if (section && canLeave(section, direction)) { touchCanLeave = true; event.preventDefault(); }
    };
    const touchend = (event: TouchEvent) => {
      if (touchIgnored || !touchCanLeave) return;
      const delta = touchStart - (event.changedTouches[0]?.clientY ?? touchStart);
      const section = panel();
      if (section && Math.abs(delta) > 45 && canLeave(section, Math.sign(delta))) advance(Math.sign(delta));
    };
    const sync = () => show(window.location.hash.slice(1) || "home", true);
    const initialFrame = requestAnimationFrame(() => {
      setEnabled(true); show(window.location.hash.slice(1) || "home"); window.scrollTo(0, 0);
    });
    window.addEventListener("hashchange", sync); window.addEventListener("popstate", sync);
    window.addEventListener("wheel", wheel, { passive: false }); window.addEventListener("keydown", keyboard);
    window.addEventListener("touchstart", touchstart, { passive: true });
    window.addEventListener("touchmove", touchmove, { passive: false }); window.addEventListener("touchend", touchend);
    return () => {
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(initialFrame); cancelAnimationFrame(focusFrame);
      window.removeEventListener("hashchange", sync); window.removeEventListener("popstate", sync);
      window.removeEventListener("wheel", wheel); window.removeEventListener("keydown", keyboard);
      window.removeEventListener("touchstart", touchstart); window.removeEventListener("touchmove", touchmove);
      window.removeEventListener("touchend", touchend);
    };
  }, []);

  const navigate = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>("a[href^='#']");
    const id = anchor?.getAttribute("href")?.slice(1);
    if (!id || !links.some((link) => link.id === id) || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (active !== id) window.history.pushState(null, "", `#${id}`);
    jump.current(id, true);
  };

  return <div className="portfolio-shell" onClick={navigate}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="section-rail" aria-label="Section navigation">
      {links.map(({ id, label, Icon }) => <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""} aria-label={`Go to ${label}`} aria-current={active === id ? "location" : undefined} title={label}>
        <Icon aria-hidden="true" size={21} strokeWidth={1.8} /><span className="rail-label">{label}</span>
      </a>)}
    </nav>
    <main id="main-content" className={`section-viewport${enabled ? " section-panels" : ""}`} tabIndex={-1}>
      {Children.map(children, (child) => {
        if (!isValidElement<HTMLAttributes<HTMLElement>>(child) || !child.props.id) return child;
        const inactive = enabled && child.props.id !== active;
        return cloneElement(child, { hidden: inactive, inert: inactive });
      })}
    </main>
  </div>;
}

const allTechnologies = ["Java", "Spring Boot", "NestJS", "Node.js", "Express", "Redis", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Figma", "PostgreSQL", "MongoDB", "Qdrant", "Docker", "Git", "GitHub", "Postman", "DigitalOcean Spaces", "Prometheus"];

export function SkillStack() {
  const [technology, setTechnology] = useState<string>("Java");
  return <div className="skill-universe" aria-label="Interactive technology logos">
    <SkillsScene items={allTechnologies} highlighted={allTechnologies} selected={technology} onSelect={setTechnology} />
    <span className="sr-only" aria-live="polite">Selected technology: {technology}</span>
    <ul className="sr-only">{allTechnologies.map((name) => <li key={name}>{name}</li>)}</ul>
  </div>;
}
