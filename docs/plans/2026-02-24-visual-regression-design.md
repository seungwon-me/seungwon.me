# Visual Regression Guardrails Design (UI Frozen)

## Goal

Add low-maintenance visual regression protection for this portfolio while keeping the existing UI/UX unchanged.

## Scope

- In scope:
  - Route-level screenshot regression for `/` and `/pdf`
  - Minimal smoke assertions to fail fast on hard breakages
  - GitHub Actions CI wiring for automated checks
  - Artifact upload for triage (`playwright-report`)
- Out of scope:
  - UI redesign or component style changes
  - Broad refactor of production components
  - Paid visual testing SaaS dependency

## Chosen Strategy

Use a repository-backed Playwright snapshot approach first:

1. Keep baseline snapshots in-repo for simplicity and fast onboarding.
2. Cover only the highest-value surfaces (`/`, `/pdf`) at desktop+mobile viewports.
3. Stabilize captures using reduced motion + disabled animations + screenshot-only CSS overrides.
4. Run in CI with pinned runtime assumptions and artifact triage.

This is intentionally the smallest system that provides strong regression confidence.

## Architecture

### Test Layer

- Add Playwright config (`playwright.config.ts`) with:
  - deterministic viewport projects (desktop/mobile)
  - `reducedMotion: "reduce"`
  - route base URL and web server orchestration
  - `workers: 1` in CI for reproducibility

### Spec Layer

- Add route specs under `e2e/`:
  - home route snapshots and smoke checks
  - pdf route snapshots and smoke checks
- Keep selectors biased toward stable attributes and predictable structure.

### Snapshot Determinism Layer

- Use `expect(page).toHaveScreenshot(...)` with deterministic options.
- Apply `stylePath` overrides for volatile visual elements during capture only.
- Avoid changing production component code unless selector stability is impossible.

### CI Layer

- Add GitHub workflow:
  - install dependencies
  - install Playwright browsers with deps
  - run Playwright tests
  - upload HTML report/artifacts on failure (or always for debugging)

## Target Surfaces

- `/`:
  - hero
  - projects grid (default collapsed state)
  - header + theme toggle presence
- `/pdf`:
  - layout flow and section rendering
  - project content rendering without app header chrome

## Selector Strategy

Prefer in order:

1. explicit accessibility hooks already present
   - `button[aria-label="테마 토글"]`
   - `button[aria-label="Close project details"]`
2. stable href anchors
   - `a[href="https://seungwon.tech"]`
3. route-unique structure anchors
   - pdf-specific wrapper (`.break-before.pt-12`)

If a required assertion has no stable hook, add minimal non-visual attributes (`data-testid`) in a follow-up, without changing UI.

## Verification Rules

- Local:
  - run Playwright tests and snapshot comparisons
  - confirm report is readable (`playwright-report`)
- CI:
  - run on PR and push to main
  - fail build on screenshot mismatch
  - provide artifacts for triage

## Risks and Mitigations

- Flaky diffs from animation/timers:
  - mitigate with reduced motion, disabled animations, and screenshot CSS
- Font/render drift between machines:
  - mitigate by fixed CI environment and browser install path
- Snapshot churn from intended content edits:
  - mitigate by narrow scope (`/`, `/pdf`) and explicit snapshot update workflow

## Rollout

1. Introduce Playwright config + two route specs.
2. Generate and commit baseline snapshots.
3. Add CI workflow and artifact reporting.
4. Observe one week of runs; expand coverage only if stable.
