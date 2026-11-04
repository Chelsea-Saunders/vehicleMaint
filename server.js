require('dotenv').config();

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const passport = require('passport');
const swaggerui = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const cors = require('cors');
const connectMongoose = require('./db/mongoose');

const mongodb = require('./db/connect');

require('./config/passport')(passport);

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        })
    })
);

app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerDocument));

app.use(passport.initialize());
app.use(passport.session());

// api routes for vehicles/maint
app.use('/vehicles', require('./routes/vehicles'));
app.use('/maintenanceRecords', require('./routes/maintenanceRecords'));

app.use('/', require('./routes'));
app.use('/auth', require('./routes/auth'));

mongodb.initDb(async (err) => {
    if(err) {
        console.log(err);
    } else {
        await connectMongoose();
        app.listen(PORT, () => {
            console.log(`Connected to DB and listening on port ${PORT}.`);
        });
    }
});