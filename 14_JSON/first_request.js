var request = require("request");
request("http://www.google.com", function(error, response, body){
    if(!error && response.statusCode == 200){
        console.log(body);
    } else if(error){
        console.log(error);
    }
});

// http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 
// http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 
// apikey=thewdb 