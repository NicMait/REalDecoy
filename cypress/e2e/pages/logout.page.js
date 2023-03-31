class Logout{

	get logoutBtn() { return ('#logout_sidebar_link')}
	get menuIcon() { return ('#react-burger-menu-btn')}


	logout() {
		cy.get(this.menuIcon).click()
		cy.get(this.logoutBtn).click()
	}
}

export default new Logout()