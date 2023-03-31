import Authentication from '../pages/authentication.page'

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with a valid user', () => {
    //enter username and password and click the login button
    Authentication.login('standard_user', 'secret_sauce')
    //confirm the inventory page is shown
    cy.url('https://www.saucedemo.com/inventory.html')
    cy.get('.title').should('be.visible')
    cy.get('.title').contains('Products')
  })

  it('Login with locked out user', () => {
    //enter username and password for locked out user
    Authentication.login('locked_out_user', 'secret_sauce')
    //confirm error message is shown
    cy.get(Authentication.errorMsg).should('be.visible')
    cy.get(Authentication.errorMsg).should('have.text', "Epic sadface: Sorry, this user has been locked out.")

  })

  it('Login with an invalid password', () => {
    //enter invalid password for standard user
    Authentication.login('standard_user', 'pasta_sauce')
    //confirm error message is shown
    cy.get(Authentication.errorMsg).should('be.visible')
    cy.get(Authentication.errorMsg).should('have.text', "Epic sadface: Username and password do not match any user in this service")

  })
})


