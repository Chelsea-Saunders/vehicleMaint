const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles');
const { validateVehicle } = require('../middleware/validate.js');
const { ensureApiAuth } = require('../middleware/auth.js');

router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getOneVehicle);
router.post('/', ensureApiAuth, validateVehicle, vehicleController.createVehicle);
router.put('/:id', ensureApiAuth, validateVehicle, vehicleController.updateVehicle);
router.delete('/:id', ensureApiAuth, vehicleController.deleteVehicle);

module.exports = router;