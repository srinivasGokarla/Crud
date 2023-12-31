# BrewApps assignment

## Introduction
  A RESTful API built with Node.js and MongoDB allows users to manage a collection of books.

## Demo Video
[Video Link](https://drive.google.com/file/d/1CL9vYr9TRoFXa0O4EMncGBw0zw5Kj8is/view?usp=sharing)
## Features
The key features of application.

- Add a new book (title, author, summary)
- View a list of all books
- View details of a specific book by its ID
- Update a book's details
- Delete a book
- Validation and error handling for API requests

## Deployed link
[link](https://crud-books-1e9b.onrender.com/)

## Installation or How to run the app
I created cloud database using MongoDb Atlas. So, if you want to run our code then please read the instructions below :
- Clone our repository [https://github.com/srinivasGokarla/Crud.git](https://github.com/srinivasGokarla/Crud.git)
- Open the code in your VS code
- Now run npm install or npm i which will install all the required packages of node
- After installation, now run npm run server or node server and you will see server is listening on 5050 
- Open MongoDb atlas and replace url with `your mongodb atlas url` which will create database collection named CrudBooks
- Now you see app running, you can create tasks using postman app and test apis.

## API Endpoints and Usage

- POST /books: Create a new book
  - Request Body: { "title": "string", "author": "string", "summary": "string" }

- GET /books: Get all books

- GET /books/:id: Get a specific book by its ID

- PUT /books/:id: Update a book's details
  - Request Body: { "title": "string", "author": "string", "summary": "string" }

- DELETE /books/:id: Delete a book

Note :  You can test or manage the books library using this deployed url `https://crud-books-1e9b.onrender.com/` and add end points for different crud operations in postman app.
  
## Technology Stack
List and provide a brief overview of the technologies used in the project.

- MongoDB
- Express JS
- Node JS
 
 ### Dependencies and packages

#### Backend
- express-validator <br/>
   used for validation
- mongoose<br/>
  connecting MongoDB to the Node js server

#### Cloud Deployment

- Render
used render for deploying the MongoDb (database) and node js (Backend)