/// <reference types="cypress" />


context('Month filter', () => {
    beforeEach(() => cy.visit('localhost:3000/fridge/addition'));
    
    it('Checks the title of the page', () => cy.title().should('eq', 'Wadge'));

    it('Looks for the nav bar', () => cy.get('#navbar'));

    it('Checks the search bar', () => cy.get('.form-control'))

    it('Checks the title', () => cy.contains('Liste des fruits et légumes à ajouter'));

    it('Makes sure all every food is present', () => {
        cy.get('.fridge-addition__food-card').should('have.length', 88);
    });

    it('Makes sure each food has its counter', () => {
        cy.get('.fridge-addition__counter').should('have.length', 88);
    });

    it('Checks that sub titles are present', () => {
        cy.contains('Légumes');
        cy.contains('Fruits');
    });

    it('Checks the validation button', () => {
        cy.get('.fridge-addition__button').should('have.attr', 'href', '/fridge');
    });

    // TODO Check the buttons +/-
    it('Check the +/- buttons', () => {
        cy.get('.fridge-addition__counter').should('increase');
    });

})