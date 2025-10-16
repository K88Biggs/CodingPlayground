import { config as shared } from './wdio.shared.conf.js';
export const config = {
  ...shared,
  services: [['appium', { command: 'appium', args: [] }]],
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'Android Emulator',
      'appium:platformVersion': '14',
      'appium:automationName': 'UiAutomator2',
      // Provide your local path to a sample APK or use an installed app with appPackage/appActivity
      // 'appium:app': '/path/to/ApiDemos-debug.apk',
      'appium:appPackage': 'io.appium.android.apis',
      'appium:appActivity': '.ApiDemos',
      'appium:noReset': true
    }
  ]
};