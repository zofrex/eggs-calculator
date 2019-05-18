describe('The Trophy Time Calculator', function() {
  it('Passes a basic smoke test', function() {
    cy.visit('/');

    cy.contains('Current chickens').find('input').type('{backspace}5M');
    cy.contains('Hatchery rate').find('input').type('{backspace}3000');
    cy.contains('Internal Hatchery Calm').find('input').type('{backspace}100');
    cy.contains('Long warp time').find('input').type('{backspace}12');

    cy.contains('10 million: 0d 3h 29m');
    cy.contains('50 million: 1d 7h 15m');
    cy.contains('250 million: 7d 2h 9m');
    cy.contains('1 billion: 28d 18h 59m');
    cy.contains('10 billion: 289d 4h 59m');

    cy.contains('10 million: 1 warp');
    cy.contains('50 million: 6 warps');
    cy.contains('250 million: 29 warps');
    cy.contains('1 billion: 116 warps');
    cy.contains('10 billion: 1157 warps');
  })
});
