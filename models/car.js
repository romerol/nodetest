var ObjectID = require('mongodb').ObjectID;
var mongoDbConnection = require('./../lib/connection.js');

exports.getCars = function(done){
	mongoDbConnection(function(databaseConnection) {
	    databaseConnection.collection('cars', function(error, collection) {
	      collection.find().toArray(function(error, docs) {
	      	console.dir(docs);
	        done(error, docs || []);
	      });
	    });
	});
};