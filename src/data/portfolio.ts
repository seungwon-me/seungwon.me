import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: "김승원",
  title: "Backend Developer",
  subtitle: "안녕하세요! 백엔드 개발에서 사용자 경험의 본질을 찾는 개발자 김승원입니다.",
  about: 
  `🎯 백엔드 개발자로서 가장 중요하게 생각하는 가치는 \`사용자 경험\`입니다.
  사용자의 목표를 달성하기 위해 안정적이고 정확하며 빠르게 서비스를 제공하는 것이 백엔드 개발의 본질이라 생각합니다.

  🧠 Spring Webflux(Project Reactor), React 경험으로 문제를 
  Fuctional하게 분석하고 순수(Pure)하게 처리할 수 있습니다.

  👥 현재 IC로 일하고 있지만, 
  백엔드 개발 팀의 리딩하며 코드 품질을 관리한 경험이 있습니다.

  🚀 마이스터고 졸업예정자로서 2026년 졸업 후
  산업기능요원 현역 신규 편입을 통해 적극적으로 기여할 수 있습니다.`,
  
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
      title: "REPO",
      tagline: "이력서 관리부터 기업 배포까지, 학생들의 취업 여정을 위한 올인원 플랫폼",
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
      technologies: ["Java", "Spring Boot", "Spring Security", "MongoDB", "Redis"],
      websiteUrl: "https://www.dsm-repo.com/",
      codeUrl: "https://github.com/DSM-repo",
      imageUrl: "/repo-project-image.png",
      isActive: false
    },
    {
      id: "daemawiki",
      title: "Daemawiki",
      tagline: "지식의 연결과 공유, 대마고 학생들을 위한 대마위키",
      period: "2024.06 ~ 2025.02",
      description: `대마위키는 대덕소프트웨어마이스터고등학교 학생들을 위한 정보 공유 플랫폼입니다.
                    Spring WebFlux 기반의 리액티브 웹 애플리케이션으로 구축되어, 
                    높은 성능과 효율적인 리소스 관리를 목표로 설계되었습니다.
                    현재는 운영 준비 중이며, 개발 완료 후 내부 테스트를 거쳐 서비스될 예정입니다.`,
      contributions: [
        "Mono.when을 사용한 사용자 인가 관리 메서드 병렬 처리",
        "메일 전송에 Fire-and-Forget 패턴을 도입해 이벤트 기반으로 응답 시간 개선",
        "문서 동시 편집 RSocket API 개발",
        "문서 관리, 조회 API 개발",
        "유저 인가 인증 API 개발",
        "유저 메일 인증 관리 API 개발"
      ],
      technologies: ["Java", "Spring WebFlux", "Spring Security", "Spring RSocket", "MongoDB", "Redis", "AWS S3"],
      codeUrl: "https://github.com/daemawiki",
      imageUrl: "/daemawiki-project-image.png",
      isActive: false
    },
    {
      id: "founderz",
      title: "FOUNDERZ",
      tagline: "청년 창업가와 투자자를 연결하는 종합 플랫폼",
      period: "2024.05 ~ 2024.11",
      description: `FOUNDERZ는 청년 창업가와 투자자를 연결하는 종합 플랫폼입니다. 
      아이디어 게시, 투자 계약 자동화, 법적 서류 관리 등 창업 과정의 복잡성을 간소화합니다. 
      투명한 투자 관리와 맞춤형 추천 시스템을 통해 안전하고 
      효율적인 창업 생태계를 구축하며, 청년 창업가들의 성공적인 창업을 지원합니다. 
      창업과 투자의 모든 단계를 한 곳에서 해결할 수 있는 플랫폼입니다.`,
      contributions: [
        "Domain Driven Design 기반 도메인 설계",
        "SSE 기반 실시간 알림 시스템 구축",
        "유저 인가 인증 API 개발",
        "유저 관리 API 개발",
        "사업 아이템 태그 관리 API 개발",
        "유저 관심사 태그 관리 API 개발",
        "프론트엔드 API 연동 함수 개발",
        "백엔드 개발 가이드 작성"
      ],
      technologies: ["Java", "Spring Boot", "Spring Security", "Hibernate", "MySQL", "Redis", "Paseto"],
      codeUrl: "https://github.com/teamFOUNDERZ",
      imageUrl: "/founderz-project-image.png",
      isActive: false
    },
    {
      id: "hhh",
      title: "HHH",
      tagline: "AI 기반 이별 후유증 극복 서비스",
      period: "2025.03 ~ 2025.06",
      description: `HHH는 AI 기반 이별 후유증 극복 서비스로 개인화된 감정 관리 앱을 제공합니다.
      사용자의 감정을 체계적으로 기록하고 시각화하여 감정 변화를 인식하도록 돕고, 
      이별 후 감정 회복을 위한 맞춤형 가이드를 제공하여 심리적 안정감을 증진합니다.`,
      contributions: [
        "서비스 기획",
        "백엔드 문서 작성",
        "유저 인가 인증 API 개발",
        "유저 관리 API 개발",
        "감정 일기 관리 API 개발",
        "감정 변화 그래프 API 개발",
        "감정 이모지 관리 API 개발",
      ],
      technologies: ["Kotlin", "Spring WebFlux", "Spring Security", "MongoDB", "Paseto"],
      codeUrl: "https://github.com/Hurts-Hearts-Healing/HHH_BE",
      imageUrl: "/hhh-project-image.png",
      isActive: false
    },
  ],
  techStack: [
    {
      category: "Languages",
      technologies: ["Java", "Kotlin", "TypeScript"]
    },
    {
      category: "Frameworks",
      technologies: ["Spring Boot", "Spring Security", "Spring Webflux", "Hibernate"]
    },
    {
      category: "Database",
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
      title: "대회 참여",
      period: "",
      description: `* 대한민국 소프트웨어대전 소프트웨이브 2024 프로젝트 전시
      * Software Future & Dream Challenge 2024 본선 진출
      * 2024 빛가람 에너지밸리 소프트웨어 작품 경진대회 본선 진출`,
      icon: "👨‍💻"
    },
    {
      title: "스프링 웹 플럭스 스터디 운영",
      period: "2024.08 ~ 2024.11",
      description: "주 1회 스터디 진행, 멤버 5명 관리",
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
  ],
  openSourceContributions: [
    {
      repoName: "redis/lettuce",
      repoLogoUrl: "/redis-logo.png",
      repoUrl: "https://github.com/redis/lettuce",
      prs: [
        {
          title: "#3262",
          date: "2025.04.23",
          description: "불필요한 컬렉션 생성을 제거하여 메모리 할당 없이 성능 향상",
          url: "https://github.com/redis/lettuce/pull/3262"
        },
        {
          title: "#3061",
          date: "2025.01.06",
          description: "Stream API, flatMapMany(Flux::fromIterable)을 사용해 Functional하게 처리",
          url: "https://github.com/redis/lettuce/pull/3061"
        }
      ]
    },
    {
      repoName: "kestra-io/kestra",
      repoLogoUrl: "/kestra-logo.png",
      repoUrl: "https://github.com/kestra-io/kestra",
      prs: [
        {
          title: "#6073",
          date: "2024.11.25",
          description: "instanceof 패턴 매칭을 사용해 코드 일관성 향상",
          url: "https://github.com/kestra-io/kestra/pull/6073"
        }
      ]
    },
    {
      repoName: "velog-io/velog",
      repoLogoUrl: "/velog-logo.png",
      repoUrl: "https://github.com/velog-io/velog",
      prs: [
        {
          title: "#49",
          date: "2024.10.08",
          description: "화이트 모드 text 요소 에러 수정",
          url: "https://github.com/velog-io/velog/pull/49"
        }
      ]
    }
  ],
}; 