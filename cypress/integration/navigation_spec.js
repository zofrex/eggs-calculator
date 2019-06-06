describe('Navigation', () => {
  it('Starts on the trophy calculator', () => {
    cy.visit('/');
    cy.contains('10 billion:');
  });

  it('Starts with the trophy calculator button disabled', () => {
    cy.visit('/');
    cy.contains('Trophies').should('be.disabled');
  });

  it('has a button to go to the chicken box page', () => {
    cy.visit('/');
    cy.contains('Chicken Boxes');
  });

  it('Takes us to the chicken box calculator', () => {
    cy.visit('/');
    cy.contains('Chicken Boxes').click();
    cy.contains('Chickens per hour');
  });

  it('Disables the chicken box button when we are on that page', () => {
    cy.visit('/');
    cy.contains('Chicken Boxes').click().should('be.disabled');
  });

  it('Takes us back to the trophy calculator', () => {
    cy.visit('/');
    cy.contains('Chicken Boxes').click();
    cy.contains('Trophies').click();
    cy.contains('10 billion:');
  });
});
