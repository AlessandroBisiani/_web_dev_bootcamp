var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
// Include public folder
app.use(express.static("public"));
// Expect ejs files
app.set("viewengine", "ejs");

var port = 8080;
var friends = ["Tony", "Alex", "Emil", "Maxi"]
var posts = [
		{title: "post1", author: "she"},
		{title: "post2", author: "you"},
		{title: "post3", author: "me"}
	];

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love.ejs", {loveThing: thing});
});

app.get("/posts", function(req, res){
	res.render("posts.ejs", {posts: posts})
});

app.get("/friends", function(req, res){
	res.render("friends.ejs", {friends: friends});
});

app.post("/addfriend", function(req, res){
	var newFirend = req.body.newfriend;
	friends.push(newFirend);
	res.redirect("/friends");
});


app.listen(port, function(){
	console.log("Server started.");
	console.log("The magic happens at: " + port);
});