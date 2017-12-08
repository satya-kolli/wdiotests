exports.config = {
  specs: [
    'test/wdioTests.js'
  ],
  maxInstances: 10,
  host: 'localhost',
  port: 4444,
  path: '/wd/hub',
  capabilities: [{
    maxInstances: 1,
    browserName: 'firefox'
  }],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000
  }
};