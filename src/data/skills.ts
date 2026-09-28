import type { Translations } from "../i18n/en";
import { asset } from "../utils/asset";

// icon: path under src/assets/icons (72px webp)
const skill = (label: string, icon: string) => ({ label, icon: asset(`icons/${icon}`) });

// every skill that can appear in the Skills section or on a project card
export const SKILLS = {
  typescript: skill("TypeScript", "language/typescript-icon.webp"),
  javascript: skill("JavaScript", "language/javascript-icon.webp"),
  python: skill("Python", "language/python-icon.webp"),
  cpp: skill("C++", "language/cpp-icon.webp"),
  csharp: skill("C#", "language/csharp-icon.webp"),
  swift: skill("Swift", "language/swift-icon.webp"),

  react: skill("React", "frontend/react-icon.webp"),
  nextjs: skill("Next.js", "frontend/nextjs-icon.webp"),
  tanstack: skill("Tanstack Query", "frontend/tanstack-query-icon.webp"),
  tailwind: skill("TailwindCSS", "frontend/tailwind-css-icon.webp"),
  astro: skill("Astro", "frontend/astro-icon.webp"),
  threejs: skill("Three.js", "frontend/threejs-icon.webp"),

  nestjs: skill("NestJs", "backend/nest-js-icon.webp"),
  nodejs: skill("Node.js", "backend/node-js-icon.webp"),
  supabase: skill("Supabase", "backend/supabase-icon.webp"),
  postgresql: skill("PostgreSQL", "backend/postgresql-icon.webp"),
  mysql: skill("MySQL", "backend/mysql-icon.webp"),
  mongodb: skill("MongoDB", "backend/mongodb-icon.webp"),
  drizzle: skill("Drizzle ORM", "backend/drizzle-orm-icon.webp"),

  aws: skill("AWS", "devops/aws-icon.webp"),
  oracle: skill("Oracle Cloud", "devops/oracle-icon.webp"),
  docker: skill("Docker", "devops/docker-icon.webp"),
  git: skill("Git", "devops/git-icon.webp"),

  figma: skill("Figma", "other/figma-icon.webp"),
  unity: skill("Unity Engine", "other/unity-game-engine-icon.webp"),
  unreal: skill("Unreal Engine", "other/unreal-engine-icon.webp"),
};

export type SkillId = keyof typeof SKILLS;

// Skills section, in page order. Category labels are localized in src/i18n (skills.categories)
export const SKILL_GROUPS: Record<keyof Translations["skills"]["categories"], SkillId[]> = {
  languages: ["typescript", "javascript", "python", "cpp", "csharp", "swift"],
  frontend: ["react", "nextjs", "tanstack", "tailwind", "astro", "threejs"],
  backend: ["nestjs", "nodejs", "supabase", "postgresql", "mysql", "mongodb", "drizzle"],
  devops: ["aws", "oracle", "docker", "git"],
  other: ["figma", "unity", "unreal"],
};
