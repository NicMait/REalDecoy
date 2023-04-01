### RealDecoy QA Programming Challenge
(Repository:'https://github.com/NicMait/RealDecoy')

These scripts cover the test automation of areas of the website "https://www.saucedemo.com/".
The framework being used is Cypress.

# Areas Tested
1. Login
2. Cart
3. Inventory
4. Footer Links
5. Logout


### Dependencies
1. NodeJS v12, v14 or above
2. NPM v6 or above
3. Chrome browser
4. cypress v12
5. cypress i-frame
6. mocha reporter



# Installation
1. To install node please visit  https://nodejs.org/en/ or check the version using node --v
2. Clone the repository in code editor terminal: git clone https://github.com/NicMait/RealDecoy
3. With your terminal pointing to the root of the project run npm i to install all project dependencies

# Folder Structure
- **cypress/e2e/pages:**  Page object files that include element selectors and functions that are used in tests.
- **cypress/e2e/tests:**  Test files that include the actual tests.
- **cypress/e2e/data:**   Data files that include the data used in tests.

## Test Execution

Execute tests in the Cypress GUI

```npx cypress open```

Execute tests in the Cypress via commandline

```npx cypress run```

Executes all tests in the Chrome browser and generates a Mochawesome report.

```npm test```

# Execute Specific Tests

 "login":
```npx cypress run --spec cypress/e2e/tests/login.cy.js```

"inventory":
```npx cypress run --spec cypress/e2e/tests/inventory.cy.js```

"cart":
```npx cypress run --spec cypress/e2e/tests/cart.cy.js```

 "footerlinks":
```npx cypress run --spec cypress/e2e/tests/footerlinks.cy.js```

 "logout":
```npx cypress run --spec cypress/e2e/tests/logout.cy.js```

# Reporting

Without Reports

```npx cypress run --spec cypress/e2e/tests/login.cy.js```

With Reports

```npm run test:spec cypress/e2e/tests/login.cy.js```

To manually view the html report files, in your file explorer, navigate to the project folder then to cypress, then navigate to reports. Double click on the html file and the file will be opened in the browser.


NB: The first two footer tests that are commented out should be run individually in the terminal. When they are executed with the rest of the test suite an error is thrown which prevents the other scenarios from being executed.
