export const en = {
  meta: {
    title: "Software Engineer",
    name: "Henry Chung",
    description: "Henry Chung | Software Engineer",
    ogLocale: "en_CA",
    dateLocale: "en-US",
  },
  nav: {
    home: "Home",
    "about-me": "About",
    skills: "Skills",
    projects: "Projects",
    blog: "Blog",
  },
  main: {
    role: "Software Engineer",
    tagline: "Specializing in full-stack development",
    location: "Burnaby, Canada",
    resume: "Resume",
  },
  about: {
    title: "About Me",
    summary: "Summary",
    paragraphs: [
      "Software Engineer specializing in TypeScript, Next.js, and PostgreSQL.",
      "Experienced in designing role-based access control systems and multi-entity relational data models, building analytics dashboards, and developing backend systems with Drizzle ORM and optimized API design for analytics and workflow applications.",
      "Also have hands-on experience in game development using Unreal Engine and Unity with C#.",
    ],
    workExperience: "Work Experience",
    experiences: [
      {
        title: "Software Developer (Volunteer)",
        period: "Feb 2026 - Jun 2026",
        company: "Evernorth Foundation",
        projects: [
          {
            name: "Non-profit Website Redesign",
            responsibilities: [
              "Lead frontend team of 4 developers, owned overall frontend architecture and code quality",
              "Ensure responsive design and cross-device compatibility",
              "Coordinate with UX lead and backend team to ensure seamless integration",
            ],
          },
        ],
      },
    ],
    certifications: "Certifications",
    certIssued: "{date}",
    certExpires: "Expires {date}",
  },
  skills: {
    title: "Skills",
    categories: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend & Database",
      devops: "Cloud & DevOps",
      other: "Other Tools",
    },
  },
  projects: {
    title: "Projects",
    tabs: { web: "Web", game: "Game", mobile: "Mobile" },
    team: "Team",
    solo: "Solo",
    resource: "Resource",
    access: {
      download: "Download",
      playNow: "Play Now",
      website: "View Live",
    },
  },
  blog: {
    title: "Blog",
    recentPosts: "Recent Posts",
  },
};

export type Translations = typeof en;
