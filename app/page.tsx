import Image from "next/image";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { experience, projects } from "./portfolio-content";
import { BrandLogo } from "./components/brand-icons";
import { PortfolioShell, SkillStack } from "./components/PortfolioInteractions";

const resumeName = "Nguyễn Minh Tâm_CV_Software Engineer.pdf";
const resumePath = `/documents/${encodeURIComponent(resumeName)}`;

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return <div className="section-heading"><h2 className="section-title" id={id} tabIndex={-1}>{children}</h2><div className="section-underline" aria-hidden="true"><span /><span /></div></div>;
}

export default function Home() {
  return (
    <PortfolioShell>
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="page-width hero-layout">
            <div className="hero-copy" data-reveal>
              <h1 id="hero-title" tabIndex={-1}>Software<br /><em>Engineer.</em></h1>
              <p>Building reliable backend systems, thoughtful interfaces and AI-powered products.</p>
              <div className="hero-actions">
                <a className="button button-solid" href={resumePath} download={resumeName}>Download CV <Download aria-hidden="true" size={18} /></a>
                <a className="button button-outline" href="#contact">Contact me <ArrowUpRight aria-hidden="true" size={18} /></a>
              </div>
            </div>
            <div className="hero-image" data-reveal>
              <Image src="/images/profile.jpg" alt="Portrait of Nguyễn Minh Tâm" fill priority sizes="(max-width: 760px) 90vw, 38vw" />
            </div>
          </div>
        </section>

        <section className="content-section about-section" id="about" aria-labelledby="about-title">
          <div className="page-width about-layout" data-reveal>
            <SectionTitle id="about-title">About</SectionTitle>
            <div className="about-copy">
              <p>I’m Nguyễn Minh Tâm, an Information Technology student at VNUHCM — University of Information Technology.</p>
              <p>Based in Ho Chi Minh City, I’m working toward my IT degree at UIT, with an expected graduation in June 2027 and a current GPA of 8.27/10. My focus is on backend engineering, full-stack development and practical AI applications.</p>
              <p>Through internships at AlphaSphere and HONEYNET, I’ve worked on REST APIs, authentication, database design, asynchronous workers and payment workflows. I enjoy understanding how the pieces of a product connect, then turning that understanding into maintainable services and clear interfaces.</p>
              <p>My projects give me room to explore further: AI-assisted reading with DeepReader, blockchain-based vehicle trading, and software supporting social welfare. I care about reliable behavior, thoughtful user experiences and learning through real problems, code reviews and collaboration.</p>
              <dl className="about-facts"><div><dt>GPA</dt><dd>8.27<span> / 10</span></dd></div><div><dt>University</dt><dd>UIT<span> · VNUHCM</span></dd></div><div><dt>Expected graduation</dt><dd>Jun 2027</dd></div></dl>
              <a className="underlined-link" href="#experience">View experience <ArrowUpRight aria-hidden="true" size={17} /></a>
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills" aria-labelledby="skills-title">
          <div className="page-width">
            <SectionTitle id="skills-title">Skills</SectionTitle>
            <SkillStack />
          </div>
        </section>

        <section className="content-section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="page-width">
            <SectionTitle id="experience-title">Experience</SectionTitle>
            <div className="experience-list">
              {experience.map((job) => (
                <article className="experience-row" key={job.company} data-reveal>
                  <div className="experience-date"><strong>{job.period}</strong></div>
                  <div className="experience-card">
                    <div className="experience-card-head">
                      <div className={`company-logo${job.company === "HONEYNET Joint Stock Company" ? " company-logo--white-matte" : ""}`}><Image src={job.logo} alt={job.logoAlt} width={64} height={64} /></div>
                      <div>
                        <h3><a href={job.url} target="_blank" rel="noreferrer">{job.company}<ArrowUpRight aria-hidden="true" size={22} /></a></h3>
                        <p>{job.role}</p>
                      </div>
                    </div>
                    <div className="job-stack" aria-label={`${job.company} technology stack`}>
                      {job.stack.map((tool) => <span key={tool.label} title={tool.label}><BrandLogo name={tool.label} size={25} /><span className="sr-only">{tool.label}</span></span>)}
                    </div>
                    <ul className="job-points">{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section work-section" id="work" aria-labelledby="work-title">
          <div className="page-width">
            <SectionTitle id="work-title">Projects</SectionTitle>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title} data-reveal>
                  <div className="project-image">
                    <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 760px) 92vw, 44vw" className={project.index === "03" ? "project-image-phone" : ""} />
                  </div>
                  <div className="project-details">
                    <p className="project-type">{project.category} · {project.year}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stack" aria-label={`${project.title} technology stack`}>
                      {project.stack.map((tool) => <span key={tool}><BrandLogo name={tool} size={22} /><span>{tool}</span></span>)}
                    </div>
                    <a className="underlined-link" href={project.url} target="_blank" rel="noreferrer">{project.action} <ArrowUpRight aria-hidden="true" size={17} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-layout" data-reveal>
            <div>
              <SectionTitle id="contact-title">Get In Touch</SectionTitle>
              <p className="contact-invitation">Feel free to contact me if you have any questions, want to collaborate, or just want to say hi.</p>
              <a className="contact-email" href="mailto:minhtam1792005@gmail.com">minhtam1792005@gmail.com</a>
              <div className="contact-links" aria-label="Social links">
              <a href="mailto:minhtam1792005@gmail.com" aria-label="Email"><Mail aria-hidden="true" size={26} /></a>
              <a href="https://github.com/TamNgx179" target="_blank" rel="noreferrer" aria-label="GitHub"><BrandLogo name="GitHub" size={26} /></a>
              <a href="https://www.linkedin.com/in/minhtam179" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" size={25} /></a>
              </div>
            </div>
            <div className="contact-image">
              <Image src="/images/tam-developer-avatar.png" alt="Toy-style 3D developer character holding an open laptop" fill sizes="(max-width: 760px) 90vw, 40vw" />
            </div>
          </div>
        </section>
    </PortfolioShell>
  );
}
