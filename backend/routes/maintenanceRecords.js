const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceRecords');

router.get('/', maintenanceController.getAll);
router.get('/:id', maintenanceController.getSingle);
router.post('/', maintenanceController.createRecord);
router.put('/:id', maintenanceController.updateRecord);
router.delete('/:id', maintenanceController.deleteRecord);

module.exports = router;