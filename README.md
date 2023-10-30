# BrewApps assignment

## Introduction
  A RESTful API built with Node.js and MongoDB allows users to manage a collection of books.

## Demo Video
[Video Link]()
## Features
The key features of application.

- Add a new book (title, author, summary)
- View a list of all books
- View details of a specific book by its ID
- Update a book's details
- Delete a book
- Validation and error handling for API requests

## Deployed link
[link]()

## Installation or How to run the app
I created cloud database using MongoDb Atlas. So, if you want to run our code then please read the instructions below :
- Clone our repository `[https://github.com/srinivasGokarla/Crud.git](https://github.com/srinivasGokarla/Crud.git)`
- Open the code in your VS code
- Now run `npm install` or `npm i` which will install all the required packages of node
- After installation, now run `npm run server` or `node server` and you will see `server is listening on 5050` 
- Open MongoDb atlas and url `url here` which will create database collection named CrudBooks
- Now you see app running, you can create tasks using `postman` app and test apis.

## API Endpoints and Usage

- `POST /books`: Create a new book
  - Request Body: { "title": "string", "author": "string", "summary": "string" }

- `GET /books`: Get all books

- `GET /books/:id`: Get a specific book by its ID

- `PUT /books/:id`: Update a book's details
  - Request Body: { "title": "string", "author": "string", "summary": "string" }

- `DELETE /books/:id`: Delete a book
  
## Technology Stack
List and provide a brief overview of the technologies used in the project.

- MongoDB
- Express JS
- Node JS
 
 ### Dependencies and packages

#### Backend
- `express-validator` <br/>
   used for validation
- `mongoose`<br/>
  connecting MongoDB to the Node js server

#### Cloud Deployment

- `Render`
used render for deploying the MongoDb (database) and node js (Backend) 

 
 
