describe('PlayerRenderingTest', function () {
  it('10 players loaded on page', function () {
    cy.visit('http://localhost:4200/players');
    cy.get('[data-cy=playerCard]').should('have.length', 10);
  });

  it('filter users', function () {
    cy.visit('http://localhost:4200/players');
    cy.get('[data-cy=filterInput]').type('bayliner');
    cy.get('[data-cy=playerCard]').should('have.length', 1);
  });
});
