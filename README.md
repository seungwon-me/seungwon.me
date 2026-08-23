# seungwon.me

김승원의 포트폴리오 웹사이트입니다.

- Live: <https://seungwon.me>

## 소개

이 사이트는 백엔드 개발자 김승원의 프로젝트 경험, 기술 스택, 오픈소스 기여, 수상/활동, 학력/자격 정보를 한 곳에서 보여주기 위한 포트폴리오입니다.

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- UI: React 19, Tailwind CSS 4, Framer Motion
- Testing: Playwright (Visual Regression)
- Deploy: Netlify

## 로컬 실행

```bash
npm ci
npm run dev
```

브라우저에서 <http://localhost:3000> 접속

## 주요 스크립트

```bash
npm run dev            # 개발 서버
npm run build          # 프로덕션 빌드
npm run start          # 프로덕션 서버 실행
npm run lint           # ESLint
npm run generate:pdf   # 실행 중인 /pdf 페이지를 public/portfolio.pdf로 생성
npm run test:visual    # 시각 회귀 테스트
```

PDF는 기본적으로 <http://127.0.0.1:3000/pdf>에서 생성합니다. 다른 포트를 사용할 때는
`PORTFOLIO_BASE_URL=http://127.0.0.1:3001 npm run generate:pdf`처럼 지정합니다. 포트폴리오
콘텐츠를 바꾼 뒤에는 정적 PDF도 다시 생성해야 합니다.

## 프로젝트 구조

```text
src/
  app/
    components/        # 화면 컴포넌트
    pdf/               # PDF 전용 페이지
    layout.tsx         # 글로벌 레이아웃 + 메타데이터
    page.tsx           # 메인 페이지
  data/
    portfolio.ts       # 포트폴리오 원본 데이터
  types/
    portfolio.ts       # 타입 정의
e2e/                   # Playwright 테스트
public/                # 정적 파일
```

## SEO

다음 항목을 구성했습니다.

- Open Graph / Twitter 카드 메타데이터
- canonical URL
- robots.txt (동적 생성)
- sitemap.xml (동적 생성)

## 라이선스

개인 포트폴리오 용도 프로젝트입니다.
