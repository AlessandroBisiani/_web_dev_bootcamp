let mongoose = require("mongoose");

// SCHEMA
var campgroundSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Campground", campgroundSchema);