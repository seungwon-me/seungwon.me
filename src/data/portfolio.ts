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
          title: "#3423",
          date: "2025.09.13",
          description: "고급 사용법과 시작 안내 문서의 오탈자와 문장을 교정",
          url: "https://github.com/redis/lettuce/pull/3423"
        },
        {
          title: "#3266",
          date: "2025.08.08",
          description: "세 유틸리티 클래스의 생성자를 private으로 제한해 인스턴스화를 방지",
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
          description: "라이트 모드에서 보이지 않던 팔로우 텍스트 스타일 수정",
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
      description: "2025년 8월 Java/Spring 백엔드 개발자로 합류해 설정 이관과 환율 데이터 전환 기반을 마련했고, 이후 커머스 주문·결제, 회원, 바우처와 개인정보 라이프사이클 관련 기능을 개발했습니다. 스키마와 SQL부터 API, 이벤트 처리, 배치, 운영 화면까지 맡았습니다.",
      principles: [
        "개발 전 바뀌지 말아야 할 규칙과 운영 중 달라질 정책을 나눕니다. 규칙은 트랜잭션·원장·행 잠금으로 보호하고, 정책은 별도 객체와 설정으로 분리합니다.",
        "동시 실행·중간 실패·재시도·소급 처리 뒤 실제 MySQL에 남은 결과를 확인합니다."
      ],
      companyLogoUrl: "/ktown4u_logo.png",
      highlights: [
        {
          title: "바우처 원장 신규 개발과 기존 예치금 결제 연계",
          summary: "바우처의 발급·사용·복원·회수를 신규 거래로 누적하는 원장을 설계했습니다. 원거래를 수정하지 않고 참조 원장 ID로 사용과 복원을 연결했습니다.",
          items: [
            "주문·바우처 사용 원장·결제 이력을 한 트랜잭션에 묶고, 행 잠금으로 동시 사용과 복원 합계 초과를 제어했습니다. 중간 저장 실패와 복원 요청 경합 뒤의 실제 DB 결과를 검증했습니다.",
            "기존 예치금 원장에는 주문 사용과 결제 이력, 주문 취소 복구, PG·예치금 혼합 환불 배분을 연결했습니다. 주문·환불 식별자에서 결정적 복구 ID를 만들어 같은 요청의 재시도를 한 거래로 처리했습니다."
          ]
        },
        {
          title: "탈퇴 회원 개인정보 보존과 소급 처리",
          summary: "보존 대상 데이터를 S3에 동기 업로드한 뒤에만 개인정보를 익명화했습니다. 업로드가 실패하면 익명화하지 않는 경로도 테스트했습니다.",
          items: [
            "소급 데이터는 실제 탈퇴 시각으로 보존 만료일과 저장 경로를 계산했습니다.",
            "실행 중 발견한 기간 계산 오류는 작업을 중단한 뒤 정확한 만료 시각 비교와 경계 회귀 테스트로 수정하고 재개했습니다."
          ]
        },
        {
          title: "주기적 수신동의 고지 파이프라인",
          summary: "고객과 2년 주기를 업무 키로 삼아 대상 이벤트의 중복 생성을 막고, 발송 직전에 현재 회원 상태·동의·수신자를 다시 조회했습니다.",
          items: [
            "성공·실패·제외 상태를 구분하고 실패 기록은 별도 트랜잭션으로 보존했습니다.",
            "대량 고지용 SES 자격증명을 기존 거래 메일과 분리했습니다."
          ]
        },
        {
          title: "최악 실행계획을 겨냥한 쿼리 변경",
          summary: "반복 탐색이 폭증할 수 있는 상관 서브쿼리를 제외 집합 CTE와 anti-join으로 바꿨습니다. 여러 상점의 결과 동치와 EXPLAIN ANALYZE에서 제외 집합이 한 번만 계산되는 것을 확인했습니다."
        },
        {
          title: "레거시 회원 관리 기능 이관",
          summary: "C# 운영자 도구의 회원 목록·상세·수정·생성·고객 동의를 Java/Spring·GraphQL 시스템으로 기능별 이관했습니다. 개인정보 조회 범위와 수정 권한, 계정 생성과 동의 후 활성화를 분리했습니다."
        },
        {
          title: "세트 상품 주문 금액 정합성",
          summary: "주문서와 주문 생성에서 달랐던 환산·반올림 순서를 맞추고, 두 경로의 세트 상품 가격이 일치하는 회귀 테스트를 추가했습니다."
        },
        {
          title: "설정·환율 데이터 전환 기반",
          summary: "한 백엔드 서비스의 Feature Flag 경로를 AWS AppConfig에서 Unleash로 옮기고, 실행 프로파일과 타임아웃 설정을 정리했습니다. 신규 환율 이력 적재 경로와 기존 API 결과 비교 로그를 추가해 단계적으로 전환할 수 있는 기반을 마련했습니다."
        },
        {
          title: "사용자 기기·알림 설정 API",
          summary: "사용자 기기 등록·해제·알림 설정 API를 만들고 DB 저장과 upsert로 재등록과 설정 변경을 처리했습니다."
        }
      ]
    }
  ]
};
