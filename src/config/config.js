exports.config = {
    //seleniumServerJar: "../../../../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    allScriptsTimeout: 60000,
    specs: ['./src/features/GitHubLogin.feature'],
    cucumberOpts: {
        require: ['./src/steps/*.ts'],
        strict: true
        // tags: '@CucumberScenario or @ProtractorScenario or @Smoke'
    },
    onPrepare() {
        require('ts-node').register({
            project: path.join(__dirname, './tsconfig.e2e.json')
        });

        // browser.manage().window().maximize();
        browser.manage().window().setSize(1280, 800);
        createDirectory(jsonReports);
        createDirectory(htmlReports);
        createDirectory(screenShotDirectory);
    },

    onComplete() {
        createHTMLReport(cucumberReporterOptions);
    }
};
