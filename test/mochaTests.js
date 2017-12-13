import {assert} from "chai";
import * as webDriverIo from "webdriverio";
let browser = null;

function initialise (){
  browser = webDriverIo.remote(
    {
      desiredCapabilities: {
        browserName: 'firefox'
      },
      host: 'localhost',
      path: '/wd/hub',
      logLevel: 'silent',
      waitforTimeout: 30000
  });
  return browser.init();
}
describe(`Standalone mocha test with invalid css in before hook, fails gracefully:`, function() {
  this.timeout(99999999);

  before(async function(){
    await initialise();
    await browser
      .url('http://webdriver.io/')
      .waitForVisible('h1.header123', 5000); // introducing an error using invalid css selector
    });

  it(`Should display header`, async function () {
    let title = await browser
      .getText('h1.header');

    assert.strictEqual(title, 'WEBDRIVERI/O');
  });

  after(function() {
    return browser.end();
  });
});

describe(`Standalone mocha test with valid css in before hook, passes:`, function() {

  this.timeout(99999999);

  before(async function() {
    await initialise();
    await browser.url('http://webdriver.io/')
      .waitForVisible('h1.header');
  });

  it(`Should display header`, async function () {
    let title = await browser
      .getText('h1.header');

    assert.strictEqual(title, 'WEBDRIVERI/O');
  });

  after(function() {
    return browser.end();
  });
});

describe(`Standalone mocha test with invalid css in "it" - fails gracefully:`, function() {

  this.timeout(99999999);

  before(async function() {
    await initialise();
    await browser.url('http://webdriver.io/')
      .waitForVisible('h1.header');
  });

  it(`Should display header`, async function () {
    let title = await browser
      .getText('h1.header1'); // introducing an error using invalid css selector

    assert.strictEqual(title, 'WEBDRIVERI/O');
  });

  after(function() {
    return browser.end();
  });
});