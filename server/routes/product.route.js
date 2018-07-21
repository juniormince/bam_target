//routes here

const router = require('express').Router();
const Product = require('../models/product.schema');

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

//get details
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

//route for put
// router.put('/:id', (req, res) => {
//     Product.findByIdAndUpdate(req.body._id, req.body)
//         .then(() => {
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log('error in update query', error);
//             res.sendStatus(500);
//         });
// });

module.exports = router;