describe(`Wdio test with invalid css in before hook, fails complaining 
about Unrecognised test:`, function() {
  before(() => {
    browser.url('http://webdriver.io/');
    browser.waitForVisible('h1.header1');
  });

  it(`Should display header`, function() {
    let headerText = browser.getText('h1.header');

    expect(headerText).to.equal('Webdriver')
  });
});

describe(`Wdio test with valid css in before hook, passes:`, function() {
  before(() => {
    browser.url('http://webdriver.io/');
    browser.waitForVisible('h1.header');
  });

  it(`Should display header`, function() {
    let headerText = browser.getText('h1.header');

    expect(headerText).to.equal('WEBDRIVERI/O')
  });
});

describe(`Wdio test with invalid css in "it" - fails gracefully:`, function() {
  before(() => {
    browser.url('http://webdriver.io/');
    browser.waitForVisible('h1.header');
  });

  it(`Should display header`, function () {
    let headerText = browser.getText('h1.header1');

    expect(headerText).to.equal('WEBDRIVERI/O')
  });
});