describe('SampleComponent E2E', () => {
  it('should display the correct text', () => {
    cy.visit('/');
    cy.get('[data-testid="sample-component"]').should('exist');
  });
}); 