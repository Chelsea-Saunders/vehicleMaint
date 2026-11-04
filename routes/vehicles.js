const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles');
const { validateVehicle } = require('../middleware/validate.js');
const { ensureApiAuth } = require('../middleware/auth.js');

router.get('/', ensureApiAuth, vehicleController.getAllVehicles);
router.get('/:id', ensureApiAuth, vehicleController.getOneVehicle);
router.post('/', ensureApiAuth, validateVehicle, vehicleController.createVehicle);
router.put('/:id', ensureApiAuth, validateVehicle, vehicleController.updateVehicle);
router.delete('/:id', ensureApiAuth, vehicleController.deleteVehicle);

module.exports = router;