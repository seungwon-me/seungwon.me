# Visual Regression Guardrails Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add deterministic Playwright visual regression checks for `/` and `/pdf` with CI reporting, without changing UI behavior.

**Architecture:** Use a minimal E2E layer with Playwright (`toHaveScreenshot`) and repository-backed snapshots. Stabilize capture with reduced motion, disabled animations, and screenshot-only CSS (`stylePath`). Run checks in GitHub Actions and upload Playwright reports for fast triage.

**Tech Stack:** Next.js App Router, TypeScript, Playwright Test, GitHub Actions, npm

---

### Task 1: Playwright Baseline Setup

**Files:**
- Create: `playwright.config.ts`
- Modify: `package.json`

**Step 1: Add initial npm scripts (failing expectation first)**

Modify `package.json` scripts with placeholders for visual runs:

```json
{
  "scripts": {
    "test:visual": "playwright test",
    "test:visual:update": "playwright test --update-snapshots"
  }
}
```

**Step 2: Run command to verify failure before Playwright config exists**

Run: `npm run test:visual`
Expected: FAIL with missing Playwright config/tests or missing package

**Step 3: Add `playwright.config.ts` minimal deterministic config**

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      maxDiffPixelRatio: 0.01,
      stylePath: "./e2e/styles/screenshot.css",
    },
  },
  use: {
    baseURL: "http://127.0.0.1:3000",
    reducedMotion: "reduce",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop-chromium", use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 800 } } },
    { name: "mobile-chromium", use: { ...devices["Pixel 5"] } },
  ],
  webServer: {
    command: "npm run build && npm run start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: false,
    timeout: 120_000,
  },
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }]],
});
```

**Step 4: Install Playwright test dependency and browsers**

Run: `npm install -D @playwright/test && npx playwright install --with-deps`
Expected: PASS with Playwright installed and browser binaries available

**Step 5: Commit setup**

```bash
git add package.json package-lock.json playwright.config.ts
git commit -m "Playwright 비주얼 테스트 기본 설정 추가"
```

### Task 2: Route Specs for `/` and `/pdf`

**Files:**
- Create: `e2e/home.visual.spec.ts`
- Create: `e2e/pdf.visual.spec.ts`

**Step 1: Write home route spec with smoke + snapshot**

```ts
import { test, expect } from "@playwright/test";

test("home route smoke + visual", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('button[aria-label="테마 토글"]')).toBeVisible();
  await expect(page).toHaveScreenshot("home-route.png", { fullPage: true });
});
```

**Step 2: Write pdf route spec with smoke + snapshot**

```ts
import { test, expect } from "@playwright/test";

test("pdf route smoke + visual", async ({ page }) => {
  await page.goto("/pdf");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("div.break-before.pt-12")).toBeVisible();
  await expect(page).toHaveScreenshot("pdf-route.png", { fullPage: true });
});
```

**Step 3: Run visual tests to generate initial snapshots**

Run: `npm run test:visual:update`
Expected: PASS and creation of snapshot directories under `e2e/*-snapshots/`

**Step 4: Re-run compare mode**

Run: `npm run test:visual`
Expected: PASS with snapshot comparison success

**Step 5: Commit specs and snapshots**

```bash
git add e2e/home.visual.spec.ts e2e/pdf.visual.spec.ts e2e/*-snapshots
git commit -m "홈과 PDF 경로 비주얼 회귀 테스트 추가"
```

### Task 3: Screenshot Stabilization Stylesheet

**Files:**
- Create: `e2e/styles/screenshot.css`

**Step 1: Add capture-only stabilization rules**

```css
* {
  caret-color: transparent !important;
}

/* Hide volatile scroll status widget during capture only */
[role="slider"][aria-label*="스크롤"] {
  visibility: hidden !important;
}
```

**Step 2: Run compare test to verify no selector breakage**

Run: `npm run test:visual`
Expected: PASS; snapshots stable and deterministic

**Step 3: Commit stylesheet**

```bash
git add e2e/styles/screenshot.css
git commit -m "비주얼 캡처 안정화를 위한 테스트 전용 스타일 추가"
```

### Task 4: GitHub Actions CI for Visual Regression

**Files:**
- Create: `.github/workflows/visual-regression.yml`

**Step 1: Add CI workflow (PR + main push)**

```yaml
name: visual-regression

on:
  pull_request:
  push:
    branches: [main]

jobs:
  visual:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run test:visual
      - name: Upload Playwright report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report
          retention-days: 7
```

**Step 2: Validate workflow syntax locally (optional lint)**

Run: `npm run lint`
Expected: PASS (workflow file itself is not linted by Next lint, but app should remain clean)

**Step 3: Commit CI workflow**

```bash
git add .github/workflows/visual-regression.yml
git commit -m "비주얼 회귀 검증 GitHub Actions 워크플로 추가"
```

### Task 5: Final Verification and Handoff

**Files:**
- Verify: `playwright.config.ts`
- Verify: `e2e/home.visual.spec.ts`
- Verify: `e2e/pdf.visual.spec.ts`
- Verify: `.github/workflows/visual-regression.yml`

**Step 1: Run full local verification**

Run: `npm run lint && npm run build && npm run test:visual`
Expected: PASS

**Step 2: Check repository state**

Run: `git status`
Expected: clean working tree

**Step 3: Prepare PR summary**

Include:
- Added deterministic visual checks for `/` and `/pdf`
- Added CI workflow and report artifact upload
- No intentional UI changes; verification logs passed

**Step 4: Final commit hygiene check**

Ensure commit messages do not contain blocked trailers/attribution lines.
