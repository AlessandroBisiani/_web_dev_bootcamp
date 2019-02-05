var express = require('express');
var app = express();
var request = require('request');

var port = 8080;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('search.ejs');
});

app.get('/results', function(req, res){
    var searchQuery = req.query.search;
    var url = 'http://omdbapi.com/?s=' + searchQuery + '&apikey=thewdb';
    
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render('results.ejs', {data: data});
        }       
    });
});


app.listen(port, function(req, res){
    console.log('Server started.');
    console.log('Magic happens at: ' + port);
});