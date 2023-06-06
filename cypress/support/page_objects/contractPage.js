export class contractPage {

    fillingContractForm() {

        cy.get('.contract-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/pdf_contract/lorem_ipsum_large_A.pdf')
        cy.contains('lorem_ipsum_large_A.pdf')
    }
}

export const navigateToContractPage = new contractPage()