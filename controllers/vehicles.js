// const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
const vehicleModel = require('../models/vehicle.js');

// const getCollection = () => {
//     return mongodb.getDb().collection('vehicles');
// };

// GET all vehicles
const getAllVehicles = async (req, res) => {
    try {
        const result = await vehicleModel.findAllVehicles();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET single vehicle by id
const getOneVehicle = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid vehicle id' });
        }

        const vehicleId = new ObjectId(req.params.id);
        const result = await vehicleModel.findVehicleById(vehicleId)

        if (!result) {
            return res.status(404).json('Vehicle not found');
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// POST (create vehicle)
const createVehicle = async (req, res) => {
    try {
        console.log('createVehicle called', req.body);
        const vehicle = {
            title: req.body.title,
            brand: req.body.brand,
            vin: req.body.vin,
            color: req.body.color,
            year: req.body.year,
            mileage: req.body.mileage
        };

        const response = await vehicleModel.insertVehicle(vehicle);
        if (response.insertedId) {
            res.status(201).json(response);
        } else { 
            res.status(404).json('Some error occured while creating this vehicle.');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
};

// PUT (update vehicle)
const updateVehicle = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid vehicle id' });
        }
        const vehicle = {
            title: req.body.title,
            brand: req.body.brand,
            vin: req.body.vin,
            color: req.body.color,
            year: req.body.year,
            mileage: req.body.mileage
        };

        const response = await vehicleModel.replaceVehicle(req.params.id, vehicle);
        if (response.matchedCount === 0) {
            return res.status(404).json({ message: 'Vehicle not found.' });
        } 
        if (response.modifiedCount === 0) {
            return res.status(200).json({ message: 'Vehicle found, but no changes were made.' });
        }

        return res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE vehicle
const deleteVehicle = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid vehicle id.' });
        }
        const response = await vehicleModel.removeVehicle(req.params.id);
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json('Some error occured while deleting this vehicle.');
        }
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};


module.exports = {
    getAllVehicles,
    getOneVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle
};