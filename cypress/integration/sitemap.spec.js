// import X2JS from 'x2js';

// // refer to https://glebbahmutov.com/blog/test-sitemap/
// describe('sitemap', () => {
//   it('fetches the sitemap.xml', () => {
//     cy.request(`${Cypress.env('host')}sitemap.xml`)
//       .its('body')
//       .then((body) => {
//         const x2js = new X2JS();
//         const json = x2js.xml2js(body);
//         // get all URLs from the sitemap
//         expect(json.urlset.url).to.be.an('array').and.have.length.gt(0);

//         json.urlset.url.forEach((url) => {
//           // const parsed = new URL(url.loc);
//           // cy.log(parsed.pathname);

//           // check if the resource exists
//           cy.request('HEAD', url.loc).its('status').should('eq', 200);
//           // check if the resource exists AND download it
//           // cy.request(url.loc).its('status').should('eq', 200);
//         });
//       });
//   });
// });
