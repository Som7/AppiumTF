var wd = require("wd"),
    _ = require('underscore'),
    Q = require('q')
    serverConfigs = require('./helpers/appiumserver');

describe("Node Sample Automation Code", function() {
    //this.timeout(300000);
    //var allPassed = true;
    before(function() {
        var serverConfig = serverConfigs.local
        var driver = wd.promiseChainRemote(serverConfig);
        require("./helpers/logging").configure(driver);
        var desired = _.clone(require("./helpers/caps").mycapabilities);
       // desired.app = require("./helpers/apps").myTestApp;
        return driver
            .init(desired);
   //return done();
    });



    after(function() {
        return driver
            .sleep(3000)
            .quit()
            .finally(function() {
            });
    });

    afterEach(function() {
        allPassed = allPassed && this.currentTest.state === 'passed';
    });
    it("Should Click Login Button", function(){
        console.log('Reached here')
        return Promise.resolve(true);
        // Use Appium inspector for inspecting elements
    });


});


/* Code related to Sauce
if (process.env.SAUCE) {
    desired.name = 'Automation Code';
    desired.tags = ['sample'];

      if (process.env.SAUCE) {
                    return driver.sauceJobStatus(allPassed);
                }
}*/
