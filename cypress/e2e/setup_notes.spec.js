///<reference types = "cypress"/>

/* This tests the setup note page and any functionalities
   the page has 
*/

describe ('logging in and then setup notes', () => {

    beforeEach(() => {
        cy.login('userName', 'passWord')
    })

    it('Setup Notes', () => {
        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Setup Notes').click()

        //Fill in the note input-box
        cy.get('#setup_notes').type('Testing')
    })
})