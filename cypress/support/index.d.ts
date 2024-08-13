/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Login via interacting with UI
         * @example
         * cy.loginViaUI()
         */
        loginViaUI(email?: string, password?: string): Chainable<any>

        /**
         * Login via interacting with API and saving the auth response
         * * @example
         * cy.loginViaAPI()
         */
        loginViaAPI(email?: string, password?: string): Chainable<any>

        /**
         * Command that cleans the state for a particular user
         * @example
         *  cy.prepareAndCleanup('useremail@gmail.com')
         */
        prepareAndCleanup(email?: string, password?: string): Chainable<any>
    }
}