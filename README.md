# Array-Bankist

Link: https://olaknowct.github.io/Array-Bankist/index.html

###### Sample Credentials | username: jd PIN: 2222

## About

- Bankist is a banking system alike where you can view balance, show credit/debit history, transfer money and close account

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

    • SORT Movements Feature
    	○ Toggles sorting of movements (credit/debit) from highest to lowest (vise versa)

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
            § Throw Alert message for a better UX
