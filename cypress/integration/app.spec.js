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
    cy.get('button').contains(/back to homepage/i);
    cy.get('h2').contains(/can not find the page/i);
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
    cy.get('h3').contains('Software Developer');
    cy.get('h2').contains(/working on/i);
    cy.get('h2').contains(/my youtube channel/i);

    // need to have the link to about and projects
    cy.get('a[href*="about"]');
    cy.get('a[href*="project"]');
    cy.get('footer ul li').get('button[href*="t&c"]');
    cy.get('footer ul li').get('button[href*="privacy"]');

    // footer links
    cy.get('button').contains(/terms and conditions/i);
    cy.get('button').contains(/privacy policy/i);
    cy.get('p').contains(/copyright/i);
  });

  it('blog page', () => {
    cy.get('a[href="/blog"]').first().click();
    cy.url().should('include', '/blog');
    cy.get('.page-title').contains(/blog/i);

    // open first blog page
    cy.visit(`${Cypress.env('host')}blog`);
    cy.get('div[href*="blog/"]').first().click();
    // close the page
    cy.get('button[aria-label="Close"]').click();
  });

  it('project page', () => {
    cy.get('a[href="/project"]').first().click();
    cy.url().should('include', '/project');
    cy.get('.page-title').contains(/projects/i);

    // open first project page
    cy.visit(`${Cypress.env('host')}project`);
    cy.get('div[href*="project/"]').first().click();
    // close the page
    cy.get('button[aria-label="Close"]').click();
  });

  it('hobbies page', () => {
    cy.get('a[href="/hobbies"]').first().click();
    cy.url().should('include', '/hobbies');
    // cy.get('h1').contains(/hobbies/i);
    cy.get('#rc-hobby-id h2').contains(/RC Hobby/i);

    cy.get('h2').contains(/video editing/i);
    cy.get('h2').contains(/3d printing/i);
    cy.get('h2').contains(/drawing/i);
  });

  it('about page', () => {
    cy.get('a[href="/about"]').first().click();
    cy.url().should('include', '/about');
    cy.get('.page-title').contains(/about/i);
  });
});
