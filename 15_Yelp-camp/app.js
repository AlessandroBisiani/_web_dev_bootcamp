var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    port        = 8080,
    mongoose    = require("mongoose")
// mongoose.connect("mongodb://localhost/cat_app");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



var campgrounds = [
    {name: "Salmon Creek", description: "Slippery fun in a beautiful place.", image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg"},
    {name: "Frank Rivers", description: "Not your greasy uncle. Nature on display: be there or don't." ,image: "https://farm8.staticflickr.com/7041/14080824893_7bc0d6fa5e_b.jpg"},
    {name: "Death Passed", description: "Please let us know.", image: "https://farm4.staticflickr.com/3009/2990567577_1c164eacf6_b.jpg"},
    {name: "Bold Peaks", description: "Named for its twin peaks. They're hard to miss.", image: "https://farm6.staticflickr.com/5558/14609561139_fd284fde88_b.jpg"}
    
];

  
// SCHEMA
var campgroundSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String
});

var Campground = mongoose.model("campground", campgroundSchema);


//ADD sample campgrounds array to db
// for(var i=0 ; i<campgrounds.length ; i++){
//     var name = campgrounds[i].name;
//     var desc = campgrounds[i].description;
//     var image = campgrounds[i].image;
    
//     Campground.create(
//         {
//             name: name,
//             description: desc,
//             image: image
//         }, function(err, campground){
//            if(err){
//                console.log(err);
//            } else {
//                console.log("new campground: ");
//                console.log(campground);
//            }
//         }
//     )
// };


app.get("/", function(req, res){
    res.render("landing.ejs");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index.ejs", {campgrounds: allCampgrounds});
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, description: desc, image: image};
    
    Campground.create(newCampground, function(err, newCground){
        if(err){
            console.log(err);
            res.send(err);
        } else {
            console.log("Following campground added: ");
            console.log(newCground);
            res.redirect("/campgrounds");
        }
    });
});

//SHOW ROUTE
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){        
        if(err){
            console.log(err)
        } else {
            res.render("show.ejs", {campground: foundCampground});
        }
    });    
});

app.listen(port, function(){
    console.log("server started");
    console.log("port: " + port);
});