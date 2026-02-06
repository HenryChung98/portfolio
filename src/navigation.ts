// navigation.ts
export function updateActiveNavButton(sectionId: string) {
  document.querySelectorAll(".nav-button").forEach((btn) => {
    const link = btn.querySelector("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    const btnSection = href.replace("#", "");

    if (btnSection === sectionId) {
      btn.classList.add("text-primary");
    } else {
      btn.classList.remove("text-primary");
    }
  });
}

export function setupNavigation() {
  document.querySelectorAll(".nav-button a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (!href) return;

      const sectionId = href.replace("#", "");
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

export function setupScrollObserver() {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      // find most visible section
      let mostVisibleSection: { id: string; ratio: number } | null = null;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (!mostVisibleSection || entry.intersectionRatio > mostVisibleSection.ratio) {
            mostVisibleSection = {
              id: target.id,
              ratio: entry.intersectionRatio,
            };
          }
        }
      }

      // activate most visible section
      if (mostVisibleSection) {
        updateActiveNavButton(mostVisibleSection.id);
      }
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      rootMargin: "-20% 0px -20% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
}
