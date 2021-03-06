const express       = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    port            = 8080,
    mongoose        = require("mongoose"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    seedDB          = require("./seeds");
// mongoose.connect("mongodb://localhost/cat_app");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();


app.get("/", function(req, res){
    res.render("landing.ejs");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index.ejs", {campgrounds: allCampgrounds});
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new.ejs");
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
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){        
        if(err){
            console.log(err)
        } else {
            console.log(foundCampground);
            res.render("campgrounds/show.ejs", {campground: foundCampground});
        }
    });   
});


// COMMENTS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

app.get("/campgrounds/:id/comments/new", function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new.ejs", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            //create a comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground.id);
                }
            });
        }
    })
    //connect the comment and relevant campground
    //redirect to campground show page
});


app.listen(port, function(){
    console.log("server started");
    console.log("port: " + port);
});