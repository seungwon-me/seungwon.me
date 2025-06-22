import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: "김승원",
  title: "Backend Developer",
  subtitle: "안녕하세요! 백엔드 개발에서 사용자 경험의 본질을 찾는 개발자 김승원입니다.",
  about: 
  `
  👋 백엔드 개발자로서 가장 중요하게 생각하는 가치는 \`사용자 경험\`입니다.
  사용자가 원하는 목표를 달성하기 위해 안정적이고 정확하고 빠르게 서비스를 제공하는 것이 백엔드 개발의 본질이라고 생각합니다.

  😀 복잡한 로직을 단순화하고, 
  안정적인 서비스를 제공하는 사용자 중심 서비스를 만들고 싶습니다.

  🥳 Spring Webflux(Project Reactor), React 경험으로 문제를 
  Fuctional하게 분석하고 순수(Pure)하게 처리할 수 있습니다.

  😊 현재 IC로 일하고 있지만, 
  백엔드 개발 팀 리드 경험이 있습니다.

  😉 전교생이 사용하는 이력서 작성 플랫폼의
  개발을 리드하여 안정적인 운영을 해본 경험이 있습니다.

  👀 마이스터고 졸업예정자로서 산업기능요원 현역 신규 편입을 통해
  적극적으로 기여할 수 있습니다.`,
  contact: {
    email: "contact@seungwon.me",
    phone: "+82-10-2977-8517",
    github: "github.com/ori0o0p",
    linkedin: "linkedin.com/in/ori0o0p"
  },
  profileImageUrl: "/profile.png",
  projects: [
    {
      id: "repo",
      title: "REPO (DSM Resume Management Platform)",
      period: "2024.01 ~ 2024.09",
      description: `레포는 대덕소프트웨어마이스터고 학생들을 위한 이력서 작성 및 관리 플랫폼입니다.
                    학생들이 작성한 이력서는 PDF로 변환되어 학교와 MOU를 체결한 기업들에 배포됩니다.
                    현재 130명 이상의 학생이 활발히 사용 중인 서비스입니다.`,
      contributions: [
        "Webflux Kotlin 코루틴 앱을 Virtual Thread 아키텍처로 재설계",
        "Domain Driven Design을 기반으로 프로젝트 및 도메인 설계 개선",
        "어노테이션 기반 권한 검증 시스템 구축",
        "학생 이력서 관리, 조회 API 개발",
        "선생님 피드백 API 개발",
        "전공 관리, 조회 API 개발",
        "도서관 조회 API 개발"
      ],
      technologies: ["Java", "Spring Boot", "MongoDB", "Redis"],
      websiteUrl: "https://www.dsm-repo.com/",
      codeUrl: "https://github.com/DSM-repo",
      imageUrl: "/repo_logo.png",
      isActive: false
    },
    {
      id: "daemawiki",
      title: "Daemawiki (DSM Wiki Service)",
      period: "2024.06 ~ 2025.02",
      description: `대마위키는 대덕소프트웨어마이스터고등학교 학생들을 위한 정보 공유 플랫폼입니다.
                    학생들이 작성한 이력서는 PDF로 변환되어 학교와 MOU를 체결한 기업들에 배포됩니다.
                    현재 130명 이상의 학생이 활발히 사용 중인 서비스입니다.`,
      contributions: [
        "Mono.when을 사용한 사용자 인가 관리 메서드 병렬 처리",
        "메일 전송에 Fire-and-Forget 패턴을 도입해 이벤트 기반으로 응답 시간 개선",
        "문서 동시 편집 RSocket API 개발",
        "문서 관리, 조회 API 개발",
        "유저 인가 인증 API 개발",
        "유저 메일 인증 관리 API 개발"
      ],
      technologies: ["Java", "Spring WebFlux", "Spring RSocket", "MongoDB", "Redis", "AWS S3"],
      codeUrl: "https://github.com/daemawiki",
      // imageUrl: "/project2-logo.jpg", // 실제 이미지 경로로 변경
      isActive: false
    },
  ],
  techStack: [
    {
      category: "Languages",
      technologies: ["Java", "Kotlin"]
    },
    {
      category: "Frameworks & Libraries",
      technologies: ["Spring Boot", "Spring Security", "Spring Webflux", "Spring RSocket"]
    },
    {
      category: "Database & Cache",
      technologies: ["MySQL", "MongoDB", "Redis"]
    }
  ],
  education: [
    {
      school: "대덕소프트웨어마이스터고등학교",
      period: "2023.03 ~ 2026.02",
      major: "소프트웨어개발과"
    }
  ],
  awards: [
    {
      title: "해커톤 대상 (과학기술정보통신부 장관상)",
      period: "2024.10",
      description: "금상 (1위)",
      details: "(주)서북에서 제시한 과제인 AI 기반 포토이즘 서비스의 백엔드 개발 담당",
      icon: "🏆"
    },
    {
      title: "오픈소스 기여",
      period: "진행중",
      description: `- 2025.04.23 redis/lettuce #3262
                    - 2025.01.06 redis/lettuce #3061
                    - 2024.11.25 kestra-io/kestra #6073
                    - 2024.10.08 velog-io/velog #49`,
      icon: "👨‍💻"
    },
    {
      title: "스터디 운영",
      period: "2024.08 - 2024.11",
      description: "스프링 웹 플럭스 스터디 그룹 리더",
      details: "주 1회 스터디 진행, 멤버 5명 관리",
      icon: "👥"
    }
  ],
  certifications: [
    {
      title: "TOPCIT",
      date: "2024",
      description: "소프트웨어 역량 검정 수준 3 (595점)",
      icon: "📜"
    },
    {
      title: "정보처리기능사",
      date: "2023.09",
      description: "한국산업인력공단",
      icon: "📜"
    }
  ],
  portfolioLinks: [
    { label: "Notion 포트폴리오", url: "https://seungwon-portfolio.notion.site" }
  ],
  portfolioFiles: [
    { label: "PDF 다운로드", fileUrl: "/portfolio.pdf" }
  ]
}; 