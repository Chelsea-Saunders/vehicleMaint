const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles');
const { validateVehicle } = require('../middleware/validate.js');

router.get('/', vehicleController.getAllVehicles);
router.get('/:id', vehicleController.getOneVehicle);
router.post('/', validateVehicle, vehicleController.createVehicle);
router.put('/:id', validateVehicle, vehicleController.updateVehicle);
router.delete('/:id', vehicleController.deleteVehicle);

module.exports = router;