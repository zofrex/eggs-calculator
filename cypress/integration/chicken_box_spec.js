/// <reference types="Cypress" />

describe('The Chicken Box Calculator', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Chicken Boxes').click();
  });

  it('Starts at zero', () => {
    cy.contains('Internal hatchery rate').find('input').should('have.value', '0');
    cy.contains('Internal hatchery calm').find('input').should('have.value', '0');
    cy.contains('Population').find('input').should('have.value', '0');

    cy.contains('Chickens per hour (app closed): 0');
    cy.contains('Chickens per hour (app open): 0');
    cy.contains('Difference: 0');

    cy.contains('0 12% chicken boxes');
    cy.contains('0 3% chicken boxes');
  });

  it('Gives chickens per hour + difference', () => {
    cy.contains('Internal hatchery rate').find('input').type('{backspace}4000').should('have.value', '4000');
    cy.contains('Internal hatchery calm').find('input').type('{backspace}150').should('have.value', '150');
    cy.contains('Population').find('input').type('{backspace}800M').should('have.value', '800M');

    cy.contains('Chickens per hour (app closed): 2.4M');
    cy.contains('Chickens per hour (app open): 960k');
    cy.contains('Difference: 1.44M');
  });
});
