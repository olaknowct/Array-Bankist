# Array-Bankist

Link: https://olaknowct.github.io/Array-Bankist/index.html

###### Dummy Credentials | username: jd PIN: 2222 | username: js PIN: 1111 | username: stw PIN: 3333 | username: ss PIN: 4444

## Description

- Bankist is a banking system alike where you can view balance, show credit/debit history, transfer money and close account

## About

- The Project is used for educational purposes only, its part of the lesson i took from Jonas.
- To make it more exciting, I improved and developed some few features **(See Improvements Made)** that would make the project more interactive and have better user experience.
- As part of my learnings and would benefit me, I've listed down here **(See features section)** all the PSEUDO Code, SUMMARY or Feautures from this Project

### Features, PSEUDO, Summary And Learnings

    • Data is not persisted.
    	○ Login, Transfer, Loan and Closing account Happens without reloading the page
    	○ Once refresh, all data changes from the actions made will also gets restarted
    • Login Feature
    	○ Able to Login different accounts to show different data
    	○ Get Input values and Validate credentials using predefined account
    	○ Update UI if valid credentials
    		§ Shows Movements (Credits/Debits)
    • Transfer Money Feature
    	○ Transfers Money across existing and different accounts
    	○ Get Input Amount and parse it to number as the input is always set to string
    	○ Get Input Receiver and find it from predefined account object
    	○ Validation
    		§ Amount should be greater than 0
    		§ Receiver Should Exist
    		§ Has Enough Balance to transfer
    		§ Receiver is not Sender
    	○ Proceed with transferring only if test cases are satisfied
    		§ Sender gets debited
    		§ Receiver gets credited
    		§ Update user interface
    			□ Update UI Balance
    			□ Update UI Credit/Debit Movements

    • Loan Feature
    	○ Loans amount depends on what's the highest deposited amount
    	○ Get Input Amount and parse it to number as the input is always set to string
    	○ Validation
    		§ Loan Amount is not zero
    		§ Deposited has to be greater than 10 % of Loan Amount
    	○ Proceed with process of loaning if test cases are satisfied
    		§ User Loan Granted and gets credited to account
    		§ Update user interface
    			□ Update UI Balance
    			□ Update UI Credit/Debit Movements

    • Closing Account Feature
    	○ Closing own account
    	○ Get Input username, PIN and validate
    	○ Validation
    		§ Username and PIN should exist on non-persistent array data
    	○ Proceed if Validation passed
    		§ Remove own account from the non-persistent array data
    		§ Hide account info

    • Use International API for Numbers and Dates
    	○ Intl API can help us to determine the format date of a certain locale and helps to format Numbers
    	○ Format Date credited and debited
    	○ Format Amount based on user's locale and currency detail

    • Logout Timer
    	○ Automatically logout user when inactively not using any action
    	○ Logout timer is set to 2mins only
    	○ Logout timer restarts when transfer and loan made.

    • Sets Delay when Transferring and Loaning as if you are using a real Banking system
    	○ Set Time out Function
    	○ Proceed processing and Update UI after predefined seconds

### Improvements Made

    • Refactor Code, Restructure File and create a separated folders
    	○ Update Source Reference
    		§ Script
    		§ Link
    		§ Img
    		§ Href
    	○ Export and import JS files
    		§ Non-persistent data
    		§ All DOM Elements

    • Error Handling if all test cases aren't satisfied
            § Throw Alert message

    • Rendering Loader ICON when Transfer and Loan Happens
    	○ Uses THIS keyword to render loader
    	○ Refactor Regular function to Arrow function to use lexical THIS keyword
    	○ CSS for SVG Animation
