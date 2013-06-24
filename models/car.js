var ObjectID = require('mongodb').ObjectID;
var mongoDbConnection = require('./../lib/connection.js');

exports.getCars = function(done){
	mongoDbConnection(function(databaseConnection) {
	    databaseConnection.collection('cars', function(error, collection) {
	      collection.find().toArray(function(error, docs) {
	        done(error, docs || []);
	      });
	    });
	});
};


exports.create = function(car, done){
	mongoDbConnection(function(databaseConnection) {
	    databaseConnection.collection('cars').insert(car, {safe:true}, function(err, data) {
      		done(err, data);
    	});
	});	
};


exports.remove = function(id, done){
	mongoDbConnection(function(databaseConnection) {
	    databaseConnection.collection('cars').remove({"_id": ObjectID(id)}, function(err, data) {
      		done(err, data);
    	});
	});	
};

exports.getCar = function(id, done){
	mongoDbConnection(function(databaseConnection) {
	    databaseConnection.collection('cars', function(error, collection) {
	      collection.find({"_id": ObjectID(id) }).toArray(function(error, doc) {
	        done(error, doc || []);
	      });
	    });
	});
};

exports.edit = function(id, car, done){
	mongoDbConnection(function(databaseConnection) {
	    databaseConnection.collection('cars').update({"_id": ObjectID(id)}, {$set: {brand: car.brand, color: car.color}}, {safe:true}, function(err, data) {
      		done(err, data);
    	});
	});	
};