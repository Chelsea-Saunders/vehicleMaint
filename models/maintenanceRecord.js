const { ObjectId } = require('mongodb');
const { getDb } = require('../db/connect');

const col = () => getDb().collection('maintenanceRecords');

const findAllRecords = () => col().find().toArray();
const findRecordById = (id) => col().findOne({ _id: new ObjectId(id) });
const insertRecord = (record) => col().insertOne(record);
const replaceRecord = (id, record) => col().replaceOne({ _id: new ObjectId(id)}, record );
const removeRecord = (id) => col().deleteOne({ _id: new ObjectId(id)});

module.exports = {
    findAllRecords,
    findRecordById,
    insertRecord,
    replaceRecord,
    removeRecord
}