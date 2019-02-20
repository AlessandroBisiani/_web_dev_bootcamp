let mongoose = require("mongoose");

// SCHEMA
var campgroundSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"},
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    price: String
}); 

module.exports = mongoose.model("Campground", campgroundSchema);