describe('Navigation', () => {
  it('Takes us to the chicken box calculator', () => {
    cy.visit('/');

    cy.contains('Chicken Boxes').click();

    cy.contains('Chickens per hour');
  });
});
