let     express         = require("express"),
        router          = express.Router(),
        Campground      = require("../models/campground.js");
        


//INDEX Route
router.get("/", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index.ejs", {campgrounds: allCampgrounds});
        }
    });
});

//NEW Route
router.get("/new", isLoggedIn, function(req, res){
    res.render("campgrounds/new.ejs");
});

//Campground CREATE Route
router.post("/", isLoggedIn, function(req, res){
    let name            = req.body.name,
        image            = req.body.image,
        desc            = req.body.description,
        author          = req.user,
        newCampground   = {name: name, description: desc, image: image, author: {id: author.id, username: author.username}};
    
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

//SHOW Route
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){        
        if(err){
            console.log(err)
        } else {
            console.log(foundCampground);
            res.render("campgrounds/show.ejs", {campground: foundCampground});
        }
    });   
});


//EDIT Campground Route
router.get("/:id/edit", checkOwnership, function(req, res){
    //User logged in? if so, do they own the entry? Else redirect
         
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit.ejs", {campground: foundCampground});  
    }); 
});

//UPDATE Campground Route
router.put("/:id", checkOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updateCampground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id)
        }
    });
});

//DESTROY Campground Route
router.delete("/:id", checkOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }
            res.redirect("/campgrounds");
    });
});


//Logged in versification middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

//Ownership verification middleware
function checkOwnership(req, res, next){
    if(req.isAuthenticated()){        
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                res.redirect("back");
            } else {
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                } else {
                    res.redirect("back");
                }
            }
        }); 
    } else {
        res.redirect("back");
    }
}

module.exports = router;