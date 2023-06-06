export class setUpPage {

    fillingSetUpForm() {

        cy.get('#setup_notes').type('Testing')
    }
}

export const navigateToSetUpPage = new setUpPage()