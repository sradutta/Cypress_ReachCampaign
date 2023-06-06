///<reference types = "cypress"/>


describe ('logging in and audience targeting', () => {

    beforeEach(() => {
        cy.login('userName', 'passWord')

        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Audience Targeting').click()
    })

    it('Target Audience Contains All The Checkboxes', () => {

        //cy.get('[class="text-xs mb-2 transition-all"]').invoke('show').should('contain', 'CDL-B').click({multiple:true})
        cy.get('[class="form-field relative"]').should('contain', 'CDL-B')
        cy.get('[class="form-field relative"]').should('contain', 'Company Driver')
        cy.get('[class="form-field relative"]').should('contain', 'Lease Purchase')
        cy.get('[class="form-field relative"]').should('contain', 'Owner Operator')
        cy.get('[class="form-field relative"]').should('contain', 'Students - Current')
        cy.get('[class="form-field relative"]').should('contain', 'Students - Prospective')
        cy.get('[class="form-field relative"]').should('contain', 'Students - Graduated')
        cy.get('[class="form-field relative"]').should('contain', 'Team Company Driver - Established')
        cy.get('[class="form-field relative"]').should('contain', 'Team Company Driver - Willing to Match')
        cy.get('[class="form-field relative"]').should('contain', 'Team Owner Operator - Established')
        cy.get('[class="form-field relative"]').should('contain', 'Technician')
        cy.get('[class="form-field relative"]').should('contain', 'Team Owner Operator - Willing to Match')
        cy.get('[class="form-field relative"]').should('contain', 'Warehouse Workers')
        cy.get('[class="form-field relative"]').should('contain', 'Yard Jockeys')
        
        /*
        cy.contains('CDL-B').click({multiple:true})
        cy.contains('Company Driver').click({multiple:true})
        cy.contains('Lease Purchase').click({multiple:true})
        cy.contains('Owner Operator').click({multiple:true})
        cy.contains('Students - Current').click({multiple:true})
        cy.contains('Students - Prospective').click({multiple:true})
        cy.contains('Students - Graduated').click({multiple:true})
        cy.contains('Team Company Driver - Established').click({multiple:true})
        cy.contains('Team Company Driver - Willing to Match').click({multiple:true})
        cy.contains('Team Owner Operator - Established').click({multiple:true})
        cy.contains('Technician').click({multiple:true})
        cy.contains('Team Owner Operator - Willing to Match').click({multiple:true})
        cy.contains('Warehouse Workers').click({multiple:true})
        cy.contains('Yard Jockeys').click({multiple:true}) 
        */
    })

    it('Select CDL-B and also fills in the extras -- haul and route type', () => {
        
        cy.contains('CDL-B').click({multiple:true})

        /* Haul Types */
        cy.contains('Auto Hauler').click({multiple:true})
        cy.contains('Doubles/Triples').click({multiple:true})
        cy.contains('Dry Van').click({multiple:true})
        cy.contains('Flatbed').click({multiple:true})
        cy.contains('Hazmat').click({multiple:true})
        cy.contains('Hazmat/Tanker').click({multiple:true})
        cy.contains('Heavy Haul/Specialized').click({multiple:true})
        cy.contains('Intermodal').click({multiple:true})
        cy.contains('LTL').click({multiple:true})
        cy.contains('Reefer').click({multiple:true})
        cy.contains('Tanker').click({multiple:true})
        cy.contains('Household Goods').click({multiple:true})
        cy.contains('Other').click({multiple:true}).type('Testing Custom Haul Type')
        /* Haul Types */

        /* Route Types */
        cy.contains('Dedicated Local').click({multiple:true})
        cy.contains('Dedicated OTR').click({multiple:true})
        cy.contains('Dedicated Regional').click({multiple:true})
        cy.contains('Local').click({multiple:true})
        cy.contains('OTR').click({multiple:true})
        cy.contains('Regional/Short Haul').click({multiple:true})
        cy.contains('Other').click({multiple:true}).type('Testing Other Route Type')
        /* Route Types */
    })

    it('Select Technician, Confirm Route Type and Haul are not visible', () => {

        cy.contains('Technician').click({multiple:true})

        cy.contains('Haul Types').should('not.be.visible')
        cy.contains('Route Types').should('not.be.visible')
        
    })

    it('Fill in Endorsements Required', () => {

        cy.contains('Doubles/Triples').click({force:true})
        cy.contains('Hazmat').click({force:true})
        cy.contains('Tanker').click({force:true})
        cy.contains('Other').type('Custom Endorsment Testing')
    })

    it('Experience Required', () => {
        
        cy.get('#years').invoke('attr', 'min').should('eq', '0')
        cy.get('#years').invoke('attr', 'max').should('eq', '10')
        cy.get('#years').type(10)

        cy.get('#months').invoke('attr', 'min').should('eq', '0')
        cy.get('#months').invoke('attr', 'max').should('eq', '11')
        cy.get('#months').type(5)
    })

    it('Fleet Type', () => {
        cy.contains('Private').click({force:true})
    })

    it('Notes', () => {
        cy.get('#audience_targeting_notes').type('Testing')
    })
})