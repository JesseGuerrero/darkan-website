let MongoClient = require('mongodb').MongoClient;
let URL = "mongodb://localhost:27017/";

async function getFirstDoc(collection_name) {
    let client = await MongoClient.connect(URL)
    const db = client.db("darkan-server")
    let coll = db.collection(collection_name)
    let doc = await coll.findOne({})
    return doc
}

async function getMongoDocs(collection_name, filterJSON) {
    let client = await MongoClient.connect(URL)
    const db = client.db("darkan-server")
    let coll = db.collection(collection_name)
    let doc = await coll.find(filterJSON).toArray()
    return doc
}

async function isMongoDocExists(collection_name, filterJSON) {
    let client = await MongoClient.connect(URL)
    const db = client.db("darkan-server")
    let coll = db.collection(collection_name)
    let doc = await coll.findOne(filterJSON)
    return doc != null
}

module.exports.getFirstDoc = getFirstDoc;
module.exports.getMongoDocs = getMongoDocs;
module.exports.isMongoDocExists = isMongoDocExists;
