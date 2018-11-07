let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    directConnect: true,
    multiCapabilities: [
     { "browserName": "chrome"},       
     {"browserName": "firefox"}
    ],
    specs: ['../Tests/CorporateFlyTap.spec.js'],

    onPrepare: function(){
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration:true,
            showstack: false
        }));
        jasmine.getEnv().addReporter(new HtmlReporter({
          baseDirectory: '../report/screenshots',
          preserveDirectory: false,
          screenshotsSubfolder: 'images',
          jsonsSubfolder: 'jsons',
          docName: 'Flytap-Report.html'
        }).getJasmine2Reporter());
    },

    jasmineNodeOpts: {
showColors: true,
defaultTimeoutInterval: 60000,
print: function(){}
    }
};