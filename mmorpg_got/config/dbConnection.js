var MongoClient = require('mongodb').MongoClient;

module.exports.collection = function (collection, callback) {
    var dbName = 'got';
    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function (error, client) {
        client.db(dbName).collection(collection, callback);
        client.close();
    });
};