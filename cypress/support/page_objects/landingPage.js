export class landingPage {

    fillingLandingForm() {
        cy.get('#benefits').type('Testing')
        cy.get('#requirements').type('Testing')
        cy.get('#company_overview').type('Testing')
        cy.get('[class="input-text text-xs mb-2"]').type('https://www.google.com')
        cy.get('#landing_page_notes').type('Testing')

    }
}

export const navigateToLandingPage = new landingPage()