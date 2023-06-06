///<reference types = 'cypress'/>

describe("submitting campaign", () =>{
    
    beforeEach(() => {

        cy.login('userName', 'passWord')

        cy.visit('/')
        cy.get('#add-campaign-button').click()
    })

    it('Submit Button', () => {

        cy.get('#creative-status-icon').invoke('css', 'color')
          .then((color) =>{
            expect(color).to.eq('green')
          })
        cy.contains('Submit Campaign').click()
    })

})