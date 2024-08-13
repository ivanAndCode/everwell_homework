// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

//TODO unhardcode default user email & password
// add a new helper function to fetch users from the secret vault
// with default user as a default (surprise!)
// update readme mentioning the secret structure and default vs specific user usage patterns
Cypress.Commands.add('loginViaUI', (email= 'defaultUser@gmail.com', password= '12solidDefaultStrongPassword33') => {
  //visit login
  //type username
  //type password
  //click login button
  //assert you on the right landing page & logged in
})

Cypress.Commands.add('loginViaAPI', (email= 'defaultUser@gmail.com', password = '12solidDefaultStrongPassword33') => {
  //make API call (or whatever the sequence is)
  //set the cookie (assumption that it is set via cookie)
})

Cypress.Commands.add('prepareAndCleanup', (email = 'defaultUser@gmail.com', password= '12solidDefaultStrongPassword33') => {
  //make some API calls to clean up any existing appointments
  //or any other stale state/data associated with user
})
