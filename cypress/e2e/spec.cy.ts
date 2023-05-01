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

describe('Home component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays a list of cards', () => {
    cy.get('.card-container').should('have.length', 20);
  });

  it('filters cards by search term', () => {
    cy.get('input').type('Morty');
    cy.get('.title').first().should('contain', 'Morty');
  });

  it('displays a modal when a card is clicked', () => {
    cy.get('.card-container').first().click();
    cy.get('.modal-container').should('be.visible');
  });

  it('closes the modal when the close button is clicked', () => {
    cy.get('.card-container').first().click();
    cy.get('.modal-container').should('be.visible');
    cy.get('.close-btn').click();
    cy.get('.modal-container').should('not.exist');
  });
  it('display full info in modal card', () => {
    cy.get('.card-container').first().click();
    cy.get('.modal-container').should('be.visible');
    cy.get('.modal-image-container').children('img');
    cy.get('h3').should('have.class', 'modal-title');
    cy.get('h4').should('have.class', 'info-title');
    cy.get('ul').should('have.class', 'modal-list');
    cy.get('.modal-list > li').should('have.length', 7);
    cy.get('.close-btn').click();
    cy.get('.modal-container').should('not.exist');
  });
});
