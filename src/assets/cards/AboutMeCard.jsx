import { useState } from "react";

function CertificationIcon({ iconPath, iconAlt, issueDate, expiryDate }) {
  const [rotateDegree, setRotateDegree] = useState("");
  const handleHover = () => {
    const randomRotate =
      Math.random() > 0.5 ? "hover:-rotate-45" : "hover:rotate-45";
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
      <h3 className={`text-xl font-bold mb-4  border-b-2`}>About Me</h3>
      <article>
        <p className="mb-4">
          I am currently pursuing a Computing Science diploma at Douglas
          College, with a deep passion for game and web development.
        </p>
        <p className="mb-4">
          I have developed video games using programming languages like C++ and
          C#, along with industry-standard game engines such as Unity and Unreal
          Engine. My expertise lies in designing game mechanics and building
          intuitive user interfaces.
        </p>
        <p className="mb-4">
          I also have a solid understanding of foundational web technologies and
          experience with frameworks such as Next.js, Tailwind CSS for styling,
          as well as backend services like Supabase. Currently, I am working on
          a CRM project that helps small businesses manage customers and sales
          more efficiently.
        </p>
        <p className="mb-4">
          Outside of programming, I participate in dance performances and
          drop-in sessions with my school club, which enhance my creativity and
          collaboration skills.
        </p>
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
        <div className="md:hidden">
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
        </div>
      </article>
    </>
  );
}
