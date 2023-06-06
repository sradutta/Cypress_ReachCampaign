///<reference types = "cypress"/>

const { navigateToAudiencePage } = require("../support/page_objects/audienceTargetPage")
const { navigateToBudgetPage } = require("../support/page_objects/budgetRunDatePage")
const { navigateToCampaignInfoPage } = require("../support/page_objects/campaignInfoPage")
const { navigateToContractPage } = require("../support/page_objects/contractPage")
const { navigateToCreativePage } = require("../support/page_objects/creativePage")
const { navigateToLandingPage } = require("../support/page_objects/landingPage")
const { navigateToLocationPage } = require("../support/page_objects/locationTargetPage")
const { navigateToSetUpPage } = require("../support/page_objects/setupPage")

describe('Testing using POM', () => {

    it('Fill in Forms and Submit Campaign', () => {

        //Login And Create A New Campaign
        const passWord = Cypress.env('password')
        const userName = Cypress.env('username')
        
        cy.visit('/')
        cy.get('#Username').type(userName)
        cy.contains('continue').click()
        cy.get('#Password').type(passWord, {log: false})
        cy.get('#loginButton').click()
        cy.url().should('include', "https://stage.reach.randallreilly.com/reach/campaigns")
        cy.get('#add-campaign-button', {timeout:50000}).click()
    
        //Campaign Info
        cy.contains('Campaign Info').click()
        navigateToCampaignInfoPage.fillingCampaignInfoForm()

        //Budget & Run Date
        cy.contains('Budget & Run Dates').click()
        navigateToBudgetPage.fillingBudgetForm()

        //Audience Targeting
        cy.contains('Audience Targeting').click()
        navigateToAudiencePage.fillingAudienceForm()

        //Loction Targeting
        cy.contains('Location Targeting').click()
        navigateToLocationPage.fillingLocationForm()

        //Landing Page
        cy.contains('Landing Page').click()
        navigateToLandingPage.fillingLandingForm()

        //Creative Page
        cy.contains('Creative').click()
        navigateToCreativePage.fillingCreativeForm()

        //Contract Page
        cy.contains('Contract').click()
        navigateToContractPage.fillingContractForm()

        //Setup Notes Page
        cy.contains('Setup Notes').click()
        navigateToSetUpPage.fillingSetUpForm()

        //Submit Campaign
        cy.contains('Submit Campaign').click()
    })
})