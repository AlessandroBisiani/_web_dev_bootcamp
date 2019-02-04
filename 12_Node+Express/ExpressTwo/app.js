var express = require("express");
var app = express();

port = process.env.PORT || 8080;


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "'Oink'",
        cow: "'Moo'",
        dog: "'Woof Woof!'"
    }
    var sound = sounds[animal];

    res.send("The " + animal + " says " + sound);
});

// app.get("/speak/:animal", function(req, res){
//     var animal = req.params.animal;
//     var sound = "Pardon?";
    
//     if(animal.toUpperCase() === "PIG"){
//         sound = "'Oink'";
//     } else if (animal.toUpperCase() === "COW"){
//         sound = "'Moo'";
//     } else if(animal.toUpperCase() === "DOG"){
//         sound = "'Woof Woof!'";
//     }

//     res.send("The " + animal + " says " + sound);
// });


app.get("/repeat/:text/:number", function(req, res){
    var proclamation = "";
    var times = parseInt(req.params.number);
    var text = req.params.text.trim() + " ";
    
    for(var i=0 ; i < times ; i++){
        proclamation += text;
    }
    res.send(proclamation.trim());
});


app.get("*", function(req, res){
    console.log(req.params);
    res.send("Sorry, page not found.. recalibrating your life choices.");
});


app.listen(port, process.env.IP, function(){
    console.log("Server has started.");
    console.log("Magic happens at: " + port);
});