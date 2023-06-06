///<reference types = "cypress"/>


describe ('logging in and then budget and run dates', () => {

    beforeEach(() => {
        cy.login('userName', 'passWord')

        cy.visit('/')
        cy.get('#add-campaign-button').click()
        cy.contains('Budget & Run Dates').click()
    })

    it('Budget & Run Dates', () => {

        
        cy.get('[name="monthly_net_budget"]').type('1000')

        //const dayjs = require('dayjs')
        //cy.get('input').eq(1).type('05/25/2023', {force:true})
        //cy.get('input').eq(1).type(dayjs().format('MM/DD/YYYY'), {force:true})
        const d = new Date()
        cy.get('input').eq(1).type(d.toLocaleDateString(), {force:true})

        cy.contains('Yes').click()
        cy.get('#budget_and_run_dates_notes').type('Testing')
    })
})