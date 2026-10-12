// const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');
const recordModel = require('../models/maintenanceRecord');

// const getCollection = () => {
//     return mongodb.getDb().collection('maintenanceRecords');
// };

// GET all maintenance records
const getAllRecords = async (req, res) => {
    try {
        const result = await recordModel.findAllRecords();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET single maintenance record
const getOneRecord = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json('Must use valid vehicle vin to find a vehicle');
        }

        const recordId = new ObjectId(req.params.id);
        const result = await recordModel.findRecordById(recordId);

        if (!result) {
            return res.status(404).json('Record not found');
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// POST (create new record)
const createRecord = async (req, res) => {
    try {
        const record = {
            vin: req.body.vin,
            oil_change: req.body.oil_change, 
            tire_pressure: req.body.tire_pressure,
            tire_rotation: req.body.tire_rotation,
            tranny_flush: req.body.tranny_flush,
            sparkplugs: req.body.sparkplugs,
            coolant: req.body.coolant,
            wiper_fluid: req.body.wiper_fluid,
            light_check: req.body.light_check,
            air_filter: req.body.air_filter,
            fuel_filter: req.body.fuel_filter,
            brakes: req.body.brakes,
            belts_hoses: req.body.belts_hoses,
            steering_suspension: req.body.steering_suspension,
            exhaust: req.body.exhaust
        };

        const response = await recordModel.insertRecord(record);
        if (response.insertedId) {
            res.status(201).json(response);
        } else { 
            res.status(500).json('Some error occured while creating this record.');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// PUT (update a record)
const updateRecord = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json('Must have a valid record id.');
        }
        const record = {
            vin: req.body.vin,
            oil_change: req.body.oil_change, 
            tire_pressure: req.body.tire_pressure,
            tire_rotation: req.body.tire_rotation,
            tranny_flush: req.body.tranny_flush,
            sparkplugs: req.body.sparkplugs,
            coolant: req.body.coolant,
            wiper_fluid: req.body.wiper_fluid,
            light_check: req.body.light_check,
            air_filter: req.body.air_filter,
            fuel_filter: req.body.fuel_filter,
            brakes: req.body.brakes,
            belts_hoses: req.body.belts_hoses,
            steering_suspension: req.body.steering_suspension,
            exhaust: req.body.exhaust
        };

        const response = await recordModel.replaceRecord(req.params.id, record);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json('Some error occured while updating the record.');
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE a record
const deleteRecord = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json('Must use a valid record id to delete a record.');
        }
        const response = await recordModel.removeRecord(req.params.id);
        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json('Some error occured while deleting this record.');
        }
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

module.exports = {
    getAllRecords, 
    getOneRecord, 
    createRecord,
    updateRecord,
    deleteRecord
};