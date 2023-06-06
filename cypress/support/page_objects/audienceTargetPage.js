export class audienceTargetPage {

    fillingAudienceForm() {
        
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

        /* Endorsements */
        cy.contains('Doubles/Triples').click({force:true})
        cy.contains('Hazmat').click({force:true})
        cy.contains('Tanker').click({force:true})
        cy.contains('Other').type('Custom Endorsment Testing')
        /* Endorsements */

        /* Experience Required */
        cy.get('#years').invoke('attr', 'min').should('eq', '0')
        cy.get('#years').invoke('attr', 'max').should('eq', '10')
        cy.get('#years').type(10)

        cy.get('#months').invoke('attr', 'min').should('eq', '0')
        cy.get('#months').invoke('attr', 'max').should('eq', '11')
        cy.get('#months').type(5)
        /* Experience Required */

        /* Fleet Type */
        cy.contains('Private').click({force:true})
        /* Fleet Type */

        /* Notes */
        cy.get('#audience_targeting_notes').type('Testing')
        /* Notes */
    }
}

export const navigateToAudiencePage = new audienceTargetPage()