var express = require('express')
, cons = require('consolidate');

app = express();

app.engine('html', cons.mustache);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

require('./routes/car');

app.listen(3000);
console.log('Listening on port 3000');
