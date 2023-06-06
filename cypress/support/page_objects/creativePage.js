export class creativePage {

    fillingCreativeForm() {

        cy.get('.logos-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')
        cy.get('.display-file-names').should('contain', 'sample_png_4MB_C.png')

        cy.get('.banners-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')
        cy.get('.display-file-names').should('contain', 'sample_png_4MB_C.png')

        cy.get('.artwork-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')
        cy.get('.display-file-names').should('contain', 'sample_png_4MB_C.png')

        cy.get('.videos-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/video_creative/sample_avi_file_8MB.avi')
        cy.get('.display-file-names').should('contain', 'sample_avi_file_8MB.avi')

    }
}

export const navigateToCreativePage = new creativePage()