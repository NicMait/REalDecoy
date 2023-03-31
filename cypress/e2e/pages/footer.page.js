class Footer {


	get twitterLink () { return('a[href="https://twitter.com/saucelabs"]')}
	get facebookLink () { return ('a[href="https://www.facebook.com/saucelabs"]')}
	get linkedLink () { return ('.social_linkedin')}



	ConfirmFooter(){
		cy.get('.footer').scrollIntoView()
		cy.get(this.twitterLink).should('be.visible')
		cy.get(this.facebookLink).should('be.visible')
		cy.get(this.linkedLink).should('be.visible')
	}
}

export default new Footer