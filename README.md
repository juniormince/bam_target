# myRetail RESTful Service

myRetail is a RESTful service that can retrieve product and price details by ID.

## Getting Started

### Prerequisites

* Node.js
* [Robo3T](https://robomongo.org/) (not required but helpful for managing mongo mock data.)

### Installing

* clone or fork this repository
* run ```npm install```
* start mongo using mongod
* run ```npm start```
* mock data can be found and copied from data.js

## Built With

* [Mongo](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)
* [Express](https://expressjs.com/)
* [AngularJS](https://angularjs.org/)
* [Node.js](https://nodejs.org/en/)

## Functionality Features
[x] Responds to an HTTP GET request at /products/{id} and delivers product data as JSON (where {id} will be a number. \
[x] Performs an HTTP GET to retrieve the product name from an external API. (example product: The Big Lebowski)\
[x] Reads pricing information from a NoSQL data store and combines it with the product id and name from the HTTP request into a single response.\
### BONUS/Stretch: 
[] Accepts an HTTP PUT request at the same path (/products/{id}), containing a JSON request body similar to the GET response, and updates the product’s price in the data store.

