describe('CommentRenderingTest', function () {
  beforeEach(function () {
    cy.login();
  });

  it('2 comments loaded on page', function () {
    cy.visit('/forum');
    cy.get('[data-cy=forumCard]').should('have.length', 2);
  });
});
