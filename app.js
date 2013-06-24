var express = require('express');
var app = express();
var mongodb = require('mongodb');

var server = new mongodb.Server("127.0.0.1", 27017, {});
var dbtest = new mongodb.Db('test', server, {});

dbtest.open(function (error, client) {
  if (error) throw error;
  var collection = new mongodb.Collection(client, 'cars');
   
  collection.find({'brand': 'bmt'}).toArray(function(err, docs) {
    console.dir(docs);
  });
});

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');
