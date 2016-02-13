var express = require('express');
var app = express();
var fs = require('fs');

var bunyan = require('bunyan');
var log = bunyan.createLogger({
	name : 'Pancho UI'
});

var PORT = 8585;

//UI source: https://www.airpair.com/angularjs/building-angularjs-app-tutorial

app.use(express.static(__dirname));

app.get('/index.html', function(req, res) {
	res.redirect('/');
});

app.listen(PORT);

log.info("<< Porter Server >>");
log.info("Running on Port " + PORT);
