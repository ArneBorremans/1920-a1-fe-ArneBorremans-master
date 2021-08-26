describe('TribeRenderingTest', function () {
  it('10 tribes loaded on page', function () {
    cy.visit('http://localhost:4200/tribes');
    cy.get('[data-cy=tribeCard]').should('have.length', 10);
  });

  it('filter tribes', function () {
    cy.visit('http://localhost:4200/tribes');
    cy.get('[data-cy=filterInput]').type('IKEA');
    cy.get('[data-cy=tribeCard]').should('have.length', 1);
  });
});
