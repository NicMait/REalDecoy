import Authentication from '../pages/authentication.page'
import Products from '../pages/products.page'
import Cart from '../pages/cart.page'

describe('Cart', () => {
  beforeEach(() => {
    cy.visit('/')

    Authentication.login('standard_user', 'secret_sauce')


  })


  it('Verify that the correct products are added to cart', () => {
    // Confirm that the user is taken to the Products page
    cy.get(Products.productPage).should('be.visible')
    cy.get(Products.productPage).contains('Products')
    cy.url().should('contain', 'inventory')
    //Add products to the cart
    cy.get(Products.addLight).click()
    cy.get(Products.cartBadge).should('have.text', 1)
    cy.get(Products.addJacket).click()
    cy.get(Products.cartBadge).should('have.text', 2)
    //Navigate to the cart
    cy.get(Products.cartBadge).click()
    cy.url().should('contain', 'cart')
    //Confirm that the correct products are in the cart
    cy.get(Cart.sauceLight).should('be.visible')
    cy.get(Cart.sauceLight).should('have.text', 'Sauce Labs Bike Light')
    cy.get(Cart.sauceJacket).should('be.visible')
    cy.get(Cart.sauceJacket).should('have.text', 'Sauce Labs Fleece Jacket')

  })

  it('Navigate back to the Inventory page from Cart', () => {
    // Confirm that the user is taken to the Products page
    cy.get(Products.productPage).should('be.visible')
    cy.get(Products.productPage).contains('Products')
    cy.url().should('contain', 'inventory')
    //Add products to the cart
    cy.get(Products.addLight).click()
    cy.get(Products.cartBadge).should('have.text', 1)
    cy.get(Products.addJacket).click()
    cy.get(Products.cartBadge).should('have.text', 2)
    //Navigate to the cart
    cy.get(Products.cartBadge).click()
    cy.url().should('contain', 'cart')
    //Go back to the inventory page to continue shopping
    cy.get(Cart.contShop).click()
    cy.get(Products.productPage).contains('Products')
    cy.url().should('contain', 'inventory')

  })

  it('Remove an item from the cart', () => {
    // Confirm that the user is taken to the Products page
    cy.get(Products.productPage).should('be.visible')
    cy.get(Products.productPage).contains('Products')
    cy.url().should('contain', 'inventory')
    //Add products to the cart
    cy.get(Products.addLight).click()
    cy.get(Products.cartBadge).should('have.text', 1)
    cy.get(Products.addJacket).click()
    cy.get(Products.cartBadge).should('have.text', 2)
    //Navigate to the cart
    cy.get(Products.cartBadge).click()
    cy.url().should('contain', 'cart')
    //Remove an item from the cart
    Cart.RemoveProduct()
    cy.get(Cart.sauceLight).should('not.exist')
    cy.get(Products.cartBadge).should('have.text', 1)


  })

  it('Navigate to the checkout page from Cart', () => {
    // Confirm that the user is taken to the Products page
    cy.get(Products.productPage).should('be.visible')
    cy.get(Products.productPage).contains('Products')
    cy.url().should('contain', 'inventory')
    //Add products to the cart
    cy.get(Products.addLight).click()
    cy.get(Products.cartBadge).should('have.text', 1)
    cy.get(Products.addJacket).click()
    cy.get(Products.cartBadge).should('have.text', 2)
    //Navigate to the cart
    cy.get(Products.cartBadge).click()
    cy.url().should('contain', 'cart')
    //Navigate to the checkout page
    cy.get(Cart.checkoutBtn).click()
    cy.url().should('contain', 'checkout-step-one')
    cy.get(Cart.checkoutHeader).should('be.visible')
    cy.get(Cart.checkoutHeader).should('have.text', 'Checkout: Your Information')

  })

  it('View product details from Cart', () => {
    // Confirm that the user is taken to the Products page
    cy.get(Products.productPage).should('be.visible')
    cy.get(Products.productPage).contains('Products')
    cy.url().should('contain', 'inventory')
    //Add products to the cart
    cy.get(Products.addLight).click()
    cy.get(Products.cartBadge).should('have.text', 1)
    //Navigate to the cart
    cy.get(Products.cartBadge).click()
    cy.url().should('contain', 'cart')
    //Confirm the item is in the cart
    cy.get(Cart.sauceLight).should('be.visible')
    cy.get(Cart.sauceLight).should('have.text', 'Sauce Labs Bike Light')
    //View the details of the item
    cy.get(Cart.sauceLight).click()
    cy.get(Cart.lightDetails).should('be.visible')
    cy.get(Cart.lightDetails).should('have.text', 'Sauce Labs Bike Light')
    cy.get(Cart.lightImage).should('be.visible')

  })


})
