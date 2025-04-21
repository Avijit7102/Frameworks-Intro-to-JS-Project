### Banking Dashboard Web App

# Overview:

This is a simple web-based banking dashboard that allows users to log in securely and manage transactions for their checking and savings accounts. The dashboard provides a summary of account balances and a detailed transaction history.

## Features

✅ Login authentication using sessionStorage to protect dashboard access

✅ Add deposits and withdrawals for either checking or savings account

✅ Dynamic account summary that updates balance in real-time

✅ Transaction history table with date, description, type, amount, balance, and account

✅ Input validation with alerts for:

* Missing fields

* Invalid amounts

* Insufficient balance

### Authentication Logic

* The login page (index.html) contains a form with email and password inputs.

* On submission, the form is validated using auth.js:

✅ Email Validation:
* Checks if the email input is in a valid format using a regular expression

* Must include @ and a domain like .com, .net, etc.

* Example of valid input: user@example.com

* If invalid, the user receives an alert and is not allowed to proceed

* Ensures email contains @, domain, and no spaces

* Example of valid emails:

* user@example.com

* john.doe@domain.co

✅ Password Validation:

* Ensures the password field is not empty

## Password must include:
* At least 8 characters, maximum 20

* At least one uppercase letter

* At least one lowercase letter

* At least one number

* At least one special character (e.g., !@#$%^&*)


## Tech Stack

* HTML5

* CSS3 + Bootstrap (for responsive UI)

* JavaScript (Vanilla)

## Author
Avijit Das