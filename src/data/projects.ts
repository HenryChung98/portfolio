import type { Locale } from "../i18n";
import type { Translations } from "../i18n/en";
import type { SkillId } from "./skills";

// To add a project: put the banner in src/assets/project-banners/ and add an entry below.
// Page order follows this list. A category's tab appears once it has a project;
// a new category only needs its label in src/i18n (projects.tabs).
type ProjectText = {
  title: string;
  subTitle: string; // also used as the banner alt text
  desc: string[];
};

export type Project = {
  category: keyof Translations["projects"]["tabs"];
  banner: string; // path under src/assets/project-banners; shown at 16:9 (other ratios get cropped), ~1600px wide stays sharp on retina
  skills: SkillId[];
  resource?: string;
  live?: { href: string; label: keyof Translations["projects"]["access"] };
  team?: boolean;
} & Record<Locale, ProjectText>;

export const PROJECTS: Project[] = [
  // ───────── web ─────────
  {
    category: "web",
    banner: "web/crm-application.webp",
    skills: ["nextjs", "tanstack", "postgresql", "typescript", "tailwind"],
    resource: "https://henrychung98.github.io/blog/posts/010-crm-web-app-project/",
    live: { href: "https://hc-crm-mvp.vercel.app/", label: "website" },
    en: {
      title: "CRM Web Application",
      subTitle: "Internal CRM Web Application with member management",
      desc: [
        "Developed a drag-and-drop Kanban pipeline, FullCalendar-based scheduling, and inline-editable data table",
        "Built a CRM analytics dashboard including KPIs, pipeline values, deal metrics, and revenue trends",
        "Implemented optimistic updates with Tanstack Query to provide instant feedback",
      ],
    },
    ko: {
      title: "CRM 웹 애플리케이션",
      subTitle: "회원 관리 기능을 갖춘 사내 CRM 웹 애플리케이션",
      desc: [
        "드래그 앤 드롭 칸반 파이프라인, FullCalendar 기반 일정 관리, 인라인 편집이 가능한 데이터 테이블 개발",
        "KPI, 파이프라인 가치, 거래 지표, 매출 추이를 포함한 CRM 분석 대시보드 구축",
        "Tanstack Query의 낙관적 업데이트를 적용해 즉각적인 피드백 제공",
      ],
    },
  },
  {
    category: "web",
    banner: "web/cover-letter-filler-banner.webp",
    skills: ["oracle", "docker", "nextjs", "typescript", "tailwind"],
    resource: "https://henrychung98.github.io/blog/posts/009-cover-letter-filler-project/",
    live: { href: "https://cover-letter-filler.vercel.app/", label: "website" },
    en: {
      title: "Cover Letter Filler",
      subTitle: "Word template editor with dynamic placeholder replacement",
      desc: [
        "Developed square bracket-based keyword extraction and automated paragraph detection",
        "Enabled editing of paragraph content",
        "Implemented PDF export using Gotenberg (Docker-based conversion)",
      ],
    },
    ko: {
      title: "커버레터 편집기",
      subTitle: "동적 플레이스홀더 치환 기능을 갖춘 Word 템플릿 편집기",
      desc: [
        "대괄호 기반 키워드 추출 및 자동 문단 감지 기능 개발",
        "문단 내용 편집 기능 구현",
        "Gotenberg(Docker 기반 변환)를 활용한 PDF 내보내기 구현",
      ],
    },
  },

  // ───────── game ─────────
  {
    category: "game",
    banner: "game/poker-banner.webp",
    skills: ["unity", "csharp"],
    resource: "https://github.com/HenryChung98/CMPT2276-POKER2",
    live: { href: "https://9henrychung8.itch.io/prototype-texas-holdem-poker", label: "playNow" },
    team: true,
    en: {
      title: "Texas Hold'em Poker Prototype (Role: Lead Engineer)",
      subTitle:
        "Poker game prototype with AI opponents for Software Engineering course team project",
      desc: [
        "Managed 4-person team using Agile, established coding standards and Git workflow to reduce merge conflicts",
        "Built core game systems for turn validation, betting, and deck management",
        "Designed interactive UI with animations and audio for enhanced engagement",
      ],
    },
    ko: {
      title: "텍사스 홀덤 포커 프로토타입 (역할: 리드 엔지니어)",
      subTitle: "소프트웨어 공학 수업 팀 프로젝트로 제작한 AI 상대 포커 게임 프로토타입",
      desc: [
        "애자일 방식으로 4인 팀을 운영하고, 코딩 표준과 Git 워크플로우를 수립해 머지 충돌 감소",
        "턴 검증, 베팅, 덱 관리 등 핵심 게임 시스템 구축",
        "몰입감을 높이는 애니메이션과 오디오가 적용된 인터랙티브 UI 설계",
      ],
    },
  },
  {
    category: "game",
    banner: "game/game-jam-banner.webp",
    skills: ["unity", "csharp"],
    resource: "https://github.com/mugwhump/GGJ2025-Paperless",
    team: true,
    en: {
      title: "Speech Bubble Game (Role: Programmer)",
      subTitle:
        "Themed Bubble at the Vancouver Global Game Jam, featuring ability acquisition through interacting with speech bubbles",
      desc: [
        "Implemented character movement and collision handling",
        "Implemented actions that vary based on the acquired ability",
      ],
    },
    ko: {
      title: "말풍선 게임 (역할: 프로그래머)",
      subTitle:
        "밴쿠버 Global Game Jam의 'Bubble' 테마 출품작으로, 말풍선과 상호작용해 능력을 획득하는 게임",
      desc: ["캐릭터 이동 및 충돌 처리 구현", "획득한 능력에 따라 달라지는 액션 구현"],
    },
  },
  {
    category: "game",
    banner: "game/vr-game-banner.webp",
    skills: ["unreal"],
    en: {
      title: "VR Shooter Game",
      subTitle: "VR shooter playable on Meta Quest Link",
      desc: [
        "Created intense shooting action with responsive controls using Niagara",
        "Implemented dynamic hand animations",
        "Implemented recall functionality for grabbable objects",
      ],
    },
    ko: {
      title: "VR 슈팅 게임",
      subTitle: "Meta Quest Link로 플레이 가능한 VR 슈팅 게임",
      desc: [
        "Niagara를 활용해 반응성 높은 조작감의 슈팅 액션 구현",
        "동적인 손 애니메이션 구현",
        "잡을 수 있는 오브젝트의 회수 기능 구현",
      ],
    },
  },
  {
    category: "game",
    banner: "game/infinite-scroll-banner.webp",
    skills: ["unity", "csharp"],
    resource: "https://github.com/HenryChung98/RotationRush",
    live: { href: "https://9henrychung8.itch.io/rotation-rush", label: "playNow" },
    en: {
      title: "Infinite Scroll Game",
      subTitle:
        "Screen-spinning twists and obstacle dodging, featuring challenging obstacles with increasing difficulty",
      desc: [
        "Organized obstacles and score objects into distinct classes for proper collision handling",
        "Implemented context-based animation system",
        "Added dynamic screen-spinning and rotation mechanics",
      ],
    },
    ko: {
      title: "무한 스크롤 게임",
      subTitle: "화면 회전과 장애물 피하기가 특징이며, 갈수록 난이도가 높아지는 게임",
      desc: [
        "장애물과 점수 오브젝트를 별도 클래스로 구성해 정확한 충돌 처리 구현",
        "상황 기반 애니메이션 시스템 구현",
        "동적인 화면 회전 메커니즘 추가",
      ],
    },
  },
  {
    category: "game",
    banner: "game/mouse-accuracy-banner.webp",
    skills: ["cpp"],
    resource: "https://github.com/HenryChung98/mouse-accuracy-training",
    en: {
      title: "Mouse Accuracy Training",
      subTitle:
        "Focused on precision shooting and reaction time, a real-time interactive game built with SDL2",
      desc: [
        "Built state-based gameplay with multiple modes, scoring, and dynamic visuals",
        "Integrated audio and text rendering",
      ],
    },
    ko: {
      title: "마우스 정확도 트레이닝",
      subTitle: "정밀 사격과 반응 속도에 초점을 맞춘, SDL2로 제작한 실시간 인터랙티브 게임",
      desc: [
        "다양한 모드, 점수 시스템, 동적 비주얼을 갖춘 상태 기반 게임플레이 구축",
        "오디오 및 텍스트 렌더링 통합",
      ],
    },
  },
  {
    category: "game",
    banner: "game/liar-game-banner.webp",
    skills: ["javascript"],
    resource: "https://github.com/HenryChung98/liar-game",
    live: { href: "https://henrychung98.github.io/liar-game/", label: "playNow" },
    en: {
      title: "Liar Game",
      subTitle: "Liar game application developed by JavaScript",
      desc: [
        "Designed a state-based game flow including setup, role reveal, and timed discussions",
        "Built a mobile-friendly role reveal flow ensuring fair gameplay",
      ],
    },
    ko: {
      title: "라이어 게임",
      subTitle: "JavaScript로 개발한 라이어 게임 애플리케이션",
      desc: [
        "설정, 역할 공개, 제한 시간 토론으로 이어지는 상태 기반 게임 흐름 설계",
        "공정한 플레이를 보장하는 모바일 친화적 역할 공개 흐름 구축",
      ],
    },
  },

    // ───────── mobile ─────────
  {
    category: "mobile",
    banner: "mobile/exrate-banner.webp",
    skills: ["swift"],
    live: { href: "https://apps.apple.com/us/app/exrate-currency-converter/id6814764703", label: "download" },
    en: {
      title: "ExRate - Currency Converter",
      subTitle:
        "iOS currency converter usable right from the Home Screen widget and Lock Screen, released on the App Store",
      desc: [
        "Implemented interactive Home Screen widgets and Lock Screen Live Activities (incl. Dynamic Island) to swap currencies and adjust amounts without opening the app",
        "Integrated European Central Bank reference rates via the Frankfurter API, caching the latest rates on-device for offline conversion",
        "Supported 30 currencies with search by code or name, per-currency decimal places, and English/Korean localization",
      ],
    },
    ko: {
      title: "ExRate - 환율 계산기",
      subTitle: "홈 화면 위젯과 잠금 화면에서 바로 쓸 수 있는 iOS 환율 계산기 (App Store 출시)",
      desc: [
        "앱을 열지 않고 통화 전환과 금액 조절이 가능한 인터랙티브 홈 화면 위젯 및 잠금 화면 Live Activity(Dynamic Island 포함) 구현",
        "Frankfurter API로 유럽중앙은행 기준 환율을 연동하고, 최근 환율을 기기에 저장해 오프라인 변환 지원",
        "30개 주요 통화에 대해 코드·이름 검색, 통화별 소수점 자릿수 처리, 영어/한국어 현지화 지원",
      ],
    },
  },
];

