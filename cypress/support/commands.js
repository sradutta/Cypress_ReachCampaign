// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (userName, passWord) => {
    cy.session([userName, passWord], () =>{
        
        const passWord = Cypress.env('password')
        const userName = Cypress.env('username')
        
        cy.visit('/')
        cy.get('#Username').type(userName)
        cy.contains('continue').click()
        cy.get('#Password').type(passWord, {log: false})
        cy.get('#loginButton').click()
        cy.url().should('include', "https://stage.reach.randallreilly.com/reach/campaigns")
    },
    {
        cacheAcrossSpecs: true
    })
})

//const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

//compareSnapshotCommand();
/*compareSnapshotCommand({
    capture: 'fullPage'
  });*/