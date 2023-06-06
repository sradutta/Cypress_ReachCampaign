export class locationTargetPage {

    fillingLocationForm() {
        cy.get('[name="nationwide"]').click()

    }
}

export const navigateToLocationPage = new locationTargetPage()