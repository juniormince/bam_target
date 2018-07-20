const express = require('express');
const app = express();
require('./modules/db-connection');

const bodyParser = require('body-parser');

//router connection
const productRouter = require('./routes/product.route'); 

const PORT = process.env.PORT || 5000;


app.use(express.static('server/public'));
app.use(bodyParser.json());

//route client connect
app.use('/products', productRouter);


app.listen(PORT, () =>  {
    console.log(`thanks for listening to PORT ${PORT}`);
});