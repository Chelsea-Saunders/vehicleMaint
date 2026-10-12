require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongodb = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

const app = express();
const PORT = process.env.PORT || 3030;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());
app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`Connected to DB and listening on port ${PORT}.`);
        });
    }
});