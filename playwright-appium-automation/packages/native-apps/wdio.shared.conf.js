export const config = {
  runner: 'local',
  specs: ['./tests/**/*.spec.ts'],
  maxInstances: 1,
  framework: 'mocha',
  reporters: [['spec', {}], ['allure', { outputDir: 'allure-results' }]],
  mochaOpts: { ui: 'bdd', timeout: 600000 },
  logLevel: 'info',
  autoCompileOpts: {
    tsNodeOpts: { transpileOnly: true }
  }
};