const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given('I am on the login page', () => {
  cy.visit('/');
});

When(/^I enter my (valid|invalid) username and password/, (isValid) => {
  if (isValid === 'valid') {
    cy.get('[name="username"]').type('admin');
    cy.get('[name="password"]').type('admin');
  } else {
    cy.get('[name="username"]').type('admin');
  }
});

When('I click on the login button', () => {
  cy.get('[value="Log In"]').click();
});

Then(/^I (should|shouldn't) be logged in/, (should) => {
  if (should === 'should') {
    cy.url().should('include', '/parabank/overview.htm');
    cy.get('.title').should('have.text', 'Accounts Overview');
  } else {
    cy.url().should('include', '/parabank/login.htm');
    cy.get('.error').should('have.text', 'Please enter a username and password.');
  }
});
