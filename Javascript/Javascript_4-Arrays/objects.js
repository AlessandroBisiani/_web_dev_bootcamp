var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

someObject.friends[0]

var movies = [
    {title: "First",
     rating: 4.5,
     hasWatched: true},
     {title: "Second",
     rating: 5,
     hasWatched: false},
     {title: "Third",
     rating: 3.5,
     hasWatched: false},
     {title: "Fourth",
     rating: 4,
     hasWatched: true},
];

var sampling = movies.forEach(function(film){
    var message = "You have "
    if(film.hasWatched === false){
        message += "not "
    }
    message += ("seen \"" + film.title + "\" - " + film.rating + " stars")
    console.log(message);
});