import {
  FaEnvelope,
  FaGithub,
  FaItchIo,
  FaLinkedin,
  FaInstagram,
  FaMobileAlt,
} from "react-icons/fa";

function SocialBtn({ icon, link }) {
  return (
    <>
      <li className="m-2 hover:opacity-50 duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span>{icon}</span>
        </a>
      </li>
    </>
  );
}

function ResumeBtn({ link, text }) {
  return (
    <>
      <a
        href={link}
        className=" px-5 rounded hover:opacity-50 duration-300 uppercase font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
        {/* ({text}) */}
      </a>
    </>
  );
}

export default function MainCard() {
  return (
    <>
      <section
        id="home"
        className={`bg-gray-100 rounded-lg shadow-xl relative z-20 flex flex-col justify-between items-center w-full md:w-[400px] mb-5 pb-5`}
      >
        <img
          src="/henry-portfolio/maincard-background.webp"
          alt="background-image"
          className="w-full h-1/2 rounded"
        />
        <img
          src="/henry-portfolio/maincard-picture.webp"
          alt="profile-image"
          className="relative bottom-10 rounded-full w-30 h-30"
        />
        <div className="flex flex-col space-y-1 relative bottom-5">
          <h1 className="text-xl uppercase font-bold ">Henry Chung</h1>
          <h2 className="text-sm uppercase font-semibold">Software Engineer</h2>
          <ul className="flex flex-row justify-center items-center">
            <SocialBtn
              link="https://github.com/HenryChung98"
              icon={<FaGithub size={20} />}
            />
            <SocialBtn
              link="https://9henrychung8.itch.io/"
              icon={<FaItchIo size={20} />}
            />
            <SocialBtn
              link="https://www.linkedin.com/in/henry-chung-cs/"
              icon={<FaLinkedin size={20} />}
            />
            <SocialBtn
              link="https://www.instagram.com/_henrychung/"
              icon={<FaInstagram size={20} />}
            />
            <SocialBtn
              link="mailto:henrychung.dev@gmail.com"
              icon={<FaEnvelope size={20} />}
            />
            <SocialBtn
              link="tel:(778)322-3951"
              icon={<FaMobileAlt size={20} />}
            />
          </ul>
          <div className="flex border-t pt-5 justify-center">
            <ResumeBtn link="/henry-portfolio/Henry_Chung_Resume.pdf" text="" />
            {/* <ResumeBtn link="/Henry_Chung_Resume_WebDev.pdf" text="web" /> */}
          </div>
        </div>
      </section>
    </>
  );
}
