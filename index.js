var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();
var session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(ejsLayouts);
app.use(session({
	secret : 'lkgfhgklgklfsldflksdfasd',
	resave : false,
	saveUninitialized : true
}));


app.get('/', function(req, res) {
	console.log(req.session.animal);
  res.render('index');
});

app.get('/secret', function(req, res) {
	req.session.animal = 'dog';
  res.render('secret');
});

app.use('/auth', require('./controllers/auth'));

app.listen(3000);
