// cypress api doc: https://docs.cypress.io/api/table-of-contents

describe('Welcome page', () => {
  it('content on welcome page', () => {
    cy.visit(Cypress.env('host'));
    cy.url().should('include', '/');
    cy.get('button').contains(/enter/i);
    cy.get('h1').contains(/hey there! i am andy/i);
  });
});

describe('404 error page', () => {
  it('return 404 if page not found', () => {
    cy.request({ url: `${Cypress.env('host')}page-not-exist`, failOnStatusCode: false }).its('status').should('equal', 404);
  });
  it('404 page code and content should be correct', () => {
    cy.request({ url: `${Cypress.env('host')}404`, failOnStatusCode: false }).its('status').should('equal', 404);
    cy.visit(`${Cypress.env('host')}404`, { failOnStatusCode: false });
    cy.get('button').contains(/back to home/i);
    cy.get('h1').contains(/can not find the page/i);
  });
});

describe('other pages', () => {
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
    // open first blog page
    cy.visit(`${Cypress.env('host')}blog`);
    cy.get('div[href*="blog/"]').first().click();
    // close the page
    cy.get('button[aria-label="Close"]').click();
  });

  it('project page', () => {
    cy.get('a[href="/project"]').first().click();
    cy.url().should('include', '/project');
    cy.get('h1').contains(/project/i);

    // open first project page
    cy.visit(`${Cypress.env('host')}project`);
    cy.get('div[href*="project/"]').first().click();
    // close the page
    cy.get('button[aria-label="Close"]').click();
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

  it('about contact page', () => {
    cy.get('a[href="/about"]').first().click();
    cy.get('a[href="/about/contact"]').first().click();
    cy.url().should('include', '/about/contact');
  });
  it('about apps page', () => {
    cy.get('a[href="/about"]').first().click();
    cy.get('a[href="/about/apps"]').first().click();
    cy.url().should('include', '/about/apps');
  });
  it('about devices page', () => {
    cy.get('a[href="/about"]').first().click();
    cy.get('a[href="/about/devices"]').first().click();
    cy.url().should('include', '/about/devices');
  });
});
