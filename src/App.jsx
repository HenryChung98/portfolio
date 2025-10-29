import { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import ParticlesComponent from "./assets/components/Particles";

// components
import NavBar from "./assets/components/NavBar";
import SectionContainer from "./assets/components/SectionContainer";
import ScrollToTopButton from "./assets/components/ScrollToTopButton"; // for mobile

// cards
import MainCard from "./assets/cards/MainCard";
import Banner from "./assets/cards/Banner";
import AboutMe from "./assets/cards/AboutMeCard";
import Skills from "./assets/cards/SkillsCard";
import Projects from "./assets/cards/ProjectsCard";
import Contact from "./assets/cards/ContactCard";

const ScrollArrowButton = ({ onClick }) => (
  <div
    className="bg-white rounded-full p-2 border-3 relative bottom-1 animate-pulse z-99 cursor-pointer hover:bg-gray-50 transition-colors"
    onClick={onClick}
  >
    <MdOutlineKeyboardDoubleArrowUp size={30} />
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [showArrowButton, setShowArrowButton] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const prev = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);

      return () => {
        window.history.scrollRestoration = prev;
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (isMobile) {
        setActiveSection(null);

        if (window.scrollY > 50) {
          setShowArrowButton(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (isMobile) {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArrowClick = () => {
    setShowArrowButton(false);
    const targetElement = document.getElementById("aboutMe");
    const elementPosition = targetElement.offsetTop;
    const offsetPosition = elementPosition - 60;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="flex flex-col mt-15 md:mt-0 justify-center items-center md:w-[1280px] md:flex-row">
        <NavBar activeSection={activeSection} onNavClick={handleNavClick} />
        <MainCard />
        <section
          id="home"
          className={`hidden md:block relative mb-2 md:right-1 z-10 bg-gray-100 rounded-lg shadow-xl p-5 w-full md:max-w-[750px] md:min-w-[300px] md:h-[550px] overflow-auto text-left 
            ${!isMobile && activeSection !== "home" ? "md:hidden" : ""} ${
            !isMobile && "slide-in-left"
          }`}
        >
          <Banner />
        </section>

        {isMobile && showArrowButton && (
          <ScrollArrowButton onClick={handleArrowClick} />
        )}
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
