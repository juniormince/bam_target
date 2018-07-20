//the mongo connection

const mongoose = require('mongoose');

const databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/myRetail';
mongoose.connect(databaseUrl, { useNewUrlParser: true });
//useNewUrlParser passed in because of deprecation warning

mongoose.connection.on('connected', () => {
    console.log('connected to mongo on', databaseUrl);
});

mongoose.connection.on('error', (error) => {
    console.log('error connecting to database', error);
});