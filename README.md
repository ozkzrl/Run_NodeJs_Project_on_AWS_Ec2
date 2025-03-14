Bookstore

A simple bookstore web application built with Node.js, Express, and EJS. Users can view available books, check book details, and add new books to the collection.

Live Deployment

Technologies Used

Node.js - JavaScript runtime environment

Express.js - Web framework for Node.js

EJS - Embedded JavaScript templating

Body-Parser - Middleware for parsing form data

AWS EC2 - Cloud-based deployment

Features

View a list of books

Check book details

Add new books through a form

Project Structure
bookstore/
├── public/
│   ├── styles.css
├── views/
│   ├── index.ejs
│   ├── book.ejs
│   ├── add-book.ejs
├── server.js
├── package.json
└── README.md

Installation & Setup

1- Clone the repository

git clone https://github.com/ozkzrl/Flask-1-2.git
cd Flask-1-2

2 - Install dependencies

npm install

3-  Start the server

npm start

Deployment on AWS EC2

1- Connect to your EC2 instance

ssh -i your-key.pem ec2-user@your-ec2-ip

2- Install Node.js and npm

sudo yum update -y
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

3- Clone the project and install dependencies
git clone https://github.com/ozkzrl/Flask-1-2.git
cd Flask-1-2
npm install

4- Start the server
node server.js 

The application should now be accessible from your EC2 instance's public IP.
