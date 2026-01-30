import { useState } from "react";

// Icon size: 72px
// tanstack, drizzle, antigravity are not 72px
function SkillIcon({ iconPath, iconAlt }) {
  const [rotateDegree, setRotateDegree] = useState("");
  const handleHover = () => {
    const randomRotate = Math.random() > 0.5 ? "hover:-rotate-45" : "hover:rotate-45";
    setRotateDegree(randomRotate);
  };

  return (
    <li className="w-1/3 md:w-1/6 relative group">
      <div className="p-7">
        <img
          src={`/henry-portfolio${iconPath}`}
          alt={iconAlt}
          onMouseEnter={handleHover}
          className={`w-full h-full object-contain ${rotateDegree} hover:drop-shadow-lg transition-transform duration-300`}
        />
      </div>
      <span className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-1 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {iconAlt}
      </span>
      <span className="md:hidden block text-center text-xs text-gray-700">{iconAlt}</span>
    </li>
  );
}

export default function SkillsCard() {
  return (
    <>
      <div>
        <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">Languages</h3>
        <ul className="flex flex-wrap items-center">
          <SkillIcon iconPath="/Icons/typescript-icon.webp" iconAlt="TypeScript" />
          <SkillIcon iconPath="/Icons/javascript-icon.webp" iconAlt="JavaScript" />
          <SkillIcon iconPath="/Icons/python-icon.webp" iconAlt="Python" />
          <SkillIcon iconPath="/Icons/cpp-icon.webp" iconAlt="C++" />
          <SkillIcon iconPath="/Icons/csharp-icon.webp" iconAlt="C#" />
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">Frontend</h3>
        <ul className="flex flex-wrap">
          <SkillIcon iconPath="/Icons/react-icon.webp" iconAlt="React" />
          <SkillIcon iconPath="/Icons/nextjs-icon.webp" iconAlt="Next.js" />
          <SkillIcon iconPath="/Icons/tanstack-query-icon.webp" iconAlt="Tanstack Query" />
          <SkillIcon iconPath="/Icons/tailwind-css-icon.webp" iconAlt="TailwindCSS" />
          <SkillIcon iconPath="/Icons/shadcn-ui-icon.webp" iconAlt="Shadcn UI" />
          <SkillIcon iconPath="/Icons/astro-icon.webp" iconAlt="Astro" />
          <SkillIcon iconPath="/Icons/threejs-icon.webp" iconAlt="Three.js" />
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">Backend & Database</h3>
        <ul className="flex flex-wrap">
          <SkillIcon iconPath="/Icons/node-js-icon.webp" iconAlt="Node.js" />
          <SkillIcon iconPath="/Icons/supabase-icon.webp" iconAlt="Supabase" />
          <SkillIcon iconPath="/Icons/postgresql-icon.webp" iconAlt="PostgreSQL" />
          <SkillIcon iconPath="/Icons/mysql-icon.webp" iconAlt="MySQL" />
          <SkillIcon iconPath="/Icons/mongodb-icon.webp" iconAlt="MongoDB" />
          <SkillIcon iconPath="/Icons/drizzle-orm-icon.webp" iconAlt="Drizzle ORM" />
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">Cloud & DevOps</h3>
        <ul className="flex flex-wrap">
          {/* <SkillIcon iconPath="/Icons/terraform-icon.webp" iconAlt="Terraform" /> */}
          <SkillIcon iconPath="/Icons/aws-icon.webp" iconAlt="Amazon Web Services" />
          <SkillIcon iconPath="/Icons/oracle-icon.webp" iconAlt="Oracle Cloud" />
          <SkillIcon iconPath="/Icons/docker-icon.webp" iconAlt="Docker" />
          <SkillIcon iconPath="/Icons/git-icon.webp" iconAlt="Git" />
        </ul>
      </div>
      {/* <div>
        <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">AI & Tools</h3>
        <ul className="flex flex-wrap">
          <SkillIcon iconPath="/Icons/google-antigravity-icon.webp" iconAlt="Google Antigravity" />
          <SkillIcon iconPath="/Icons/cursor-ai-code-icon.webp" iconAlt="Cursor AI" />
          <SkillIcon iconPath="/Icons/google-gemini-icon.webp" iconAlt="Gemini" />
          <SkillIcon iconPath="/Icons/claude-ai-icon.webp" iconAlt="Claude" />
          <SkillIcon iconPath="/Icons/chatgpt-icon.webp" iconAlt="ChatGPT" />
        </ul>
      </div> */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">Other Tools</h3>
        <ul className="flex flex-wrap">
          <SkillIcon iconPath="/Icons/figma-icon.webp" iconAlt="Figma" />
          <SkillIcon iconPath="/Icons/unity-game-engine-icon.webp" iconAlt="Unity Engine" />
          <SkillIcon iconPath="/Icons/unreal-engine-icon.webp" iconAlt="Unreal Engine" />
        </ul>
      </div>
    </>
  );
}
