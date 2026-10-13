import Image from "next/image";
import {
  siDigitalocean, siDocker, siExpress, siFigma, siGit, siGithub,
  siGooglegemini, siHaystack, siJavascript, siMongodb, siNestjs,
  siNextdotjs, siNodedotjs, siPostgresql, siPostman, siPrometheus,
  siQdrant, siReact, siRedis, siSolidity, siSpringboot, siTailwindcss,
  siTypescript, siPython, siFastapi, siApachekafka, siGrafana, siVite, siEthers, siEthereum, siMongoose
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  "Spring Boot": siSpringboot,
  NestJS: siNestjs,
  "Node.js": siNodedotjs,
  Express: siExpress,
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  "Tailwind CSS": siTailwindcss,
  Figma: siFigma,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  Qdrant: siQdrant,
  Haystack: siHaystack,
  Gemini: siGooglegemini,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  Postman: siPostman,
  "DigitalOcean Spaces": siDigitalocean,
  Prometheus: siPrometheus,
  Solidity: siSolidity,
  Python: siPython,
  FastAPI: siFastapi,
  "Apache Kafka": siApachekafka,
  Grafana: siGrafana,
  Vite: siVite,
  "Ethers.js": siEthers,
  "Ethereum / Sepolia": siEthereum,
  Mongoose: siMongoose
};

export function logoUrl(name: string) {
  if (name === "Java") return "/images/skills/java.png";
  const icon = icons[name];
  if (!icon) return "";
  return `data:image/svg+xml,${encodeURIComponent(icon.svg.replace("<svg ", `<svg fill="#${icon.hex}" `))}`;
}

export function logoShape(name: string) {
  const icon = icons[name];
  return icon ? { path: icon.path, color: `#${icon.hex}` } : null;
}

export function BrandLogo({ name, size = 30 }: { name: string; size?: number }) {
  if (name === "Java") {
    return <Image src="/images/skills/java.png" alt="" width={size} height={size} />;
  }
  const icon = icons[name];
  if (!icon) return null;
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} fill={`#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  );
}
