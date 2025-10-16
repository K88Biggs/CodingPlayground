# Playwright + Appium Automation Monorepo (TypeScript)
[![CI](https://github.com/K88Biggs/CodingPlayground/actions/workflows/ci.yml/badge.svg)](https://github.com/K88Biggs/CodingPlayground/actions/workflows/ci.yml)
A production-ready scaffold that covers:
- **Web UI (desktop + mobile emulation)** with Playwright
- **API tests** with Playwright request fixture
- **Native mobile apps** with Appium + WebdriverIO
- **CI** workflows and **Docker** containers
- **Logging & reporting** via Playwright HTML + Allure

## Getting Started

```bash
# 1) Install Node.js 18+
# 2) From repo root:
npm install

# 3) Run Web UI tests
npm run test:web

# 4) Run API tests
npm run test:api

# 5) Run Mobile-emulated web tests
npm run test:mobile-web

# 6) Run Native App tests (requires emulator + Appium)
npm run test:native
```

### Demo Websites
- **Sauce Demo**: https://www.saucedemo.com (user: `standard_user`, pass: `secret_sauce`)
- **The Internet (Herokuapp)**: https://the-internet.herokuapp.com
- **API playground**: https://reqres.in

### Sample Apps
- **ApiDemos** (Android) – classic sample app used in Appium tutorials.
- **Sauce Labs Sample App** – optional e-commerce demo app.

> For native tests, update `packages/native-apps/wdio.conf.ts` with your app under test
> (`appium:app` to an `.apk`/`.ipa`) or set `appPackage/appActivity` to an already installed app.

## CI (GitHub Actions)

See `.github/workflows/ci.yml`:
- Runs Playwright tests on Ubuntu
- Uploads HTML report as an artifact
- (Optional) Matrix across browsers

## Docker

- `packages/web-playwright/Dockerfile` runs web/api tests inside the **Playwright** image.
- To run:
  ```bash
  docker build -t web-tests ./packages/web-playwright
  docker run --rm web-tests
  ```

> Running full Android emulators in Docker is non-trivial; prefer local emulators or device farms.

## Logs & Reports

- Playwright: HTML report, traces, screenshots, videos (`playwright.config.ts`)
- Allure (optional): raw files in `allure-results/`
- Appium (WDIO): Spec reporter + Allure

## Repo Layout

```
packages/
  web-playwright/   # Web UI + API tests (Playwright)
  native-apps/      # Native tests (Appium + WDIO)
.github/workflows/  # CI pipelines
```

## Windows Notes (Env Vars)

Set and verify:
- `JAVA_HOME` – JDK 11+
- `ANDROID_HOME` – Android SDK root
- Add `%ANDROID_HOME%\platform-tools` to PATH
- Verify `adb devices` shows your emulator/device

## Troubleshooting

- **Chromedriver mismatch** (mobile web): keep emulator images up to date.
- **Appium doctor**: `npm i -g @appium/doctor` then `appium-doctor --android`.
- **Permissions**: ensure emulator has network and Play Store (if needed) enabled.

---

See package-level READMEs for details.
