# Web + API Automation (Playwright, TypeScript)

This package contains **Playwright** tests for:
- Desktop browsers (Chromium, Firefox, WebKit)
- **Mobile emulation** (Pixel 7, iPhone 14)
- **API testing** using Playwright's `request` fixture

It also includes:
- **Allure** results by default (optional) and Playwright HTML report
- Traces, screenshots, and videos on failure
- Prettier + ESLint
- **CI** examples and **Docker** support (see monorepo README)

## Quick Start

```bash
# from repo root
npm install
# run all Playwright tests
npm run test:web
# run only API tests
npm run test:api
# run only tests tagged @mobile (mobile emulation)
npm run test:mobile-web
# open the HTML report
npm run report:web
```

## Test Sites Used

- **Sauce Demo:** https://www.saucedemo.com/ (user: `standard_user`, pass: `secret_sauce`)
- **The Internet (Herokuapp):** https://the-internet.herokuapp.com/

## Project Layout

```
packages/web-playwright/
  tests/
    web/
      saucedemo.spec.ts
      herokuapp-login.spec.ts
    api/
      reqres.spec.ts
    mobile-web/
      mobile-inventory.spec.ts
  playwright.config.ts
  package.json
  tsconfig.json
```

## Reports & Artifacts

- HTML: `playwright-report/`
- Allure raw: `allure-results/` (use `allure serve allure-results` if you have Allure CLI installed)

## Notes

- Mobile **native** app testing is **not** supported by Playwright; use the `packages/native-apps` (Appium + WebdriverIO) in this monorepo.