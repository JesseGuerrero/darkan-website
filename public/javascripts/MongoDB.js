let MongoClient = require('mongodb').MongoClient;
let URL = "mongodb://localhost:27017/";

async function getFirstDoc(collection_name) {
    let client = await MongoClient.connect(URL)
    const db = client.db("Unity")
    let coll = db.collection(collection_name)
    let doc = await coll.findOne({})
    return doc
}

async function getMongoDoc(collection_name, filterJSON) {
    let client = await MongoClient.connect(URL)
    const db = client.db("Unity")
    let coll = db.collection(collection_name)
    let doc = await coll.findOne(filterJSON)
    return doc
}

async function isMongoDocExists(collection_name, filterJSON) {
    let client = await MongoClient.connect(URL)
    const db = client.db("Unity")
    let coll = db.collection(collection_name)
    let doc = await coll.findOne(filterJSON)
    return doc != null
}

/**
 * Returns true if successful
 * @param db_name
 * @param collection_name
 * @param jsonObj
 * @param callback
 * @returns {Promise<boolean>}
 */
async function insertMongoDoc(collection_name, jsonObj) {
    let client = await MongoClient.connect(URL)
    const db = client.db("Unity")
    let coll = db.collection(collection_name)
    await coll.insertOne(jsonObj)
}

async function updateOneMongoDoc(collection_name, filter, changes) {
    let client = await MongoClient.connect(URL)
    const db = client.db("Unity")
    let coll = db.collection(collection_name)
    await coll.updateOne(filter, {$set: changes})
}

async function replaceMongoDoc(collection_name, filterJSON, replacementJSON) {
    let client = await MongoClient.connect(URL)
    const db = client.db("Unity")
    let coll = db.collection(collection_name)
    await coll.replaceOne(filterJSON, replacementJSON)
}

module.exports.getFirstDoc = getFirstDoc;
module.exports.getMongoDoc = getMongoDoc;
module.exports.isMongoDocExists = isMongoDocExists;
module.exports.insertMongoDoc = insertMongoDoc;
module.exports.updateOneMongoDoc = updateOneMongoDoc;
module.exports.replaceMongoDoc = replaceMongoDoc;


