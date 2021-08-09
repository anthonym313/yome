<p align="center">
  <img src="https://github.com/anthonym313/yome/blob/main/react-app/src/images/logo.png?raw=true" alt="Yome Logo">
</p>

# Yome

Yome [*you-owe-me*] is an invoice creation and  management app. With Yome a business/independent contractor can create an account to create invoices,and store client information. Yome is made with Python and React. <br></br>

![image](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)![image](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)![image](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)![image](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)![image](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)


### 💻 [Yome: Live Site](https://yome.herokuapp.com/) 

## 📸 Screenshots
#### Splash Page
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-splash-08082021.gif?raw=true)
#### Business Registration Page
<img src="https://github.com/anthonym313/yome/blob/main/feature/gifs/signup-capture.jpg?raw=true" width="500">

#### Invoice Creation
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-new-invoice.gif?raw=true)
#### Invoice Preview and Editing
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-invoice-preview_editor.gif?raw=true)
#### Client Information
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-client-editor.gif?raw=true)
#### Business Information Settings
![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/business-settings-capture%20.jpg?raw=true)
<h3>🔋 Technical Details</h3>
Yome users can create and different items to their invoices during invoice creation.
Items must be created after the Invoice is created in the database so that the item may have the invoices ID to create the association between the two. To achieve this when an invoice POST request is made a list of Item(s) goes with the request. The invoice is created in the database then helper function takes in that list of Item(s) and loops thru to create add each Item in the database with the associated invoice ID.
<br></br>

![image](https://github.com/anthonym313/yome/blob/main/feature/gifs/yome-invoicecreation-api.png?raw=true)

## 🎮 Features
* Account Creation and Updating
* Add, Edit and Delete Invoices
* Add, Edit and Delete Clients/Customers
## 🔮 Future Features
* Downloadable Invoices
* Invoice Flltering By Payment Status
* Sorting of Clients alphabetically
* Payment tracking and updating
* Reports (YTD Gross Revenue)

## 👨🏿‍💻 Technologies Used
* React
* Javascript
* Redux
* Python
* Flask
* SqlAlchemy
* PostgreSQL
* WTForms
* Docker
* Heroku

## [📖 Wiki](https://github.com/anthonym313/yome/wiki)
1. [📄 Feature List](https://github.com/anthonym313/yome/wiki/Feature-List)
2. [📄  User Stories](https://github.com/anthonym313/yome/wiki/User-Stories)
3. [📄  Design Wireframes](https://github.com/anthonym313/yome/wiki/WireFrame)
4. [📄  Database Schema](https://github.com/anthonym313/yome/wiki/Database-Schema)
5. [📄  Frontend Routes](https://github.com/anthonym313/yome/wiki/Frontend-Routes)

