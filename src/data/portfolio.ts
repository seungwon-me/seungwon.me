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
  백엔드 개발 팀을 리딩하며 코드 품질을 관리한 경험이 있습니다.

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
      retrospective: `사용자(전교생)를 대상으로 직접 운영을 해보면서 ‘그저 기능 구현-배포은 전체 개발의 30% 밖에 안되었구나’를 깨달았습니다. 
      
      처음에는 백엔드 리드 개발자로서 아키텍처 개선(RP), 성능 최적화(Java VT), 도메인 설계(DDD) 등에 집중했는데, 프로젝트가 진행될수록 단순히 많은 사람들이 "좋은 코드"라 칭하는 것을 작성하는 것만으로는 부족하다는 것을 절실히 깨달았습니다.
      
      실제로 운영을 하며 매번 변경, 추가되는 요구사항에 대한 즉각적인 개발을 해야했고, 사용자가 실제로 겪는 문제를 해결하는 것이 진짜 개발의 핵심이라는 것을 배웠습니다.
      
      레포 프로젝트를 통해 단순한 기능 개발자가 아닌, 사용자의 문제를 해결하는 개발자로 성장하는 방법을 배웠습니다.`,
      technologies: ["Java", "Spring Boot", "Spring Security", "MongoDB", "Redis", "JWT"],
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
      retrospective: `처음엔 Spring MVC의 스레드 풀 방식이 납득되지 않아 WebFlux를 도입했지만, 
      오히려 복잡한 구조로 인해 오히려 생산성이 떨어지는 문제를 겪었습니다. 
      이 경험을 통해 새로운 기술은 도입 자체보다 트레이드오프, 그리고 실질적 효과가 더 중요하다는 점을 느꼈습니다.

      WebFlux의 동작 원리를 깊이 이해하고 싶어 Project Reactor, Netty까지 학습했고, Redis/Lettuce의 Reactive Command 부분의 오픈소스에도 기여했습니다. 
      기술적으로는 큰 성장의 계기였지만, 무조건적인 비동기 구조가 성능 개선으로 이어지지 않는다는 현실적 인사이트도 얻었습니다.

      단순히 새로운 걸 해보는 것을 넘어, 어떤 기술이 서비스에 어떻게 기여할 수 있을지 고민하는 태도가 개발자로서 더 중요하다는 걸 배운 프로젝트였습니다.`,
      technologies: ["Java", "Spring WebFlux", "Spring Security", "Spring RSocket", "MongoDB", "Redis", "AWS S3", "Paseto"],
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
      retrospective: `도메인 주도 설계를 처음 적용했을 땐, 책과 블로그에서 본 개념을 그대로 가져와 사용했습니다. 하지만 결과적으로 불필요하게 복잡한 구조를 만들었고, 팀원 간 소통에도 문제가 생겨 개발 초기 안정성이 떨어지는 아쉬움이 있었습니다.
      
      이 경험을 통해 ‘기술을 도입할 때 무엇을 해결하고 싶은지, 서비스에 어떻게 기여를 하는지’를 먼저 고민해야 한다는 것을 배웠습니다.
      
      이후에는 우리 팀의 개발 방식에 적합한 개념만 선별하고 단순화해 적용했습니다.또한, Gradle 멀티 모듈 구조를 도입할 때는 팀원들의 이해를 돕기 위해 개발 가이드를 직접 문서화하고 공유했습니다.

      이 과정을 통해 기술의 난이도보다 팀이 함께 이해하고 유지할 수 있는 구조가 더 중요하다는 사실을 체감했고, 기술 도입의 관점을 실무적으로 바꿀 수 있었습니다.`,
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
  // careers: [
  //   {
  //     company: "주식회사 예시컴퍼니",
  //     position: "백엔드 개발자",
  //     period: "2022.03 ~ 2023.12",
  //     description: "Spring Boot 기반의 REST API 개발 및 유지보수, 대용량 트래픽 처리 경험.",
  //     companyLogoUrl: "/vercel.svg"
  //   },
  //   {
  //     company: "스타트업 샘플",
  //     position: "풀스택 엔지니어",
  //     period: "2021.01 ~ 2022.02",
  //     description: "React와 Node.js를 활용한 서비스 기획 및 개발, AWS 인프라 관리.",
  //     companyLogoUrl: "/next.svg"
  //   }
  // ],
}; 