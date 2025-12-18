const Page = require('./page')

class SecurePage extends Page {
	get successMessage() { return $('#user_name') }
	get logoutButton() { return $('#button_logout') }

	async logout() {
		await this.logoutButton.waitForClickable()
		this.logoutButton.click()
	}
}

module.exports = new SecurePage()