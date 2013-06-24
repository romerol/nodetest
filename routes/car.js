var Car = require('../models/car');

app.get('/cars', getAll);
app.get('/cars/create', createForm);
app.post('/cars/create', create);
app.post('/cars/delete/:carId', remove);
app.get('/cars/edit/:carId', editForm);
app.post('/cars/edit/:carId', edit);

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

function createForm(req, res){
	res.render('create', {
	    title: 'Create a car'
	})
};

function create(req, res){
	var car = req.body;
	Car.create(car, function(err, cars){
		if (err){
		res.send(500, err);
      	return;}
		res.redirect('/cars');
	})
};

function remove(req, res){
	var id = req.params.carId;
	Car.remove(id, function(err, cars){
		if (err){
		res.send(500, err);
	    return;}
		res.redirect('/cars');
	})
};

function editForm(req, res){
	var id = req.params.carId;
	Car.getCar(id, function(err, car){
		if (err){
			res.send(500, err);
	      	return;}
	    console.dir(car);
		res.render('edit', {
		    title: 'Edit a car',
		    brand: car[0].brand,
		    color: car[0].color,
		    _id: car[0]._id
		})	    
	})
};


function edit(req, res){
	var car = req.body;
	var id = req.params.carId;

	Car.edit(id, car, function(err, car){
		if (err){
			res.send(500, err);
	      	return;}
		res.redirect('/cars');    
	})
};