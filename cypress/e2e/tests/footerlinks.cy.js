import Authentication from '../pages/authentication.page'
import Footer from '../pages/footer.page'
import Cart from '../pages/cart.page'


describe('Footer Links', () => {
  beforeEach(() => {
    cy.visit('/')

    Authentication.login('standard_user', 'secret_sauce')
  })


  it('Navigate to Sauce Labs Twitter Page using the footer link', () => {
    cy.url().should('contain', 'inventory')
    cy.get(Footer.twitterLink).should('be.visible')
    cy.get(Footer.twitterLink).click()
    cy.url('https://twitter.com/saucelabs')

  })


  it('Navigate to Sauce Labs Facebook Page using the footer link', () => {
    cy.url().should('contain', 'inventory')
    cy.get(Footer.facebookLink).should('be.visible')
    cy.get(Footer.facebookLink).click()
    cy.url('https://www.facebook.com/saucelabs')

  })


  it('Verify footer links are the same on Inventory, Cart, and Checkout pages', () => {
    cy.url().should('contain', 'inventory')
    Footer.ConfirmFooter()
    cy.get('.shopping_cart_link').click()
    cy.url().should('contain', 'cart')
    Footer.ConfirmFooter()
    cy.get(Cart.checkoutBtn).click()
    cy.url().should('contain', 'checkout-step-one')
    Footer.ConfirmFooter()

  })


})