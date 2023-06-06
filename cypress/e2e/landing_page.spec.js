///<reference types = "cypress"/>

/* This tests the landing page and any functionalities
   the page has. 
*/

describe ('logging in and then landing page', () => {

    beforeEach(() => {

        cy.login('userName', 'passWord')
        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Landing Page').click()
    })

    it('Landing Page', () => {
        
        cy.get('#benefits').type('Testing')
        cy.get('#requirements').type('Testing')
        cy.get('#company_overview').type('Testing')
        cy.get('[class="input-text text-xs mb-2"]').type('https://www.google.com')
        cy.get('#landing_page_notes').type('Testing')
    })
})