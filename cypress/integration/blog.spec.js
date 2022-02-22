describe('blog pages', () => {
  it('blog index page', () => {
    cy.visit(`${Cypress.env('host')}blog`);
    cy.url().should('include', '/blog');
    cy.get('h1').contains(/blog/i);
  });

  it('blog detail page', () => {
    cy.visit(`${Cypress.env('host')}blog`);
    cy.get('div[href*="blog/"]').first().click();
  });
});
