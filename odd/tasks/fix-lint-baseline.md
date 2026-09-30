# Fix lint baseline

## Objective
Remove the existing ESLint failures without changing application behavior or the Lenis integration.

## Scope
- Escape apostrophes and quotation marks reported by `react/no-unescaped-entities` in the affected JSX files.
- Remove unused `catch` bindings reported by `@typescript-eslint/no-unused-vars`.
- Verify the full lint command and TypeScript check.

## Constraints
- Preserve rendered copy and runtime behavior.
- Do not modify Lenis implementation files.
- Keep technical artifacts in English.
- Route: delegated direct writer because the fix spans six source files.
- TDD: disabled by project baseline; no test runner is configured.

## Checklist
- [x] LINT-1 Escape the reported JSX entities in five components/pages.
- [x] LINT-2 Remove the two unused catch bindings in `src/lib/markdown.ts`.
- [x] LINT-3 Run full lint and TypeScript checks, then prepare the work-unit commit.

## Acceptance criteria
- `bun run lint` exits successfully with no errors or warnings.
- `bunx tsc --noEmit` exits successfully.
- No Lenis files or unrelated behavior are changed.
- The work-unit commit identity is recorded here.

## Progress
- Status: complete
- Review assessment: medium risk, 55 changed lines, under budget; unrelated `.atl/` files were excluded from the candidate.
- Work-unit commit: `6a2daa4` (`fix(lint): clear baseline eslint findings`)
- Next step: none for this lint cleanup.

## Checks executed
- `bun run lint` — passed with no errors or warnings.
- `bunx tsc --noEmit` — passed.
