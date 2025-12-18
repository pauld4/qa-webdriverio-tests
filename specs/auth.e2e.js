const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const users = require('../data/users')

describe('Authentication Flow', () => {
	beforeEach(async () => {
		await LoginPage.open()
	})

	it('log in successfully with valid credentials', async () => {
		await LoginPage.login(
			users.validUser.username,
			users.validUser.password
		)

		let text1 = await SecurePage.successMessage.getText()
		expect(text1).toContain('Admin')

		await SecurePage.logout()
		await expect(LoginPage.loginButton).toBeDisplayed()
	})

	it('login error with invalid credentials', async () => {
		await LoginPage.login(
			users.invalidUser.username,
			users.invalidUser.password
		)

		let text2 = await LoginPage.errorMessage.getText()
		expect(text2).toContain('Invalid username or password')
	})
})
