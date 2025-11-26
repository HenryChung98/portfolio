import { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const SectionScrollButton = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const toggleVisibility = () => {
      if (container.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container.addEventListener("scroll", toggleVisibility);
    return () => container.removeEventListener("scroll", toggleVisibility);
  }, [containerRef]);

  const scrollToTop = () => {
    containerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        sticky bottom-1 left-full transform
        bg-blue-400 text-white
        p-2 rounded-xl
        hover:opacity-70
        transition-all duration-300 
        text-2xl
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }
      `}
    >
      <FaArrowUp />
    </button>
  );
};

export default function SectionContainer({
  id,
  cardComponent,
  isMobile,
  activeSection,
}) {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative mb-2 z-10 bg-slate-50 rounded-lg shadow-xl p-5 w-full max-w-full md:max-w-[750px] md:min-w-[300px] md:h-[550px] md:right-1 overflow-auto text-left ${
        !isMobile && activeSection !== id ? "hidden" : ""
      } ${!isMobile ? "slide-in-left" : ""} ${
        isMobile && isInView ? "fade-in-bottom" : ""
      } ${isMobile && !isInView ? "opacity-0 translate-y-10" : ""}`}
    >
      {cardComponent}
      <SectionScrollButton containerRef={sectionRef} />
    </section>
  );
}
