var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' })); //Reference to views/layouts/main.handlebars
app.set('view engine', 'handlebars');

var icecreams = [
	{name: 'vanilla', price: 10, awesomeness: 3},
	{name: 'chocolate', price: 4, awesomeness: 8},
	{name: 'banana', price: 1, awesomeness: 1},
	{name: 'greentea', price: 5, awesomeness: 7},
	{name: 'jawbreakers', price: 6, awesomeness: 2},
];

app.get('/icecream/:name', function (req, res) {
	var iceName = req.params.name.toLowerCase();
	for (var i = 0; i < icecreams.length; i++) {
		if (iceName === icecreams[i].name) {
			res.render('index', icecreams[i]);
			return;
		}
	}
});

app.get('/icecreams', function (req, res) {
	res.render('AllIceCreams',{
		flavors: icecreams
	});
});

var port = 3000;
app.listen(port);