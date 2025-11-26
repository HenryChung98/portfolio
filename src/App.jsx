import { useState, useEffect } from "react";
import ParticlesComponent from "./assets/components/Particles";

// components
import NavBar from "./assets/components/NavBar";
import SectionContainer from "./assets/components/SectionContainer";
import ScrollToTopButton from "./assets/components/ScrollToTopButton";

// cards
import MainCard from "./assets/cards/MainCard";
import Banner from "./assets/cards/Banner";
import AboutMe from "./assets/cards/AboutMeCard";
import Skills from "./assets/cards/SkillsCard";
import Projects from "./assets/cards/ProjectsCard";
import Contact from "./assets/cards/ContactCard";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
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
        <section
          id="home"
          className={`hidden md:block relative mb-2 md:right-1 z-10 bg-gray-100 rounded-lg shadow-xl w-full md:max-w-[750px] md:min-w-[300px] text-left 
            ${!isMobile && activeSection !== "home" ? "md:hidden" : ""} ${
            !isMobile && "slide-in-left"
          }`}
        >
          <Banner />
        </section>

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
