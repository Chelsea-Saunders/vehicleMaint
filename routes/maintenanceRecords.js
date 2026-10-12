const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceRecords');

router.get('/', maintenanceController.getAllRecords);
router.get('/:id', maintenanceController.getOneRecord);
router.post('/', maintenanceController.createRecord);
router.put('/:id', maintenanceController.updateRecord);
router.delete('/:id', maintenanceController.deleteRecord);

module.exports = router;