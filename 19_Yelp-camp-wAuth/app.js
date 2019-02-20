const express       = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    port            = 8080,
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    Campground      = require("./models/campground"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    seedDB          = require("./seeds");

//Requiring Routes
let     commentRoutes       = require("./routes/comments.js"),
        campgroundRoutes    = require("./routes/campgrounds.js"),
        indexRoutes         = require("./routes/index.js");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
//Seed the database
// seedDB();

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "Rusty wins.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


//Using Routers
app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(port, function(){
    console.log("server started");
    console.log("port: " + port);
});