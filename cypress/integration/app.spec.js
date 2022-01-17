describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    // cypress.env refer to https://github.com/rodrigosta/e2e-toDoList
    cy.visit(Cypress.env('host'));

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href="/home"]').click();

    // The new url should include "/home"
    cy.url().should('include', '/home');

    // The new page should contain an h1 with "About page"
    cy.get('h2').contains('Phoebe Caulfield');

    
  });
});
