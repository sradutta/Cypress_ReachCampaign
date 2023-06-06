///<reference types = "cypress"/>

/* This tests the contract page and any functionalities
   the page has. This test can run into memory issues
   due to file uploads. Clear the cy directory and rerun.

   Also, error might happen due to RC issues. I brought up
   the issue here -- 
   https://randallreilly.slack.com/archives/C02Q1HP3810/p1684264658686159
*/

describe ('logging in and then creative', () => {

    beforeEach(() => {
        cy.login('userName', 'passWord')
        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Creative').click()
    })

    it('Creative Requirements Are Visible', () => {
        cy.get('.logos-accept-filetype').should('contain', 'Acceptable file types: PNG,JPEG,JPG,SVG,BMP (Maximum size: 12MB)')
        cy.get('.banners-accept-filetype').should('contain', 'Acceptable file types: PNG,JPEG,JPG,SVG,BMP (Maximum size: 12MB)')
        cy.get('.artwork-accept-filetype').should('contain', 'Acceptable file types: PNG,JPEG,JPG,SVG,BMP (Maximum size: 12MB)')
        cy.get('.videos-accept-filetype').should('contain', 'Acceptable file types: MOV,MP4,WMV,AVI,WEBM (Maximum size: 12MB)')
    })

    it('Logos -- Upload, Delete, Error Msg', () => {

        //Upload and Assert
        cy.get('.logos-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')
        cy.get('.display-file-names').should('contain', 'sample_png_4MB_C.png')

       

        //Delete if file exists

        //Assert Error Msg

    })

    //Upload the same file multiple times
    it('Upload files multiple times', () => {
         
         var genArr = Array.from({length:10},(v,k)=>k+1)
         cy.wrap(genArr).each((index) => {
             cy.get('.logos-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')
         })
    })
    it('Upload banners multiple times', () => {
        var genArr = Array.from({length:15},(v,k)=>k+1)
         cy.wrap(genArr).each((index) => {
            cy.get('.banners-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')

         })
    })
    it('Upload artwork multiple times', () => {
        var genArr = Array.from({length:15},(v,k)=>k+1)
         cy.wrap(genArr).each((index) => {
            cy.get('.artwork-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')

         })
    })
    it.only('Upload videos multiple times', () => {
        var genArr = Array.from({length:10},(v,k)=>k+1)
         cy.wrap(genArr).each((index) => {
            cy.get('.videos-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/video_creative/sample_avi_file_8MB.avi')

         })
    })

    it('Banners -- Upload, Delete, Error Msg', () => {

        //Upload and Assert
        cy.get('.banners-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')
        cy.get('.display-file-names').should('contain', 'sample_png_4MB_C.png')

         //Delete if file exists

        //Assert Error Msg
        
    })

    it('Artwork -- Upload, Delete, Error Msg', () => {

        //Upload and Assert
        cy.get('.artwork-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/banner_creative/sample_png_4MB_C.png')
        cy.get('.display-file-names').should('contain', 'sample_png_4MB_C.png')

         //Delete if file exists

        //Assert Error Msg
        
    })

    it('Videos -- Upload, Delete, Error Msg', () => {

        //Upload and Assert
        cy.get('.videos-label-caption').selectFile('/Users/SrabastiDutta/Documents/Automation_Codes/reach_campaign_cypress/cypress/fixtures/video_creative/sample_avi_file_8MB.avi')
        cy.get('.display-file-names').should('contain', 'sample_avi_file_8MB.avi')

         //Delete if file exists

        //Assert Error Msg
        
    })


})