class Products{

   get productPrice() { return ('.inventory_item_price') }
	 get productName () { return ('.inventory_item_name')}
	 get selectSort () { return ('.product_sort_container')}
	 get addBtn () { return ('#add-to-cart-sauce-labs-bike-light')}
	 get cartBadge () { return ('.shopping_cart_badge')}
	 get sauceOnesie () { return ('#item_2_img_link')}
	 get onesieDetails () {  return ('.inventory_details_name ')}



	 Sort(sort){
		   cy.get(this.selectSort).select(sort)
  }

}

export default new Products()