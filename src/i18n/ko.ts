import type { Translations } from "./en";

export const ko: Translations = {
  meta: {
    title: "소프트웨어 엔지니어",
    name: "정현규",
    description: "정현규 | 소프트웨어 엔지니어",
    ogLocale: "ko_KR",
    dateLocale: "ko-KR",
  },
  nav: {
    home: "홈",
    "about-me": "소개",
    skills: "기술",
    projects: "프로젝트",
    blog: "블로그",
  },
  main: {
    role: "소프트웨어 엔지니어",
    tagline: "풀스택 개발 전문",
    location: "경기도 고양시",
    resume: "이력서",
  },
  about: {
    title: "소개",
    summary: "요약",
    paragraphs: [
      "TypeScript, Next.js, PostgreSQL을 전문으로 하는 소프트웨어 엔지니어입니다.",
      "역할 기반 접근 제어 시스템과 다중 엔터티 관계형 데이터 모델 설계, 분석 대시보드 구축 경험이 있으며, Drizzle ORM과 최적화된 API 설계를 활용해 분석 및 워크플로우 애플리케이션의 백엔드 시스템을 개발해 왔습니다.",
      "또한 Unreal Engine과 Unity(C#)를 활용한 게임 개발 실무 경험을 보유하고 있습니다.",
    ],
    workExperience: "경력",
    experiences: [
      {
        title: "소프트웨어 개발자 (자원봉사)",
        period: "2026년 2월 - 2026년 6월",
        company: "Evernorth Foundation",
        projects: [
          {
            name: "비영리 단체 웹사이트 리디자인",
            responsibilities: [
              "4명의 프론트엔드 개발 팀을 리드하며 전체 프론트엔드 아키텍처와 코드 품질 총괄",
              "반응형 디자인 및 다양한 기기 간 호환성 보장",
              "UX 리드 및 백엔드 팀과 협업하여 원활한 통합 지원",
            ],
          },
        ],
      },
    ],
    certifications: "자격증",
    certIssued: "{date} 취득",
    certExpires: "{date} 만료",
  },
  skills: {
    title: "기술",
    categories: {
      languages: "프로그래밍 언어",
      frontend: "프론트엔드",
      backend: "백엔드 & 데이터베이스",
      devops: "클라우드 & DevOps",
      other: "기타 도구",
    },
  },
  projects: {
    title: "프로젝트",
    tabs: { web: "웹", game: "게임", mobile: "모바일" },
    team: "팀",
    solo: "개인",
    resource: "자료",
    access: {
      download: "다운로드",
      playNow: "플레이하기",
      website: "사이트 보기",
    },
  },
  blog: {
    title: "블로그",
    recentPosts: "최근 글",
  },
};
