var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Salmon Creek", 
        description: "Slippery fun in a beautiful place.", 
        image: "https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg"
    },
    {
        name: "Frank Rivers", 
        description: "Not your greasy uncle. Nature on display: be there or don't." ,
        image: "https://farm8.staticflickr.com/7041/14080824893_7bc0d6fa5e_b.jpg"
    },
    {
        name: "Death Passed", 
        description: "Please let us know.",
        image: "https://farm4.staticflickr.com/3009/2990567577_1c164eacf6_b.jpg"
    },
    {
        name: "Bold Peaks", 
        description: "Named for its twin peaks. They're hard to miss.", 
        image: "https://farm6.staticflickr.com/5558/14609561139_fd284fde88_b.jpg"
    }
]
 
function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        // Comment.remove({}, function(err) {
        //     if(err){
        //         console.log(err);
        //     }
        //     console.log("removed comments!");
        //      //add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err){
        //                 console.log(err)
        //             } else {
        //                 console.log("added a campground");
        //                 //create a comment
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet",
        //                         author: "Homer"
        //                     }, function(err, comment){
        //                         if(err){
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created new comment");
        //                         }
        //                     });
        //             }
        //         });
        //     });
        // });
    }); 
    //add a few comments
}
 
module.exports = seedDB;