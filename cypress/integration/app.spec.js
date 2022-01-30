describe('Navigation', () => {
  beforeEach(() => {
    // Start from the index page
    // cypress.env refer to https://github.com/rodrigosta/e2e-toDoList
    cy.visit(Cypress.env('host'));
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href="/home"]').click();

    // The new url should include "/home"
    cy.url().should('include', '/home');
  });

  it('should navigate to the home page', () => {
    cy.get('h2').contains('Andy Cao');
  });

  it('should navigate to the about page', () => {
    // console.log(cy.get('a[href="/about"]'));
    cy.get('a[href="/about"]').first().click();
    cy.url().should('include', '/about');
    cy.get('h1').contains('About me');
  });
});
