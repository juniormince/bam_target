//creates library
use myRetail;

//creates collection
db.createCollection('products');


var products = db.products

products.insert({
    id:15117729,
    name:"Logan",
    current_price: {
        value: 19.99,
        currency_code: "USD",
    }
});

products.insert({
    id: 16483589,
    name: "Blade Runner",
    current_price: {
        value: 11.99,
        currency_code: "USD",
    }
});

products.insert({
    id:16696652,
    name: "Kung Fu Hustle",
    current_price: {
        value: 9.99,
        currency_code: "USD",
    }
});

products.insert({
    id: 53151605,
    name: "Blade Runner 2049",
    current_price: {
        value: 24.99,
        currency_code: "USD",
    }
});

products.insert({
    id: 13860428,
    name: "The Big Lebowski",
    current_price: {
        value: 14.99,
        currency_code: "USD",
    }
});