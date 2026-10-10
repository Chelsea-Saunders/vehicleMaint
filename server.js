require('dotenv').config();

const express = require('express');
const mongodb = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on port ${PORT}.`);
        });
    }
});