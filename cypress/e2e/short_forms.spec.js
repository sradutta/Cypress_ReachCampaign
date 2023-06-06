///<reference types = "cypress"/>

describe('Short Form Settings', () => {

    beforeEach(() => {
        cy.login('userName', 'passWord')

        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Short Form Settings').click()
    })

    it('The Form', () =>{
        cy.contains('Phone Number').click({force:true})
        cy.get('#ats').click
        cy.select('Hubspot')
        cy.get('.relative').eq(0).type(1)
        cy.get('.relative').eq(1).type(1)
        cy.get('#short_form_settings_notes').type('testing')

    })
})