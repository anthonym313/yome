# Yome
Yome [*you-owe-me*] is an invoice creation and  management app. With Yome a business/independent contractor can create an account to create invoices,and store client information. Yome is made with Python and React.

[Yome: Live Site](https://yome.herokuapp.com/) 

### Screenshots
#### Splash Page
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-splash-08082021.gif?raw=true)
#### Business Registration Page
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/signup-capture.jpg?raw=true)
#### Invoice Creation
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-new-invoice.gif?raw=true)
#### Invoice Preview and Editing
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-invoice-preview_editor.gif?raw=true)
#### Client Information
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-client-editor.gif?raw=true)
#### Business Information Settings
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/business-settings-capture%20.jpg?raw=true)
### Technical Details
Yome users can create and different items to their invoices during invoice creation.
Items must be created after the Invoice is created in the database so that the item may have the invoices ID to create the association between the two. To achieve this when an invoice POST request is made a list of Item(s) goes with the request. The invoice is created in the database then helper function takes in that list of Item(s) and loops thru to create add each Item in the database with the associated invoice ID.

![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-invoicecreation-api.png?raw=true)
