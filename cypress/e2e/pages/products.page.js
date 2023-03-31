class Products{

   get productPage () { return ('.title')}
	 get productName () { return ('.inventory_item_name')}
	 get selectSort () { return ('.product_sort_container')}
	 get addLight () { return ('#add-to-cart-sauce-labs-bike-light')}
	 get addJacket () { return ('#add-to-cart-sauce-labs-fleece-jacket')}
	 get sauceOnesie () { return ('#item_2_img_link')}
	 get onesieDetails () {  return ('.inventory_details_name ')}
	 get cartBadge () { return ('.shopping_cart_badge')}




	 Sort(sort){
		   cy.get(this.selectSort).select(sort)
  }

}

export default new Products()