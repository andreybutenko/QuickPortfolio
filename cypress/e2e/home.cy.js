describe('Home page', () => {
  it('should display core page elements', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains('Portfolio Listing');
    cy.get('a[href="/portfolio/create"').contains('Create Portfolio');
    cy.get('div[class*="MuiCardContent"] a[href^="/portfolio/"').contains(
      'View Portfolio'
    );
  });
});
