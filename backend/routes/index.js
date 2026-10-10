const express = require('express');
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

router.get('/', (req, res) => {
    res.send('Vehicle maintenance API is running.');
});

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use('/maintenanceRecords', require('./maintenanceRecords'));
router.use('/vehicles', require('./vehicles'));

module.exports = router;