import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`
          fixed z-50 bottom-2 right-2 
          bg-blue-400 text-white border-3 border-white
          p-2 rounded-xl
          hover:opacity-70
          transition-all duration-300 
          transform text-2xl
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0 pointer-events-none"
          }
        `}
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default ScrollToTopButton;
