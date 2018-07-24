//routes here

const router = require('express').Router();
const Product = require('../models/product.schema');
const requestPromise = require('request-promise');

//get from external API ( has to come before /:id )
router.get('/api', (req, res) => {
    //example API
    var tcin = '13860428';
    var urlBase = `http://redsky.target.com/v2/pdp/tcin/${tcin}?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics`;

    requestPromise(urlBase + tcin, (error, response, body) => {
        if (error) {
            console.log('error in /api');
            res.sendStatus(500);
        } else {
            res.send(body);
        }
    });
});

//get from db
router.get('/', (req, res) => {
    Product.find({})
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log('error in find', error);
            res.sendStatus(500);
        });
});

//get details by id
router.get('/:id', (req, res) => {
    Product.find({ id: req.params.id })
        .then((results) => {
            res.send(results);
        })
        .catch((error) => {
            console.log('error in find by id', error);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.body._id, req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error in update query', error);
            res.sendStatus(500);
        });
});


module.exports = router;