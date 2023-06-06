///<reference types = "cypress"/>

/* This tests the contract page and any functionalities
   the page has. This test can run into memory issues
   due to file uploads. Clear the cy directory and rerun.

   Also, error might happen due to RC issues. I brought up
   the issue here -- 
   https://randallreilly.slack.com/archives/C02Q1HP3810/p1684264658686159
*/

describe ('logging in and then contract', () => {

    beforeEach(() => {
        cy.login('userName', 'passWord')

        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Contract').click()
    })

    it('Contract Requirement Visible', () => {
       
        cy.contains('Acceptable file types: PDF (Maximum size: 12MB)').should('be.visible')   
    })

    it('Contract Single File Upload', () => {

        cy.get('.contract-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/pdf_contract/lorem_ipsum_large_A.pdf')
        cy.contains('lorem_ipsum_large_A.pdf')

    })

    /* To submit the job multiple times to see if it works each time. Each time it will be a new test.
    Cypress._.times(15,() => {
        it('contract file upload', () => {

        cy.get('.contract-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/pdf_contract/lorem_ipsum_large_A.pdf')
        cy.contains('lorem_ipsum_large_A.pdf')

        })
    })
    To submit the job multiple times to see if it works each time */

    /* Just to upload the same file 15 times */
    it.only('Upload the same file 15 times, not repeat the test 15 times', () => {

        var genArr = Array.from({length:10},(v,k)=>k+1)
        cy.wrap(genArr).each((index) => {
            cy.get('.contract-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/pdf_contract/lorem_ipsum_large_A.pdf')
            cy.contains('lorem_ipsum_large_A.pdf')

        })

    })
    


    it('Multipel Files Upload', () => {

        cy.get('.contract-label-caption')
          .selectFile(['/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/pdf_contract/lorem_ipsum_large_A.pdf',
                       '/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/pdf_contract/lorem_ipsum_large_B.pdf',
                       '/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/pdf_contract/lorem_ipsum_large_E.pdf'], {force:true})
        
        cy.contains('lorem_ipsum_large_A.pdf')
        cy.contains('lorem_ipsum_large_B.pdf')
        cy.contains('lorem_ipsum_large_E.pdf')

    })

    it('Error Msg Shown', () => {

        cy.get('.contract-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/pdf_contract/large_file_13mb.pdf')
        cy.contains('The file size must not be greater than 12 MB.').invoke('show').should('be.visible')

    })
})