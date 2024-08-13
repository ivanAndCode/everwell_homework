beforeEach(() => {
  cy.visit("/")
  cy.prepareAndCleanup()
  cy.loginViaUI()
})

afterEach(() => {
  cy.prepareAndCleanup()
})

describe('User should be able to', () => {
  it('create a new appointment', () => {
    cy.visit('https://example.cypress.io')
  })
})