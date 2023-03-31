import Authentication from '../pages/authentication.page'
import Products from '../pages/products.page'
import Logout from '../pages/logout.page'


describe('Logout', () => {
  beforeEach(() => {
    cy.visit('/')

    Authentication.login('standard_user', 'secret_sauce')

  })


  it('Logout of the application', () => {
    // Confirm that the user is taken to the Products page
    cy.get(Products.productPage).should('be.visible')
    cy.get(Products.productPage).contains('Products')
    cy.url().should('contain', 'inventory')
    Logout.logout()
    cy.url('https://www.saucedemo.com/')
    cy.get('#login-button').should('be.visible')

  })

})