class Authentication{


	 get userNameField() { return ('#user-name') }
   get passwordField() { return ('#password') }
	 get loginBtn() { return  ('#login-button') }

	 get pageHeader () { return ('.title')}
	 get errorMsg () { return ('.error-message-container') }



	 login(username, password){
		    cy.get(this.userNameField).type(username)
				cy.get(this.passwordField).type(password)
				cy.get(this.loginBtn).click()

	}

}
export default new Authentication()