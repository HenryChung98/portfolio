import { useState } from "react";

function CertificationIcon({ iconPath, iconAlt, issueDate, expiryDate }) {
  const [rotateDegree, setRotateDegree] = useState("");
  const handleHover = () => {
    const randomRotate = Math.random() > 0.5 ? "hover:-rotate-45" : "hover:rotate-45";
    setRotateDegree(randomRotate);
  };
  return (
    <>
      <div className="flex items-center md:w-1/2 p-3 w-[300px]">
        <img
          src={`/henry-portfolio${iconPath}`}
          alt={iconAlt}
          onMouseEnter={handleHover}
          className={`w-1/3 ${rotateDegree} hover:drop-shadow-lg transition-transform duration-300`}
        />
        <div>
          <p className="text-right">{issueDate}</p>
          <p className="text-right">{expiryDate}</p>
        </div>
      </div>
    </>
  );
}

export default function AboutMeCard() {
  return (
    <>
      <h3 className={`text-xl font-bold mb-4 border-b-2`}>About Me</h3>
      <article>
        <p className="mb-4">
          I have completed a Computing Science diploma at Douglas College, with a strong foundation
          in computer science fundamentals.
        </p>
        <p className="mb-4">
          I have solid experience building web applications using modern technologies such as
          Next.js, TypeScript, Tailwind CSS, and Supabase. I am currently developing a CRM web
          application that emphasizes scalable architecture, secure authorization flows, strict
          organization-level data isolation, and well-structured relational database design to
          ensure data integrity and maintainability.
        </p>
        <p className="mb-4">
          In addition to web development, I have experience in game development, using Unreal Engine
          and C# with Unity. Through team-based projects, I contributed to implementing game
          mechanics and user interfaces while applying software engineering principles such as clear
          architecture, high cohesion, low coupling, and continuous refactoring.
        </p>
        {/* <p className="mb-4">
          Outside of programming, I participate in dance performances and drop-in sessions with my
          school club, which enhance my creativity and collaboration skills.
        </p> */}
      </article>
      <article>
        <h3 className={`text-xl font-bold mb-4 border-b-2`}>Certifications</h3>
        <div className="flex flex-wrap items-center">
          <CertificationIcon
            iconPath="/Icons/aws-certified-ai-practitioner.webp"
            iconAlt="aws-certified-ai-practitioner"
            issueDate="July 2025"
            expiryDate="Expires July 2028"
          />
          <CertificationIcon
            iconPath="/Icons/aws-certified-cloud-practitioner.webp"
            iconAlt="aws-certified-cloud-practitioner"
            issueDate="June 2025"
            expiryDate="Expires June 2028"
          />
        </div>
        {/* <div className="md:hidden">
          <h1 className={`text-xl font-bold mb-4 border-b-2`}>Play Now!</h1>
          <a
            href="https://gaembite.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto"
          >
            <img
              src="/henry-portfolio/Icons/gaembitebg-web.webp"
              alt="gaembite"
              className="w-1/3 rounded mx-auto hover:animate-bounce "
            />
          </a>
        </div> */}
      </article>
    </>
  );
}
