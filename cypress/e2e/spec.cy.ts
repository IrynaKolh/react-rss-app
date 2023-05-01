/// <reference types="cypress" />
describe('Just visit e2e test', () => {
  it('should navigate to pages', () => {
    cy.visit('/');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.get('h1').should('contain', 'About Us');
    cy.contains('Add Card').click();
    cy.url().should('include', '/form');
  });

  it('should show 404 route', () => {
    cy.visit('/user');
    cy.get('h1').should('contain', '404! Page not found!');
  });
});

// describe('Homepage tests', () => {
//   beforeEach(() => {
//     cy.visit('/');
//     cy.intercept('GET', 'https://rickandmortyapi.com/api/character/').as('getCards');
//   });
//   it('Should fetch cards from API', () => {
//     cy.get('input[type=search]');
//     cy.get('[.cards-contener]').should('have.length', 20);
//   });
// });
