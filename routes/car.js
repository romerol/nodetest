var Car = require('../models/car');

app.get('/cars', getAll);

function getAll(req, res){

	Car.getCars(function(err, cars){
	    if (err){
	      res.send(500, err);
	      return;
	    }

		res.render('index', {
		    title: 'All the cars',
		    cars: cars
		  })
  });
};

/*
exports.getAll = function(req, res){

	Car.getCars(function(err, cars){
	    if (err){
	      res.send(500, err);
	      return;
	    }

		res.render('index', {
		    title: 'All the cars',
		    cars: cars
		  })
  });
}
*/