const { defineConfig } = require("cypress");
//const setupNodeEvents = require('cypress-image-diff-js/dist/plugin')
//const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin')



module.exports = defineConfig({
  projectId: "",
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  //video: false,
  //screenshotOnRunFailure: true,
  //screenshotsFolder: '/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/snapshots/actual',
  //trashAssetsBeforeRuns: false,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //getCompareSnapshotsPlugin(on, config)
      //config.specPattern = [
        //'cypress/e2e/campaign_info.spec.js',
        //'cypress/e2e/budget_rundates.spec.js',
        //'cypress/e2e/audience_targeting.spec.js',
        //'cypress/e2e/location_targeting.spec.js',
        //'cypress/e2e/landing_page.spec.js',
       //'cypress/e2e/creative.spec.js',
      //'cypress/e2e/contract.spec.js',
      //'cypress/e2e/setup_notes.spec.js',
      //'cypress/e2e/short_forms.spec.js',
     // 'cypress/e2e/submit_campaign.spec.js'
      //]
      //return config
    },
    baseUrl: 'https://stage.reach.randallreilly.com/',

    "env": {
      "username": "srabastidutta@randallreilly.com",
      "password": "",
      //failSilently: false,
      //"ALWAYS_GENERATE_DIFF": false,
      //"ALLOW_VISUAL_REGRESSION_TO_FAIL": true
    },

    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*', '**/examples/*'],
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    watchForFileChanges: false,
    numTestsKeptInMemory: 1, 
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000,
    experimentalSessionSupport: true,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    //failSilently: false
  }
});
