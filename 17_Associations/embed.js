var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post.js");
var User = require("./models/user.js");




// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Elcher"
// });

// //Find user and all their posts
// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, foundUser){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundUser);
//     }
// });



Post.create({
    title: "Second Post",
    content: "sydtrjkdtk7dt6ylr687;lr687l;"
}, function(err, post){
    if(err){
        console.log(err);
    }
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});




// User.findOne({name: "Hairy Potter"}, function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         user.posts.push({
//             title: "three hateful things",
//             content: "Ay, bee, and Cee."
//         });
//         user.save(function(err, user){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(user);
//             }
//         });
//         console.log(user);
//     }
// });


// var newUser = new User({
//     email: "potter@gmail.com",
//     name: "Hairy Potter"
// });

// newUser.posts.push({
//     title: "some1",
//     content: "Does a thing"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflective Apples",
//     content: "Delicious apples. Am I a worm?"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

