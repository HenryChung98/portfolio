import { useState, useEffect } from "react";
import ParticlesComponent from "./assets/components/Particles";

// components
import NavBar from "./assets/components/NavBar";
import SectionContainer from "./assets/components/SectionContainer";
import ScrollToTopButton from "./assets/components/ScrollToTopButton";

// cards
import MainCard from "./assets/cards/MainCard";
import Blog from "./assets/cards/BlogCard";
import AboutMe from "./assets/cards/AboutMeCard";
import Skills from "./assets/cards/SkillsCard";
import Projects from "./assets/cards/ProjectsCard";
import Contact from "./assets/cards/ContactCard";

function App() {
  const [activeSection, setActiveSection] = useState("aboutMe");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsMobile(window.innerWidth < 768);
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (isMobile) {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="flex flex-col md:flex-row mt-15 md:mt-0 justify-center items-center md:w-[1280px]">
        <NavBar activeSection={activeSection} onNavClick={handleNavClick} />
        <MainCard />
        <SectionContainer
          id="aboutMe"
          cardComponent={<AboutMe />}
          isMobile={isMobile}
          activeSection={activeSection}
        />

        <SectionContainer
          id="skills"
          cardComponent={<Skills />}
          isMobile={isMobile}
          activeSection={activeSection}
        />

        <SectionContainer
          id="projects"
          cardComponent={<Projects />}
          isMobile={isMobile}
          activeSection={activeSection}
        />

        <SectionContainer
          id="blog"
          cardComponent={<Blog />}
          isMobile={isMobile}
          activeSection={activeSection}
        />

        <SectionContainer
          id="contact"
          cardComponent={<Contact />}
          isMobile={isMobile}
          activeSection={activeSection}
        />

        <ScrollToTopButton />
      </main>
      <ParticlesComponent id="particles" />
    </>
  );
}

export default App;
