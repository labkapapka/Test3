describe('Функції сайту Cypress', () => {
  it('Підписатись на розсилку', () => {
    cy.visit('https://www.cypress.io/');
    cy.get(':nth-child(5) > .nav-bar-link').click();
    cy.get('.footer-form > .border').click();
    cy.get('#subscribe_email').type('niyom40559@byorby.com');
    cy.get('form.relative > .gap-\[16px\] > .border').click();
    // cy.get('form.relative > .gap-[16px] > .border').click();
    // cy.get('form.relative > .gap-\[16px\] > .border').click();
    // cy.get('.w-full > .font-primary').should('have text', 'Thank you for subscribing!');
  
  });
  
  it('Підписатись на розсилку', () => {
    cy.visit('https://www.cypress.io/');
    cy.get(':nth-child(5) > .nav-bar-link').click();
    cy.get('.footer-form > .border').click();
    cy.get('#subscribe_email').type('niyom40559@byorby.com');
    cy.get('form.relative > .gap-\[16px\] > .border').click();
    // cy.get('form.relative > .gap-[16px] > .border').click();
    // cy.get('form.relative > .gap-\[16px\] > .border').click();
    // cy.get('.w-full > .font-primary').should('have text', 'Thank you for subscribing!');
  
  });


});
