# Native App Automation (Appium + WebdriverIO, TypeScript)

This package contains **native mobile** tests using **Appium** and **WebdriverIO**.

## Quick Start

1. Install platform tooling (Android Studio + emulator).
2. Make sure `appium` is installed and available on PATH, and `appium driver install uiautomator2` is done.
3. Start an **Android emulator** and an **Appium server**:
   ```bash
   appium
   ```
4. (Option A) Install **ApiDemos** on the emulator:
   - From Google Play (if available) or side-load the APK (search "ApiDemos.apk").
5. Run tests:
   ```bash
   npm run test:native
   ```

Artifacts: `allure-results/`

> Note: iOS requires macOS + Xcode + `xcuitest` driver.