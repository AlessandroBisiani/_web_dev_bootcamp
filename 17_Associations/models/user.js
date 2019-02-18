var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });


//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name:String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Post"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);