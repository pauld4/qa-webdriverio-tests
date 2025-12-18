# qa-webdriverio-tests
WebDriverIO is a JavaScript framework, similar to Playwright, that uses Mocha and JavaScript to test web pages and mobile apps. 

"login.e2e.js" This file can be run using "npx wdio run ./wdio.conf.js --spec login.e2e.js" in command prompt. It will check that the home page on Google.com has a title element containing the text "Google".

The following is a list of files that can be used to test the login on my GitHubIO login page, pauld4.github.io/login.html. Be sure to change the baseURL to this URL in your wdio.conf.js file.
"data/users.js" contains list of user accounts to test on a login page. Contains 1 valid and 1 invalid login.
"pageobjects/login.page.js" LoginPage object that gets the login input fields, login button, and error message elements.
"pageobjects/page.js" Page object that opens a URL. LoginPage and SecurePage extend from here.
"pageobjects/secure.page.js" SecurePage object that gets the success message and log out button once a user is successfully logged in.
"specs/auth.e2e.js" The main file that combines the pageobjects and data to first test a successful login attempt, and then a failed login attempt.

More information here:
https://webdriver.io/docs/gettingstarted
