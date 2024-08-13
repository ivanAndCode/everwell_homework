describe('Login functionality should work via', () => {
  it('UI', () => {
    cy.loginViaUI()
  })

  it('API', () => {
    cy.loginViaAPI()
  })
})