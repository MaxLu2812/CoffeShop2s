# Testing Capabilities — CoffeShopSite

**Strict TDD Mode**: Disabled
**Detected**: 2026-06-22
**Last Verified**: 2026-06-22

## Test Runner

- **Command**: N/A — no test runner installed
- **Framework**: None

## Test Layers

| Layer | Available | Tool |
|---|---|---|
| Unit | ❌ | — |
| Integration | ❌ | — |
| E2E | ❌ | — |

## Coverage

- **Available**: ❌
- **Command**: —

## Quality Tools

| Tool | Available | Command |
|---|---|---|
| Linter | ✅ | `npm run lint` (ESLint ^9) |
| Type checker | ✅ | `npx tsc --noEmit` (TypeScript ^5 with strict: true) |
| Formatter | ❌ | — (no prettier, dprint, or biome installed) |

## Dependencies Scan

- Test deps in `package.json`: **none**
- Test config files (jest, vitest, playwright, cypress): **none**
- Test file patterns (`*.test.*`, `__tests__/`, `*.spec.*`): **none found**
- CI config (`.github/`): **none**

## Strict TDD Rationale

`strict_tdd: false` because there is no test runner available. Strict TDD requires a working test command that can be run before and after implementation. To enable Strict TDD, install a test runner (recommended: Vitest with `@testing-library/react`) and add a `"test"` script to `package.json`.
