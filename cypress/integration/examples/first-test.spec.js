const { createYield } = require("typescript");

describe('Basic tests', ()=> {

    it('open the web app main page', () => {
        cy.visit('http://localhost:4200');
    });


    it('submit button to be disabled', () => {
        cy.visit('http://localhost:4200');
        cy.get('[data-cy="submit"]').should('be.disabled');
    });

    it('button should be disabled after entering only one value', () => {
        cy.visit('http://localhost:4200');
        cy.get('[data-cy="firstName"]').type('Syam');
        cy.get('[data-cy="firstName"]').invoke('val').then((x) => {
            expect(x).to.eq('Syam');
        });
        cy.get('[data-cy="submit"]').should('be.disabled');
    });

    it('button should be enabled after entering all the values', () => {
        cy.visit('http://localhost:4200');
        cy.get('[data-cy="firstName"]').type('Syam');
        cy.get('[data-cy="lastName"]').type('Pradeep');
        cy.get('[data-cy="firstName"]').invoke('val').then((x) => {
            expect(x).to.eq('Syam');
        });
        cy.get('[data-cy="lastName"]').invoke('val').then((x) => {
            expect(x).to.eq('Pradeep');
        })
        cy.get('[data-cy="submit"]').should('not.be.disabled');
    });
    

});