import { useState, useEffect } from "react";
import {
  MdHome,
  MdAccountCircle,
  MdLightbulb,
  MdDashboard,
  MdEmail,
} from "react-icons/md";

function NavButton({ icon, text, onClick, isActive }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`md:rounded flex flex-col items-center justify-center w-20 h-20 bg-[#334155] duration-100 ${
          isActive ? "text-[#60a5fa]" : "text-[#e0e0e0] hover:text-[#60a5fa]"
        }`}
      >
        <span>{icon}</span>
        <span className="text-xs uppercase p-1">{text}</span>
      </button>
    </li>
  );
}

export default function NavBar({ activeSection, onNavClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);

          // 50px 이상 스크롤했을 때만 반응
          if (scrollDifference > 50) {
            if (currentScrollY > lastScrollY) {
              // 아래로 스크롤: 숨기기
              setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
              // 위로 스크롤: 보이기
              setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 transition-transform duration-300  ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 md:static`}
      >
        <nav>
          <ul className="flex flex-row justify-center items-center md:flex-col">
            <NavButton
              icon={<MdHome size={25} />}
              text="Home"
              onClick={() => onNavClick("home")}
              isActive={activeSection === "home"}
            />
            <NavButton
              icon={<MdAccountCircle size={25} />}
              text="About"
              onClick={() => onNavClick("aboutMe")}
              isActive={activeSection === "aboutMe"}
            />
            <NavButton
              icon={<MdLightbulb size={25} />}
              text="Skills"
              onClick={() => onNavClick("skills")}
              isActive={activeSection === "skills"}
            />
            <NavButton
              icon={<MdDashboard size={25} />}
              text="Projects"
              onClick={() => onNavClick("projects")}
              isActive={activeSection === "projects"}
            />
            <NavButton
              icon={<MdEmail size={25} />}
              text="Contact"
              onClick={() => onNavClick("contact")}
              isActive={activeSection === "contact"}
            />
          </ul>
        </nav>
      </header>
    </>
  );
}
