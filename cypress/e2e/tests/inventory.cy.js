import Authentication from '../pages/authentication.page'
import Products from '../pages/products.page'

describe('Inventory', () => {
  beforeEach(() => {
    cy.visit('/')

    Authentication.login('standard_user', 'secret_sauce')
  })


  it('Sort products from A-Z', () => {
    cy.get(Products.selectSort).select('az')

    var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
    productList.sort()
    cy.get(Products.productName).each(($elem, index) => {
       expect($elem.text()).equal(productList[index])
     })
  })


  it('Sort products from Z-A', () => {
    cy.get(Products.selectSort).select('za')

    var productList = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']
    productList.sort().reverse()
    cy.get(Products.productName).each(($elem, index) => {
         expect($elem.text()).equal(productList[index])
       })
  })


  it('Add an item to cart from the inventory page', () => {
    cy.get('.title').should('be.visible')
    cy.get('.title').contains('Products')
    cy.get(Products.addBtn).click()
    cy.get(Products.cartBadge).should('contain', '1')

  })


  it('Click on a product image to view product details page', () => {
    cy.get(Products.sauceOnesie).should('be.visible')
    cy.get(Products.sauceOnesie).click()
    cy.get(Products.onesieDetails).should('be.visible')
    cy.get(Products.onesieDetails).should('contain.text', "Sauce Labs Onesie")

  })
})

