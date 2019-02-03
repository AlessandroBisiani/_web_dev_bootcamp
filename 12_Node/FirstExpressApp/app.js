var express = require("express");
var app = express();

port = process.env.PORT || 8080;

// "/" message "hi!"
app.get("/", function(req, res) {
	res.send("Hi there!");
});


// "/bye" message "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!");
});

// "/dog" message "MEOW!"
app.get("/dog", function(req, res){
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
	console.log(req.params);
	res.send("Welcome to " + req.params.subredditName);
});



app.get("*", function(req, res){
	res.send("Error, stella.");
});


app.listen(port, process.env.IP, function(){
	console.log("server has started.");
	console.log("Magic happens at " + port);
});
