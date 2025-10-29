import { useState } from "react";

function SkillIcon({ iconPath, iconAlt }) {
  const [rotateDegree, setRotateDegree] = useState("");
  const handleHover = () => {
    const randomRotate =
      Math.random() > 0.5 ? "hover:-rotate-45" : "hover:rotate-45";
    setRotateDegree(randomRotate);
  };

  return (
    <>
      <img
        src={`/henry-portfolio${iconPath}`}
        alt={iconAlt}
        onMouseEnter={handleHover}
        className={`w-1/3 md:w-1/6 p-4 md:p-7 ${rotateDegree} hover:drop-shadow-lg transition-transform duration-300`}
      />
    </>
  );
}

export default function SkillsCard() {
  return (
    <>
      <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">
        Programing Languages
      </h3>
      <div className="flex flex-wrap items-center">
        <SkillIcon iconPath="/Icons/c-icon.webp" iconAlt="c" />
        <SkillIcon iconPath="/Icons/cpp-icon.webp" iconAlt="cpp" />
        <SkillIcon iconPath="/Icons/cs-icon.webp" iconAlt="cs" />
        <SkillIcon iconPath="/Icons/python-icon.webp" iconAlt="python" />
        <SkillIcon iconPath="/Icons/js-icon.webp" iconAlt="js" />
        <SkillIcon iconPath="/Icons/ts-icon.webp" iconAlt="ts" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">
        Libraries & Frameworks
      </h3>
      <div className="flex flex-wrap">
        <SkillIcon iconPath="/Icons/express-icon.webp" iconAlt="express" />
        <SkillIcon iconPath="/Icons/threejs-icon.webp" iconAlt="threejs" />
        <SkillIcon iconPath="/Icons/react-icon.webp" iconAlt="react" />
        <SkillIcon iconPath="/Icons/nextjs-icon.webp" iconAlt="nextjs" />
        <SkillIcon iconPath="/Icons/tailwind-css-icon.webp" iconAlt="tailwind" />
        <SkillIcon iconPath="/Icons/socket-io-icon.webp" iconAlt="socket-io" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">
        Databases
      </h3>
      <div className="flex flex-wrap">
        <SkillIcon iconPath="/Icons/mongodb-icon.webp" iconAlt="monfodb" />
        <SkillIcon iconPath="/Icons/mysql-icon.webp" iconAlt="mysql" />
        <SkillIcon iconPath="/Icons/sqlite-icon.webp" iconAlt="sqlite" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">
        AI Tools
      </h3>
      <div className="flex flex-wrap">
        <SkillIcon iconPath="/Icons/cursor-ai-code-icon.webp" iconAlt="cursor" />
        <SkillIcon iconPath="/Icons/google-gemini-icon.webp" iconAlt="gemini" />
        <SkillIcon iconPath="/Icons/claude-ai-icon.webp" iconAlt="claude" />
        <SkillIcon iconPath="/Icons/chatgpt-icon.webp" iconAlt="chatgpt" />
      </div>
      <h3 className="text-xl font-bold mb-4 text-indigo-600 border-b-2">
        Software & Tools
      </h3>
      <div className="flex flex-wrap">
        <SkillIcon
          iconPath="/Icons/unreal-engine-icon.webp"
          iconAlt="unreal-engine"
        />
        <SkillIcon
          iconPath="/Icons/unity-game-engine-icon.webp"
          iconAlt="unity-engine"
        />
        <SkillIcon iconPath="/Icons/git-icon.webp" iconAlt="git" />
        <SkillIcon iconPath="/Icons/supabase-icon.webp" iconAlt="supabase" />
        <SkillIcon iconPath="/Icons/figma-icon.webp" iconAlt="figma" />
        <SkillIcon iconPath="/Icons/aws-icon.webp" iconAlt="aws" />
        <SkillIcon
          iconPath="/Icons/adobe-premiere-pro-icon.webp"
          iconAlt="adobe-premiere-pro"
        />
      </div>
    </>
  );
}
