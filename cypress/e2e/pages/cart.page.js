class Cart{

  get sauceJacket () { return('#item_5_title_link')}
	get sauceLight () { return('#item_0_title_link')}
	get lightImage () { return ('.inventory_details_img')}
	get lightDetails () { return ('.inventory_details_name')}
	get contShop () { return('#continue-shopping')}
	get removeLight () {return('#remove-sauce-labs-bike-light')}
	get removeJacket () {return ('#remove-sauce-labs-fleece-jacket')}
	get checkoutBtn () { return ('#checkout')}
	get checkoutHeader () { return ('.title')}



  RemoveProduct(){
	cy.get(this.removeLight).click()
  }
}
	export default new Cart()

