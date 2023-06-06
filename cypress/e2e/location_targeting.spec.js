///<reference types = "cypress"/>

/* This tests the location targeting page and any functionalities
   the page has. 
*/

describe ('logging in and location targeting', () => {

    beforeEach(() => {

        cy.login('userName', 'passWord')
        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Location Targeting').click()
    })

    it('Nationwide', () => {

        cy.get('[name="nationwide"]').click()
        //cy.compareSnapshot('nationwideMap', 0.0)


        
    })
})