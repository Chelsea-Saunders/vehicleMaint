const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceRecords');
const { ensureApiAuth } = require('../middleware/auth');

router.get('/', maintenanceController.getAllRecords);
router.get('/:id', maintenanceController.getOneRecord);
router.post('/', ensureApiAuth, maintenanceController.createRecord);
router.put('/:id', ensureApiAuth, maintenanceController.updateRecord);
router.delete('/:id', ensureApiAuth, maintenanceController.deleteRecord);

module.exports = router;