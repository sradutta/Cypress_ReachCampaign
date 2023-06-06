///<reference types = "cypress"/>


describe ('logging in and then campaign info', () => {

    beforeEach(() => {
        cy.login('userName', 'passWord')

        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Campaign Info').click()
    })
    
    it('campaign info', () => {
        
        //Company
        //cy.get('#company-search').type('21st Century Marketing', {force:true})
        cy.get('#company-search').type('b', {force:true}).then((items) => {
            cy.wrap(items).get('.dropdown-menu').eq(0).contains('1st Source Bank').click({force:true})
        })

        //Agency
        //cy.get('#agency-search').type('M', {force:true})
        cy.get('#agency-search').type('M', {force:true}).then((items) => {
            cy.wrap(items).get('.dropdown-menu', {timeout: 5000}).eq(1).contains('Mediacom').click({force:true})
        })
        //Campaign Name
        const d = new Date()
        let name = 'Automation_Testing_'+ d
        cy.get('[class="input-text"]').eq(2).type(name, {force:true})

        //Campaign Objective and Campaign Goal
        /* if(cy.contains('Lead Generation').click()){
            cy.get('[id="Short Forms"]').click()
        }
        else if(cy.contains('Website Traffic').click()){
            cy.get('#Clicks').click()
        }
        else if(cy.contains('Branding').click()){
            cy.get('#Impressions').click()
        }*/
        //cy.contains('Lead Generation').click()
        //cy.get('[id="Short Forms"]').click()
        cy.contains('Website Traffic').click()
        cy.get('#Clicks').click()


        //Goal
        cy.get('[class="input-text relative w-40"]').type('100')

        //Traffic Destination 
        cy.contains('Landing page built by Randall Reilly').click()

        //Items
        cy.contains('Landing Page').click()

        //Notes
        cy.get('#campaign_notes').type('Test')

    })

    

    

   

   

    

   

    


})