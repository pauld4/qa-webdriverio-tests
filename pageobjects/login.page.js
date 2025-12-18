const Page = require('./page')

class LoginPage extends Page {
	get usernameInput() { return $('#user_name') }
	get passwordInput() { return $('#user_pass') }
	get loginButton() { return $('#button_submit') }
	get errorMessage() { return $('#error_message') }

	async login(username, password) {
		await this.usernameInput.waitForDisplayed()
		await this.usernameInput.setValue(username)
		await this.passwordInput.setValue(password)
		await this.loginButton.click()
	}

	open() {
		return super.open('/login.html')
	}
}

module.exports = new LoginPage()