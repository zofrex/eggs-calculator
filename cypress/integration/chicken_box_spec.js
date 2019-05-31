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

    cy.contains('Infinity 12% chicken boxes');
    cy.contains('Infinity 3% chicken boxes');
  });

  it('Gives chickens per hour + difference', () => {
    cy.contains('Internal hatchery rate').find('input').type('{backspace}4000').should('have.value', '4000');
    cy.contains('Internal hatchery calm').find('input').type('{backspace}150').should('have.value', '150');

    cy.contains('Chickens per hour (app closed): 2.4M');
    cy.contains('Chickens per hour (app open): 960k');
    cy.contains('Difference: 1.44M');
  });

  it('Gives a simple singular chicken box answer', () => {
    cy.contains('Internal hatchery rate').find('input').type('{backspace}2000').should('have.value', '2000');
    cy.contains('Internal hatchery calm').find('input').type('{backspace}50').should('have.value', '50');
    cy.contains('Population').find('input').type('{backspace}4M').should('have.value', '4M');

    // 720k app closed
    // 480k app open
    // 240k difference

    cy.contains('1 12% chicken boxes');
    cy.contains('2 3% chicken boxes');
  });
});
