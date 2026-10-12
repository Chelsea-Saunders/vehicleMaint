const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect.js');

const col = () => getDb().collection('vehicles');

const findAllVehicles = () => col().find().toArray();
const findVehicleById = (id) => col().findOne({ _id: new ObjectId(id) });
const insertVehicle = (vehicle) => col().insertOne(vehicle);
const replaceVehicle = (id, vehicle) => col().replaceOne({ _id: new ObjectId(id) }, vehicle);
const removeVehicle = (id) => col().deleteOne({ _id: new ObjectId(id) });

module.exports = {
    findAllVehicles, 
    findVehicleById,
    insertVehicle, 
    replaceVehicle,
    removeVehicle
};