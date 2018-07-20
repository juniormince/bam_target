//routes here

const router = require('express').Router();
const Product = require('../models/product.schema');

//get products from db
router.get('/', (req, res) => {
    console.log(req.params.id);

    Product.find({})
        .then((dbResults) => {
            res.send(dbResults);
        })
        .catch((error) => {
            console.log('error in find by id', error);
            res.sendStatus(500);
        });
});

//route for updating product


module.exports = router;