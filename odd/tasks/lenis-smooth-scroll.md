# Lenis smooth scroll

## Objective
Integrate Lenis as the single vertical scroll-smoothing layer for the portfolio without breaking the existing loader, mobile menu, hash navigation, reduced-motion behavior, or horizontal mobile tabs.

## Problem
The portfolio currently relies on native scrolling and `scroll-smooth`, while the requested interaction needs consistent, polished interpolation through Lenis.

## Why
Improve perceived scroll quality while preserving the current Next.js App Router boundaries and existing visual choreography.

## Scope
- Add the Lenis dependency and lockfile update.
- Add a client-only root smooth-scroll provider using the current Lenis React integration.
- Mount it from the server root layout and remove the competing native `scroll-smooth` class.
- Coordinate body scroll locking between the splash screen and mobile navigation.
- Preserve reduced-motion behavior and verify lint/typecheck/build-relevant checks available in the repository.

## Constraints
- Next.js 16 App Router; keep `RootLayout` as a Server Component.
- Keep browser APIs inside explicit Client Components.
- No GSAP integration is needed because the repository currently has no GSAP/ScrollTrigger loop.
- No JavaScript test runner is configured; use lint and TypeScript checks.
- Route: delegated direct writer, because implementation spans dependency metadata, a new client provider, layout, and scroll-lock coordination.
- TDD: disabled by project baseline; runner unavailable.

## Checklist
- [x] LENIS-1 Add `lenis` and implement the client root provider with reduced-motion-safe defaults.
- [x] LENIS-2 Mount the provider from the server layout and remove native `scroll-smooth` competition.
- [x] LENIS-3 Make splash/menu body-lock cleanup composable so unlocks do not clobber an active lock.
- [x] LENIS-4 Run lint and TypeScript checks, inspect anchor/mobile behavior statically, and prepare the work unit commit.

## Acceptance criteria
- Lenis owns vertical smoothing once mounted at the root.
- The layout remains server-rendered except for the isolated provider.
- Splash and mobile menu do not leave `body` permanently locked or unlock each other prematurely.
- `prefers-reduced-motion` is respected by Lenis and existing CSS motion is not made worse.
- `bun run lint` and `bunx tsc --noEmit` pass.
- All completed checklist items include observed verification evidence and a conventional work-unit commit.

## Progress
- Status: implementation complete; full lint remains blocked by pre-existing baseline errors
- Completed: task document created before source changes; LENIS-1 through LENIS-4 implemented and verified by targeted lint, TypeScript, build, and independent static inspection.
- Evidence:
  - LENIS-1: `package.json` and `bun.lock` contain `lenis@^1.3.26`; `SmoothScrollProvider` mounts `ReactLenis` from `lenis/react` with `root`, `autoRaf: true`, and `anchors: true`; reduced-motion behavior remains Lenis's default because `respectReducedMotion` is not disabled.
  - LENIS-2: `RootLayout` remains a Server Component, mounts the isolated provider, and no longer uses `scroll-smooth`; Lenis CSS is imported globally.
  - LENIS-3: `lockBodyScroll` uses idempotent shared tokens; splash and mobile menu retain independent locks, and `JobsTabs` opts out with `data-lenis-prevent` for native horizontal interaction.
  - `bunx tsc --noEmit`: passed (exit code 0).
  - `bun run build`: passed; Next.js 16.3.3 compiled, typechecked, generated all static routes, and finalized optimization.
  - Targeted ESLint for all changed TypeScript files: passed (exit code 0).
  - `bun run lint`: rerun after fixing the only change-caused `prefer-const` error; still exits 1 on 11 pre-existing `react/no-unescaped-entities` errors and 2 pre-existing warnings in unrelated files.
  - `git diff --check`: passed; no GSAP, ScrollTrigger, or additional RAF loop was introduced.
  - Independent verification: partial; implementation is coherent, but real browser checks for visual smoothing, loader/menu locking, and fixed-header anchor offsets remain unavailable in this environment.
  - Review assessment: medium risk, 141 changed lines, under budget; native review was not started because the provider's intended-untracked JSON submission refused before mutation.
- Next step: create the conventional work-unit commit and record its identity here.
