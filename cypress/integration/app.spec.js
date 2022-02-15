// cypress api doc: https://docs.cypress.io/api/table-of-contents

describe('Welcome page', () => {
  it('content on welcome page', () => {
    cy.visit(Cypress.env('host'));
    cy.url().should('include', '/');
    cy.get('button').contains(/enter/i);
    cy.get('h1').contains(/hey there! i am andy/i);
  });
});

describe('Inter pages', () => {
  beforeEach(() => {
    // Start from the index page
    // cypress.env refer to https://github.com/rodrigosta/e2e-toDoList
    cy.visit(Cypress.env('host'));
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href="/home"]').click();
  });

  it('check the content should be displayed on the page', () => {
    cy.url().should('include', '/home');
    cy.get('h2').contains('Andy Cao');
    cy.get('button').contains(/terms and conditions/i);
    cy.get('button').contains(/privacy policy/i);
    cy.get('p').contains(/copyright/i);
  });

  it('blog page', () => {
    cy.get('a[href="/blog"]').first().click();
    cy.url().should('include', '/blog');
    cy.get('h1').contains(/blog/i);
  });

  it('project page', () => {
    cy.get('a[href="/project"]').first().click();
    cy.url().should('include', '/project');
    cy.get('h1').contains(/project/i);
  });

  it('hobbies page', () => {
    cy.get('a[href="/hobbies"]').first().click();
    cy.url().should('include', '/hobbies');
    cy.get('h1').contains(/hobbies/i);
    cy.get('h2').contains(/rc hobby/i);
    cy.get('h2').contains(/video editing/i);
  });

  it('about page', () => {
    cy.get('a[href="/about"]').first().click();
    cy.url().should('include', '/about');
    cy.get('h1').contains(/about/i);
  });
});
