import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: "김승원",
  title: "Backend Engineer",
  subtitle: `실패 이후에도 데이터가 맞는 애플리케이션을 만듭니다.

결제와 개인정보 처리와 같이 실패 비용이 큰 도메인에서 동시 실행·중간 실패·재시도·소급 처리 이후에도 지켜야 할 불변식을 검증해왔습니다.`,
  contact: {
    email: "hello@seungwon.me",
    github: "github.com/ori0o0p",
    linkedin: "linkedin.com/in/ori0o0p"
  },
  profileImageUrl: "/profile.png",
  projects: [
    {
      id: "repo",
      title: "REPO",
      tagline: "학생의 이력서 작성부터 기업 배포까지",
      period: "2024.01 ~ 2024.09",
      description: `교내 학생의 이력서 작성·PDF 변환·기업 배포를 지원한 플랫폼입니다. 전교생이 사용하는 서비스를 운영하며, 새 기능을 만드는 일만큼 변경 요구를 빠르게 반영하고 장애 없이 유지하는 일이 중요하다는 것을 배웠습니다.`,
      contributions: [
        "Kotlin coroutine/WebFlux 기반 구조를 Java Virtual Thread 기반으로 단순화",
        "이력서·교사 피드백·권한 검증 API 설계 및 구현",
        "운영 중 변경 요구를 반영하며 도메인 구조와 개발 가이드 정비"
      ],
      retrospective: `처음에는 아키텍처 개선에 시간을 많이 썼습니다. 전교생이 쓰는 서비스에서는 새로운 구조보다 변경 요구를 빠르게 반영하고 장애 없이 운영하는 일이 더 중요했습니다. 이후에는 팀이 함께 이해하고 운영할 수 있는 단순한 구조를 먼저 선택합니다.`,
      technologies: ["Java", "Spring Boot", "MongoDB", "Redis", "Virtual Threads"],
      imageUrl: "/repo-project-image.png",
      isActive: false,
      links: [
        { label: "Website", url: "https://www.dsm-repo.com/" },
        { label: "GitHub", url: "https://github.com/DSM-repo" }
      ]
    },
    {
      id: "daemawiki",
      title: "Daemawiki",
      tagline: "교내 지식 공유와 동시 편집",
      period: "2024.06 ~ 2025.02",
      description: `운영 전 단계에서 문서·인증·메일 기능과 RSocket 동시 편집 API를 구현한 WebFlux 프로젝트입니다.`,
      contributions: [
        "문서 관리·조회 및 RSocket 동시 편집 API 구현",
        "Project Reactor와 Netty의 비동기 처리·실패 전파 학습",
        "WebFlux 복잡도와 팀 생산성의 trade-off 검토"
      ],
      retrospective: `리액티브 구조를 Project Reactor와 Netty까지 따라가며 학습했습니다. 하지만 이 프로젝트에서는 구조가 복잡해진 만큼 성능이나 팀 생산성이 좋아지지 않았습니다. 이제는 기술을 고르기 전에 해결할 문제와 운영 비용부터 적어봅니다.`,
      technologies: ["Java", "Spring WebFlux", "RSocket", "MongoDB", "Redis"],
      imageUrl: "/daemawiki-project-image.png",
      isActive: false,
      links: [
        { label: "GitHub", url: "https://github.com/daemawiki" }
      ]
    },
    {
      id: "founderz",
      title: "FOUNDERZ",
      tagline: "창업가·투자자 연결 서비스",
      period: "2024.05 ~ 2024.11",
      description: `인증, 사용자·태그 관리, SSE 알림과 백엔드 개발 가이드를 담당했습니다.`,
      contributions: [
        "인증·사용자 API 구현",
        "SSE 기반 알림 구현",
        "팀의 백엔드 개발 가이드 작성"
      ],
      retrospective: `도메인 주도 설계와 멀티 모듈을 처음 적용하면서 팀이 이해해야 할 구조가 늘고 변경 속도가 떨어지는 일을 겪었습니다. 이후에는 개념을 그대로 옮기지 않고, 해결하려는 문제에 필요한 만큼만 적용합니다.`,
      technologies: ["Java", "Spring Boot", "MySQL", "Redis"],
      imageUrl: "/founderz-project-image.png",
      isActive: false,
      links: [
        { label: "GitHub", url: "https://github.com/teamFOUNDERZ" }
      ]
    },
    {
      id: "hhh",
      title: "HHH",
      tagline: "감정 기록·시각화 서비스",
      period: "2025.03 ~ 2025.06",
      description: `인증, 사용자, 감정 일기·그래프 API와 백엔드 문서를 담당했습니다.`,
      contributions: [
        "인증·사용자 API 구현",
        "감정 기록·그래프 API 구현",
        "백엔드 개발 문서 작성"
      ],
      technologies: ["Kotlin", "Spring WebFlux", "MongoDB"],
      imageUrl: "/hhh-project-image.png",
      isActive: false,
      links: [
        { label: "GitHub", url: "https://github.com/Hurts-Hearts-Healing/HHH_BE" }
      ]
    }
  ],
  techStack: [
    {
      category: "Core Backend",
      technologies: ["Java", "Spring Boot", "Spring GraphQL", "REST"]
    },
    {
      category: "Data & Consistency",
      technologies: ["MySQL", "MyBatis", "JDBC", "Redis"]
    },
    {
      category: "Event & Cloud",
      technologies: ["Kafka", "AWS S3", "SES", "IAM", "KMS"]
    },
    {
      category: "Test & Delivery",
      technologies: ["JUnit", "Mockito", "MySQL Integration Test", "Unleash"]
    },
    {
      category: "Additional Experience",
      technologies: ["Kotlin", "Spring WebFlux", "MongoDB", "React", "TypeScript"]
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
      title: "해커톤 수상 · 과학기술정보통신부 장관상",
      period: "2024.10",
      description: "기업 제시 과제의 서비스 백엔드 개발 담당",
      icon: "🏆"
    },
    {
      title: "신입생 전공 멘토링",
      period: "2025.03",
      description: "약 23시간, 신입생 약 64명 대상",
      icon: "👨‍💻"
    },
    {
      title: "Spring WebFlux 스터디 운영",
      period: "2024.08 ~ 2024.11",
      description: "주 1회, 5명 규모",
      icon: "👥"
    }
  ],
  certifications: [
    {
      title: "TOPCIT",
      date: "2024",
      description: "수준 3 · 595점",
      icon: "📜"
    },
    {
      title: "정보처리기능사",
      date: "2023.09",
      description: "한국산업인력공단",
      icon: "📜"
    }
  ],
  portfolioLinks: [],
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
          title: "#3266",
          date: "2025.08.08",
          description: "유틸리티 클래스 생성자를 private으로 제한하고 문서와 회귀 테스트를 추가",
          url: "https://github.com/redis/lettuce/pull/3266"
        },
        {
          title: "#3264",
          date: "2025.05.28",
          description: "정규식 패턴을 enum으로 묶어 타입 안전성과 가독성을 개선",
          url: "https://github.com/redis/lettuce/pull/3264"
        },
        {
          title: "#3262",
          date: "2025.04.23",
          description: "중간 List 생성을 제거해 불필요한 메모리 할당을 줄임",
          url: "https://github.com/redis/lettuce/pull/3262"
        },
        {
          title: "#3061",
          date: "2025.01.06",
          description: "Reactive mget의 수동 반복문을 Stream과 Reactor 체인으로 단순화",
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
          description: "34개 파일의 instanceof 사용을 패턴 매칭 문법으로 통일",
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
          date: "2024.08.11",
          description: "화이트 모드에서 보이지 않던 팔로우 텍스트 스타일 수정",
          url: "https://github.com/velog-io/velog/pull/49"
        }
      ]
    }
  ],
  careers: [
    {
      company: "ktown4u",
      position: "Backend Engineer",
      period: "2025.08 ~ 현재",
      description: "커머스 주문·결제, 회원, 바우처, 개인정보 라이프사이클의 신규 기능과 레거시 이관을 담당했습니다. 대상 선별 SQL과 스키마부터 API·consumer·배치·운영 화면까지 연결했습니다.",
      principles: [
        "변하지 않는 업무 규칙은 자연키·append-only 원장·트랜잭션·행 잠금으로 보호하고, 발송 시점·사용 순서·배치 크기처럼 운영에 따라 달라지는 정책은 별도의 변경 경계에 둡니다.",
        "메서드 호출 여부보다 동시 실행·중간 실패·재시도 이후 실제 데이터가 지켜지는지를 MySQL 통합 테스트로 확인합니다."
      ],
      companyLogoUrl: "/ktown4u_logo.png",
      highlights: [
        {
          title: "바우처·B2B 예치금 원장",
          summary: "잔액을 직접 수정하지 않고 발급·사용·복원·회수를 CREDIT/DEBIT append-only 거래로 남겼습니다.",
          items: [
            "차감 대상 행을 SELECT ... FOR UPDATE로 잠그고 주문·원장·결제 이력을 하나의 트랜잭션에 묶었습니다.",
            "실제 MySQL에서 동시 차감은 한 건만 성공하고, 중간 INSERT 실패 시 전체 롤백되며, 같은 환불 재시도 후에도 복구 거래가 한 건만 남는지 검증했습니다.",
            "확인 범위: 원장 기록과 복원 규칙까지 확인했습니다. 주문 부분 취소의 전체 경로 연결은 당시 단계적으로 적용 중이었습니다."
          ]
        },
        {
          title: "탈퇴 회원 개인정보 아카이빙·소급",
          summary: "실제 탈퇴 시각을 보존하고 아카이빙 이벤트의 broker 인계를 확인한 뒤에만 익명화하도록 순서를 고정했습니다.",
          items: [
            "live와 backfill 저장 경로를 분리하고 소급 객체는 실제 탈퇴연도와 보존연수에 맞는 경로에 저장했습니다.",
            "보존기간 경계, S3 목록 pagination 전체 순회, batch delete 일부 실패를 검증하고 기간 계산 오류를 중단·수정·회귀 테스트 후 재개했습니다.",
            "확인 범위: Kafka broker 인계까지 확인했습니다. 최종 S3 저장과 실제 lifecycle 삭제 완료는 주장하지 않습니다."
          ]
        },
        {
          title: "수백만 명 규모 주기적 개인정보 고지",
          summary: "고객과 법정 주기를 업무 멱등성 키로 삼고 발송 직전 현재 회원·동의 상태를 다시 확인했습니다.",
          items: [
            "대상 생성의 중복을 제어하고 SENT·FAILED·SKIPPED 상태를 남겼으며, 외부 발송 실패 후에도 FAILED 기록이 보존되는지 확인했습니다.",
            "대량 고지와 기존 트랜잭션 메일의 SES 계정을 분리해 quota·평판·자격 증명의 장애 범위를 나눴습니다.",
            "확인 범위: 수백만 명은 설계 대상 규모이며 전체 발송 완료 건수가 아닙니다. SES와 DB가 비원자적이므로 외부 발송의 단일 실행은 주장하지 않습니다."
          ]
        },
        {
          title: "복잡한 조회의 실행계획 안정화",
          summary: "반복 탐색이 커지는 상관 subquery를 제외 집합 CTE·anti-join으로 바꾸고 결과 동치를 확인했습니다. EXPLAIN ANALYZE에서 반복 탐색이 1회 materialization으로 바뀐 범위까지만 검증했습니다."
        },
        {
          title: "세트 상품의 통화 정합성",
          summary: "주문서와 주문 생성에서 환산·반올림 순서를 맞추고 0.02 USD 차이가 나는 사례를 회귀 테스트로 고정했습니다. 성과 범위는 검증한 세트 상품가 경로로 한정합니다."
        },
        {
          title: "레거시 회원 관리 기능 이관",
          summary: "C# 운영자 도구의 회원 목록·상세·수정·생성·동의 기능을 Java/Spring 시스템으로 기능 단위 이관했습니다. 개인정보 노출 범위와 조회·수정 권한을 분리했습니다."
        }
      ]
    }
  ]
};
