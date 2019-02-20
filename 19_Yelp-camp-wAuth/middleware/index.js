let     middlewareObj   = {}
        Campground      = require("../models/campground"),
        Comment      = require("../models/comment");


//Ownership verification middleware
middlewareObj.checkOwnership = function(req, res, next){
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

//Comment ownership verification middleware
middlewareObj.checkCommentOwnership = function checkCommentOwnership(req, res, next){
    if(req.isAuthenticated()){        
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back");
            } else {
                //Does user own comment?
                if(foundComment.author.id.equals(req.user._id)){
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

//Logged in versification middleware
middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = middlewareObj;