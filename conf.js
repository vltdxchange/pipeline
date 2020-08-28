const puppeteer = require('puppeteer');
exports.config = {
  directConnect: true,

  // The address of a running selenium server.
 // seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'

  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['../pipeline/src/specs/login*.js'],
  onPrepare: function () {
	  puppeteer.launch({
  executablePath: process.env.CHROMIUM_PATH,
  args: ['--no-sandbox'], // This was important. Can't remember why
});
    browser.ignoreSynchronization = true;
    browser.manage().deleteAllCookies();
    browser.manage().timeouts().pageLoadTimeout(50000);
    browser.manage().timeouts().implicitlyWait(50000);
    browser.driver.manage().window().maximize();
  },
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
